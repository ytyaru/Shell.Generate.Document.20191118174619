RevisionTsv() { echo "${HOME}/root/sys/workflow/db/os/rpi/revisions.tsv"; }
GetRpiRevision() { cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'; }
# $1: GetRpiRevision
GetRpiModelName() { cat "$(RevisionTsv)" | grep "$1" | cut -f 2; }
