Run() {
	. "$(cd $(dirname $0); pwd)/get_os_name_list.sh"
	. "$(cd $(dirname $0); pwd)/Join.sh"
	KernelGenealogy() {
		local separator=
		AnalyzeParams() {
			local argc=$#
			local args=("$@")
			for ((a=0; a<argc; a++)); do
				case ${args[a]} in
				"-s" | "--separator") let a++; separator="${args[a]}";;
				"-h" | "--help") { Help; return 1; };;
				esac
			done
		}
		AnalyzeParams "$@"; [ 0 -ne $? ] && return;

		local list="$(echo -e "$(KernelGenealogyList $@)")"
		echo -e "$list" | Join "$separator"
		return
	}
	Help() {
		local msg=$(cat <<- EOS
		options:
		  -r      is_reverse. default is off.
		  -s '/'  separator. default is '/'.
		  -c N    case. N=0,1,2,3 (raw,lower,upper,uppser1st). default is 0.
		EOS
		)
		echo "$msg"
	}
}
Run
echo ========= KernelGenealogy ==========
KernelGenealogy -h
echo
KernelGenealogy
echo
KernelGenealogy -r
echo
KernelGenealogy -s ' / '
echo
KernelGenealogy -c 2
echo
KernelGenealogy -r -s ' / '
echo
KernelGenealogy -r -s ' / ' -c 3
echo

