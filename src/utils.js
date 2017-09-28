'use strict';

const Utils = {};

// 获取屏幕分辨率（PPI）
Utils.getPPI = function() {
    var ppi = 96;
    var div = document.createElement('div');
    div.style.width = '1in';
    div.style.top = '-100px';
    div.style.left = '-100px';
    div.style.position = 'absolute';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
    ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width');
    body.removeChild(div);
    return parseInt(ppi);
};

// 获取纸张的屏幕尺寸（像素）
Utils.getPaperSize = function(type) {
    // 定义纸张尺寸（毫米）
    var PAPERS = {
        'A4': {
            width: 210,
            height: 297
        }
    };
    // 每英寸25.4毫米
    var INCH_PER_MM = 25.4;
    var ppi = Utils.getPPI();
    var paper = PAPERS[type];
    var width = paper.width / INCH_PER_MM * ppi;
    var height = paper.height / INCH_PER_MM * ppi;
    return {
        'width': width,
        'height': height
    };
};

// 单独导出每个方法
for (var fn in Utils) {
    exports[fn] = Utils[fn];
}
export default Utils;