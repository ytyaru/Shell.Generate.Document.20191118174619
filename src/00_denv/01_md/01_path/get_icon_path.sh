GetIconDir() { echo './src/00_denv/01_md/00_icon'; }
GetIconPath() { echo "$(GetIconDir)/${1,,}.svg"; }
#https://github.com/ytyaru/Image.Icon.20191120145829/src/00_denv/01_md/00_icon
GetRootAbsDir() {
	local dir="${1:-$(GetThisDir)}"
	local name="$(basename $dir)"
	local abs_parent="$(cd $(dirname $dir); pwd)"
	[ '/' = "$abs_parent" ] && return;
	[ 'src' = "$name" ] && { echo "$abs_parent"; return; } || GetRootAbsDir "$abs_parent";
}
GetIconAbsDir() { echo "$(GetRootAbsDir "$(GetThisDir)")/src/00_denv/01_md/00_icon"; }
GetIconAbsPath() { echo "$(GetIconAbsDir)/${1,,}.svg"; }
GetThisDir() { echo "$(cd $(dirname $0); pwd)"; }
GetIconRealDir() { realpath --relative-to="$(GetThisDir)" "$(GetIconAbsDir)"; }
GetIconRealPath() { echo "$(GetIconRealDir)/${1,,}.svg"; }

#GetRootAbsDir "$(GetThisDir)"
#GetIconRealDir
#GetIconRealPath linux
#GetIconRealPath debian
#GetIconRealPath raspbian
#echo $(GetIconPath linux)
#echo $(GetIconPath debian)
#echo $(GetIconPath raspbian)
#GetThisDir
#GetIconDir
#GetIconRealDir
#GetIconRealPath linux
#GetIconRealPath debian
#GetIconRealPath raspbian

