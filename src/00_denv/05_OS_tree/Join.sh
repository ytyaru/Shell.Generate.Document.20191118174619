# stdin: 結合したい文字列（delimiter: \n）
# $1: separator
Join() {
	local separator=${1:-/}
	IFS=$'\n'
	for line in $(cat -); do
		res+="$line$separator"
	done
	echo "$res" | head -c -$((${#separator} + 1));
}
#echo -e "A\nB\nC" | Join '#'

