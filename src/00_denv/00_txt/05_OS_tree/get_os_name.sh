KernelName() { uname -s; }
KernelLikeId() { cat /etc/os-release | grep '^ID_LIKE=' | cut -d '=' -f 2 | xargs echo; }
KernelId() { cat /etc/os-release | grep '^ID=' | cut -d '=' -f 2 | xargs echo; }

Upper1st() { echo "${1^}"; } # 1文字目を大文字にする。他はそのまま
Upper() { echo "${1^^}"; } # すべて大文字にする
Lower() { echo "${1,,}"; } # すべて小文字にする

__KernelGenealogyList() { echo -e "$(KernelName)\n$(KernelLikeId)\n$(KernelId)"; }
_KernelGenealogyList() { echo -e "$($1 $(KernelName))\n$($1 $(KernelLikeId))\n$($1 $(KernelId))"; }
echo ========= Names ==========
echo $(KernelName)
echo $(KernelLikeId)
echo $(KernelId)
echo $(__KernelGenealogyList)
echo -e "$(__KernelGenealogyList)" | tac | xargs echo
echo $(_KernelGenealogyList Upper)
echo $(_KernelGenealogyList Lower)
echo $(_KernelGenealogyList Upper1st)

