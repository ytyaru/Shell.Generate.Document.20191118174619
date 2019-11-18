# RPI_RevisionList

<!-- more -->

# 成果物

* []()

# 情報源

* https://elinux.org/RPi_HardwareHistory

# 一覧表

RPI_Revisions.tsv
```tsv
Revision	Model	Memory	Release Date
Beta	B (Beta)	256 MB	Q1 2012
0002	B	256 MB	Q1 2012
0003	B (ECN0001)	256 MB	Q3 2012
0004	B	256 MB	Q3 2012
0005	B	256 MB	Q4 2012
0006	B	256 MB	Q4 2012
0007	A	256 MB	Q1 2013
0008	A	256 MB	Q1 2013
0009	A	256 MB	Q1 2013
000d	B	512 MB	Q4 2012
000e	B	512 MB	Q4 2012
000f	B	512 MB	Q4 2012
0010	B+	512 MB	Q3 2014
0011	Compute Module 1	512 MB	Q2 2014
0012	A+	256 MB	Q4 2014
0013	B+	512 MB	Q1 2015
0014	Compute Module 1	512 MB	Q2 2014
0015	A+	256 MB / 512 MB	?
a01040	2 Model B	1 GB	Unknown
a01041	2 Model B	1 GB	Q1 2015
a21041	2 Model B	1 GB	Q1 2015
a22042	2 Model B (with BCM2837)	1 GB	Q3 2016
900021	A+	512 MB	Q3 2016
900032	B+	512 MB	Q2 2016?
900092	Zero	512 MB	Q4 2015
900093	Zero	512 MB	Q2 2016
920093	Zero	512 MB	Q4 2016?
9000c1	Zero W	512 MB	Q1 2017
a02082	3 Model B	1 GB	Q1 2016
a020a0	Compute Module 3 (and CM3 Lite)	1 GB	Q1 2017
a22082	3 Model B	1 GB	Q1 2016
a32082	3 Model B	1 GB	Q4 2016
a020d3	3 Model B+	1 GB	Q1 2018
9020e0	3 Model A+	512 MB	Q4 2018
a02100	Compute Module 3+	1 GB	Q1 2019
a03111	4 Model B	1 GB	Q2 2019
b03111	4 Model B	2 GB	Q2 2019
c03111	4 Model B	4 GB	Q2 2019
```

# 取得

```sh
Define() {
	RevisionTsv() { echo "${HOME}/root/sys/workflow/db/os/rpi/revisions.tsv"; }
	GetRpiRevision() { cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'; }
	# $1: Revision
	GetRpiModelName() {	cat "$(RevisionTsv)" | grep "$1" | cut -f 2; }
}
Run() {	GetRpiModelName "$(GetRpiRevision)"; }
Run
```


get_model_name_of_rpi.sh
```sh
RevisionTsv() { echo "${HOME}/root/sys/workflow/db/os/rpi/revisions.tsv"; }
GetRpiRevision() { cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'; }
# $1: Revision
GetRpiModelName() {	cat "$(RevisionTsv)" | grep "$1" | cut -f 2; }
Run() {	GetRpiModelName "$(GetRpiRevision)"; }
```
get_model_name_of_rpi
```
Define() { . get_model_name_of_rpi.sh; }
Run() {	GetRpiModelName "$(GetRpiRevision)"; }
Run
```



cat RPI_Revisions.tsv | grep 

# 対象環境

* <time datetime="2019-11-18T16:49:34+0900" title="実施日">2019-11-18</time>
* [Raspbierry pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B+
* [Raspbian stretch](https://ja.wikipedia.org/wiki/Raspbian) 9.0 2018-11-13
* [bash](https://ja.wikipedia.org/wiki/Bash) 4.4.12(1)-release

```sh
$ uname -a
Linux raspberrypi 4.19.42-v7+ #1218 SMP Tue May 14 00:48:17 BST 2019 armv7l GNU/Linux
```
