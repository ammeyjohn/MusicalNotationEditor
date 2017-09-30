'use strict';

import Symbol from './symbol.js';
import Dot from './dot.js';

export default class Note extends Symbol {
    constructor(pitch, level = 0) {
        super(pitch.toString());
        this.__level = level;
    }

    draw(g, x, y) {
        // console.time('Draw note ' + super.name);

        var ele = super.draw(g, x, y);
        ele = this.__draw_pitch(g, ele);

        // console.timeEnd('Draw note ' + super.name);

        return ele;
    }

    __draw_pitch(g, note) {
        if (this.__level == 0) {
            return note;
        }

        var l = Math.abs(this.__level),
            d = Math.sign(this.__level);

        var grp = g.g(note);

        var x = super.box.x + super.box.w / 2 - 2,
            y = d > 0 ? super.box.y : super.box.y2;
        for (var i = 0; i < l; i++) {
            y += (-d * 5);

            var dot = new Dot().draw(g, x, y);
            grp.add(dot);
        }

        super.__update_box(grp);

        return grp;
    }
}

export var KEYS = {
    'LL1': new Note(1, -2),
    'LL2': new Note(2, -2),
    'LL3': new Note(3, -2),
    'LL4': new Note(4, -2),
    'LL5': new Note(5, -2),
    'LL6': new Note(6, -2),
    'LL7': new Note(7, -2),
    'L1': new Note(1, -1),
    'L2': new Note(2, -1),
    'L3': new Note(3, -1),
    'L4': new Note(4, -1),
    'L5': new Note(5, -1),
    'L6': new Note(6, -1),
    'L7': new Note(7, -1),
    'M1': new Note(1, 0),
    'M2': new Note(2, 0),
    'M3': new Note(3, 0),
    'M4': new Note(4, 0),
    'M5': new Note(5, 0),
    'M6': new Note(6, 0),
    'M7': new Note(7, 0),
    'U1': new Note(1, 1),
    'U2': new Note(2, 1),
    'U3': new Note(3, 1),
    'U4': new Note(4, 1),
    'U5': new Note(5, 1),
    'U6': new Note(6, 1),
    'U7': new Note(7, 1),
    'UU1': new Note(1, 2),
    'UU2': new Note(2, 2),
    'UU3': new Note(3, 2),
    'UU4': new Note(4, 2),
    'UU5': new Note(5, 2),
    'UU6': new Note(6, 2),
    'UU7': new Note(7, 2)
};