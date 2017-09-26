'use strict';

import './editor.scss';
import drm from '../doremi.js';

function getDPI() {
    return document.getElementById("dpi").offsetHeight;
}
console.log("DPI =", getDPI());

// A4 = 297*210mm
function getPixel() {
    var dpi = getDPI()
    var INCH_PER_MM = 25.4;
    var width = 210 / INCH_PER_MM * dpi;
    var height = 297 / INCH_PER_MM * dpi;
    $('svg').css({
        'width': width,
        'height': height
    });
}
getPixel();