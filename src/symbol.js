'use strict';

import Snap from 'snapsvg';
import Glyphs from './glyphs.js';

var clonePath = function(pathArray) {
    var res = [];
    for (var i = 0, ii = pathArray.length; i < ii; i++) {
        res[i] = [];
        for (var j = 0, jj = pathArray[i].length; j < jj; j++) {
            res[i][j] = pathArray[i][j];
        }
    }
    return res;
};

export default class Symbol {
    constructor(name) {
        this.__name = name;
        this.__glyph = Glyphs[name];
        if (!this.__glyph) {
            throw 'Glyphs "' + name + '" cannot be found.';
        }
        this.__box = {
            x: 0.0,
            y: 0.0,
            x2: 0.0,
            y2: 0.0,
            w: this.__glyph.w,
            h: this.__glyph.h
        };
    }

    get name() {
        return this.__name;
    }

    get box() {
        return this.__box;
    }

    draw(g, x, y) {
        console.time('Draw symbol ' + this.__name);

        this.__ele = g.path()
            .attr({ "path": this.__glyph.d, "stroke-width": 0 })
            .transform('t' + x + ',' + y);
        this.__update_box(this.__ele);

        console.timeEnd('Draw symbol ' + this.__name);

        return this.__ele;
    }

    __update_box(ele) {
        var box = ele.getBBox();
        this.__box = {
            x: box.x,
            y: box.y,
            x2: box.x2,
            y2: box.y2,
            w: box.w,
            h: box.h
        };
        return this.__box;
    }
}