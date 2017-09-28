'use strict';

import Note from './note.js';

export default class Rest extends Note {
    constructor(name, x, y, duration = 1) {
        super('rests.' + name.toString(), x, y, duration);
        this.__duration = duration;
    }

    draw(g, scale) {
        super.draw(g, scale);
    }
}