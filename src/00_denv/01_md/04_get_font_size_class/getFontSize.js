function getFontSize() {
    let p = document.querySelector('p');
    let styles = window.getComputedStyle(p);
    return styles.getPropertyValue('font-size');
}
