'use strict';

import range from 'lodash/range.js';
import Snap from 'snapsvg';
import Glyphs from './glyphs.js';
// import Settings from './settings.js';
import Symbol from './symbol.js';
import Note from './note.js';
import Rest from './rest.js';
import Flat from './accidential_flat.js';
import Sharp from './accidential_sharp.js';
import Dot from './dot.js';

export default class Score {
    constructor(eleName) {
        this.paper = Snap(eleName);
    }

    draw() {

        for (var i in range(0, 8)) {
            var note = new Note(i, i * 20 + 10, 20, 2);
            note.draw(this.paper);
        }

        var sharp = new Sharp(10, 50);
        sharp.draw(this.paper);

        var flat = new Flat(30, 50);
        flat.draw(this.paper);

        var dot = new Dot(10, 80);
        dot.draw(this.paper);

        var symbol = new Symbol('.', 10, 500);
        symbol.draw(this.paper);
    }
}