KernelRelease() { uname -r; }
KernelVersion() { uname -v; }
echo ========= Version ==========
echo $(KernelRelease)
echo $(KernelVersion)

