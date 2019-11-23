class Size {
    constructor(width, height) {
        this.width = 16;
        this.height = 16;
        this.unit = 'px'; // imgの属性に使える単位は`px`,`%`のみ。ただしstyle属性ならemなども可。そもそもCSS化すべき。絵文字サイズは共通だから。
        let size = __getFontSize();
        if (size) { this.width = size; this.height = size; }
    }
    // https://qiita.com/anchoor/items/f197296d6b4ae874e260
    // https://stackoverflow.com/questions/1259123/how-can-i-display-an-image-using-the-em-unit
    // https://www.attend.jp/desine_170220
    static get UNITS() { return ['em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'q']; }
    get Width() { return this.width; }
    get Height() { return this.height; }
    set Width(value) { if (0 <= value) { this.width = value; } }
    set Height(value) { if (0 <= value) { this.height = value; } }
    get Unit() { return this.unit; }
    set Unit(value) {
        if (UNITS.some((item) => value == item)) { this.unit = value; }
    }

    // コンストラクタのオーバーロードができないため仕方なく別メソッドとして用意した
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    __getFontSize() {
        let size = this.__getFontSizeElement('p');
        if (null == size) { size = this.__getFontSizeElement('body'); }
        if (null == size) { size = this.__getFontSizeElement('html'); }
        return size;
    }
    __getFontSizeElement(elementName) {
        let elm = document.querySelector(elementName);
        if (!elm) { return null; }
        let styles = window.getComputedStyle(elm);
        if (!styles) { return null; }
        return styles.getPropertyValue('font-size');
    }
    __splitSizeUnit(fontSizeString) {
        /*
        let result = "";
        result = fontSizeString.replace('', '');
        UNITS.forEach(unit => { result = fontSizeString.replace(unit, ''); });
        UNITS.find(unit => { if (fontSizeString.endsWith(unit)) { Unit = unit; } });
        UNITS.find(unit => { if (fontSizeString.endsWith(unit)) { this.Unit = unit; } }, this);
        */
        this.Unit = UNITS.find(unit => fontSizeString.endsWith(unit))
        let size = fontSizeString.replace(this.Unit, '');
        this.Width = size;
        this.Height = size;
    }
}
