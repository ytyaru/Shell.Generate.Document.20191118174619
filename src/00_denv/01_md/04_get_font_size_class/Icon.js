class Icon {
    constructor(id) {
        this.width = 0;
        this.height = 0;
    }
    // SVGアイコン画像ID（拡張子を除いたファイル名。小文字スネークケース）
    get Id() {

    }
    get Alt() {

    }
    get Title() {

    }
    get Size() {

    }



    function ToHtml() {

    }
    // ![Alt](Url "Title")
    // [![Alt](ImgSrc "Title")](LinkUrl)
    function ToMarkdown() {

    }

}

<html>
<head>
    <script src="./getFontSize.js"></script>
    <script src="../01_path/getIconPath.js"></script>
    <script>
        /*
        function createImg(src, width, height) {
            var img = document.createElement("img");
            img.setAttribute("src", src);
            img.setAttribute("width", width);
            img.setAttribute("height", height);
            return img;
        }
        */
        function createImg(id, size) {
            var img = document.createElement("img");
            img.setAttribute("src", getIconPath(id));
            img.setAttribute("width", size);
            img.setAttribute("height", size);
            img.setAttribute("alt", id);
            img.setAttribute("title", id);
            return img;
        }
        function appendImgToBody() {
            var size = getFontSize();
//            var imgs = [getIconPath('linux'), getIconPath('debian'), getIconPath('raspbian')];
//            imgs.forEach(function(item) {
//                document.body.appendChild(createImg(item, size, size));
//            });
//            var imgs = [createImg('linux', size), createImg('debian', size), createImg('raspbian', size)];
            var img_ids = ['linux', 'debian', 'raspbian'];
            img_ids.forEach(function(id) {
                document.body.appendChild(createImg(id, size));
            });
        }
        window.onload = function() {
            console.log('icon-path: ', getIconPath('linux'));
            console.log('font-size: ', getFontSize());
            appendImgToBody();
        };
    </script>
</head>
<body>
    <h1>アイコン表示確認</h1>
    <p></p>
    <!--
    <img id="icon_linux"    src="" width="" height=""></img>
    <img id="icon_debian"   src="" width="" height=""></img>
    <img id="icon_raspbian" src="" width="" height=""></img>
    <img src="getIconPath('linux');"    width="getFontSize();" height="getFontSize();"></img>
    <img src="getIconPath('debian');"   width="getFontSize();" height="getFontSize();"></img>
    <img src="getIconPath('raspbian');" width="getFontSize();" height="getFontSize();"></img>
    -->
</body>
</html>
