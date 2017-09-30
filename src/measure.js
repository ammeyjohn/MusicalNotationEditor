'use strict';

export default class Measure {
    constructor(symbols, size) {
        this.__symbols = symbols;
        this.__box = {
            x: 0.0,
            y: 0.0,
            x2: 0.0,
            y2: 0.0,
            w: size.w,
            h: size.h
        };
    }

    draw(g, x, y) {
        var grp = g.g();
        for (var idx in this.__symbols) {
            var sym = this.__symbols[idx];
            var ele = sym.draw(g, x + 30 * idx + 10, y + 10);
            grp.add(ele);
        }
        return grp;
    }
}