'use strict';

import range from 'lodash/range.js';
import Snap from 'snapsvg';
import Glyphs from './glyphs.js';
// import Settings from './settings.js';
import Note from './note.js';
import { KEYS } from './note.js';
import Measure from './measure.js';

export default class Score {
    constructor(eleName) {
        this.__paper = Snap(eleName);
    }

    draw() {
        console.time('Draw score');

        var offset = 18;
        for (var j = -2; j <= 2; j++) {
            for (var i in range(0, 8)) {
                var note = new Note(i, j);
                note.draw(this.__paper, i * 18 + offset, 50);
            }
            offset += 150;
        }

        var symbols = [
            KEYS.M1,
            KEYS.U1,
            KEYS.L1,
            KEYS.UU1
        ];
        var measure = new Measure(symbols, { w: 100, h: 50 });
        measure.draw(this.__paper, 5, 100);

        console.timeEnd('Draw score');
    }
}