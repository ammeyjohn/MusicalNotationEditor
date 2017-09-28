'use strict';

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
    constructor(name, x, y) {
        this.__name = name;
        if (!Glyphs[name]) {
            throw name + ' cannot be found.';
        }
        this.__glyph = clonePath(Glyphs[name].d);
        this.__glyph[0][1] += x;
        this.__glyph[0][2] += y;

        this.__size = {
            width: Glyphs[name].w,
            height: Glyphs[name].h
        };

        this.__bound = {
            top: y,
            left: x,
            bottom: y + this.__size.height,
            right: x + this.__size.width
        };
    }

    get bound() {
        return this.__bound;
    }

    draw(g, scale) {
        var path = g.path();
        path.attr({ path: this.__glyph });
    }
}