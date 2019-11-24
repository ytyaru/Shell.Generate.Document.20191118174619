import { Pictograph } from "./Pictograph.js";
window.onload = function() {
    function appendImgToBody() {
        ['linux', 'debian', 'raspbian'].forEach(id => {
            console.log(id);
            var pict = new Pictograph(id);
            pict.Alt = id;
            pict.Title = id;
            document.body.appendChild(pict.toElement());
        });
    }
    // console.log('icon-path: ', getIconPath('linux'));
    // console.log('font-size: ', getFontSize());
    appendImgToBody();
};
