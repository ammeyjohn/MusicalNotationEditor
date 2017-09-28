'use strict';

import Symbol from './symbol.js';

export default class Note extends Symbol {
    constructor(name, x, y, duration = 1) {
        super(name.toString(), x, y);
        this.__duration = duration;
    }

    get duration() {
        return this.__duration;
    }

    draw(g, scale) {
        super.draw(g, scale);

        var b = super.bound;
        var l = g.line(b.left, b.bottom - 10, b.right, b.bottom - 10);
        l.attr({ stroke: 'black' });
    }
}