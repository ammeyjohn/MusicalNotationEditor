'use strict';

import range from 'lodash/range.js';
import Snap from 'snapsvg';
import Glyphs from './glyphs.js';
// import Settings from './settings.js';
import Note from './note.js';

export default class Score {
    constructor(eleName) {
        this.__paper = Snap(eleName);
    }

    draw() {
        console.time('Draw score');

        // 再高音区
        for (var i in range(0, 8)) {
            var note = new Note(i, 2);
            note.draw(this.__paper, i * 20 + 5, 50);
        }

        // 高音区
        for (var i in range(0, 8)) {
            var note = new Note(i, 1);
            note.draw(this.__paper, i * 20 + 165, 50);
        }

        // 中音区
        for (var i in range(0, 8)) {
            var note = new Note(i);
            note.draw(this.__paper, i * 20 + 325, 50);
        }

        // 低音区
        for (var i in range(0, 8)) {
            var note = new Note(i, -1);
            note.draw(this.__paper, i * 20 + 480, 50);
        }

        // 重低音区
        for (var i in range(0, 8)) {
            var note = new Note(i, -2);
            note.draw(this.__paper, i * 20 + 640, 50);
        }

        console.timeEnd('Draw score');
    }
}