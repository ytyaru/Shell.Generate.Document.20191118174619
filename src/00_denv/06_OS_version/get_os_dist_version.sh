#KernelVersion() {
#	IsExistCmd() { type "$1" > /dev/null 2>&1; }
#	GetVersionFromDebian() { local f=/etc/debian_version; [ -f $f ] && cat $f; }
#	GetVersionFromLsb() { IsExistCmd lsb_release && { lsb_release -r | cut -f2; }; }
#	local version="$(GetVersionFromDebian)"; [ -n "$version" ] && { echo "$version"; return; };
#	version="$(GetVersionFromLsb)";          [ -n "$version" ] && { echo "$version"; return; };
#}
DistributionVersion() { lsb_release -r | cut -f2; }
DistributionCodename() { lsb_release -c | cut -f2; }
echo ========= Version ==========
echo $(DistributionVersion)
echo $(DistributionCodename)

