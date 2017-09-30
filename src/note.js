'use strict';

import Symbol from './symbol.js';
import Dot from './dot.js';

export default class Note extends Symbol {
    constructor(pitch, level = 0) {
        super(pitch.toString());
        this.__level = level;
    }

    draw(g, x, y) {
        console.time('Draw note ' + super.name);

        var ele = super.draw(g, x, y);
        ele = this.__draw_pitch(g, ele);

        console.timeEnd('Draw note ' + super.name);
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

        this.__update_box(grp);

        return grp;
    }
}