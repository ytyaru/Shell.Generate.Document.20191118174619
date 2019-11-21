GetIconDir() { echo './src/00_denv/01_md/00_icon'; }
GetIconPath() { echo "$(GetIconDir)/${1,,}.svg"; }
#echo $(GetIconPath linux)
#echo $(GetIconPath debian)
#echo $(GetIconPath raspbian)
