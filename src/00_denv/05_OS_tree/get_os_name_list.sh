Run() {
	. "$(cd $(dirname $0); pwd)/get_os_name.sh"
	# options:
	#   -r  : is_reverse=1.
	#   -c N: 未実装。case. N=0,1,2,3(raw,lower,upper,1文字目だけ大文字。デフォルト0)
	KernelGenealogyList() {
		local is_reverse=0
		local case_id=0
		AnalyzeParams() {
			local argc=$#
			local args=("$@")
			for ((a=0; a<argc; a++)); do
				case ${args[a]} in
				"-r" | "--reverse") is_reverse=1;;
				"-c" | "--case") let a++; case_id="${args[a]}";;
				"-h" | "--help") { Help; return 1; };;
				esac
			done
		}
		Help() {
			local msg=$(cat <<- EOS
				options:
				  -r  : is_reverse=1.
				  -c N: case. N=0,1,2,3 (raw,lower,upper,uppser1st). default is 0.
			EOS
			)
			echo -e "$msg"
		}
		AnalyzeParams "$@"; [ 0 -ne $? ] && return;
		local list=
		case $case_id in
			1) list="$(_KernelGenealogyList Lower)";;
			2) list="$(_KernelGenealogyList Upper)";;
			3) list="$(_KernelGenealogyList Upper1st)";;
			*) list="$(__KernelGenealogyList)";;
		esac
		[ 1 -eq $is_reverse ] && echo -e "$list" | tac || echo -e "$list"
	}
}
Run
echo ========= KernelGenealogyList ==========
KernelGenealogyList -h
echo
echo -e "$(KernelGenealogyList)"
echo
echo -e "$(KernelGenealogyList -r)"
echo
echo -e "$(KernelGenealogyList -c 3)"
echo
echo -e "$(KernelGenealogyList -r -c 3)"
echo
echo -e "$(KernelGenealogyList -r -c 2)"
echo
echo -e "$(KernelGenealogyList -r -c 1)"
echo

