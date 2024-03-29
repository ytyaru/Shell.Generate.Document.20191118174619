GetIconMd() {
	local SCRIPT_DIR="$(cd $(dirname $0); pwd)"
	local PATH_DIR="$(cd $(dirname $SCRIPT_DIR); pwd)/01_path"
	local PATH_FILE="$PATH_DIR/get_icon_path.sh"
	. "$PATH_FILE"
	ImgMd() { echo '!['"$1"']('"$(GetIconRealPath "$1")"" \"$1\""')'; }
	echo "$(ImgMd "$1")"
}
echo $(GetIconMd Linux)
echo $(GetIconMd Debian)
echo $(GetIconMd Raspbian)

