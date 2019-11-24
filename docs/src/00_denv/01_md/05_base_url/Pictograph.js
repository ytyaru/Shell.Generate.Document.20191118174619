export class Pictograph {
    constructor(id) {
        this.id = id;
        this.alt = "";
        this.title= "";
        this.src= "";
        this.link= "";
        this.element = null;
    }
    get Id() { return this.id; } // SVGアイコン画像ID（拡張子を除いたファイル名。小文字スネークケース）
    get Alt() { return this.alt; }
    get Title() { return this.title; }
    get Src() { return this.src; }
    get Link() { return this.link; }

    set Alt(value) { if (value) { this.alt = value; } }
    set Title(value) { if (value) { this.title = value; } }
    set Link(value) { if (value) { this.link = value; } }

    toElement() {
        var elm = null;
        var img = document.createElement('img');
        img.className = "pictograph";
        img.src = this.__getIconPath(this.Id);
        if (this.Alt) img.alt = this.Alt;
        if (this.Title) img.title = this.Title;
        if (!this.Link) { this.element = img; }
        else {
            var a = document.createElement('a');
            a.href = this.Link;
            a.appendChild(img);
            this.element = a;
        }
        return this.element;
    }
    // <img class="pictograph" src=".../id.svg" alt="" title="">
    // <a href="link"><img class="pictograph" src=".../id.svg" alt="" title=""></a>
    toHtml() { return this.element.outerHTML; }
    // ![Alt](Url "Title")
    // [![Alt](ImgSrc "Title")](LinkUrl)
    toMarkdown() {
        throw "Not implement.";
    }
    // ドメインからの相対パス
    __getRepoName() { // https://{user}.github.io/{repo}/...
        console.log('__getRepoName:', window.location.pathname.split('/')[1]);
        return window.location.pathname.split('/')[1];
    }
    __getIconPath() { return '/' + this.__getRepoName() + "/src/00_denv/01_md/00_icon/" + this.Id.toLowerCase() + ".svg"; }
}
