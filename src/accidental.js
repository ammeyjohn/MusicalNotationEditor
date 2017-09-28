'use strict';

import Symbol from './symbol.js';

export default class Accidental extends Symbol {
    constructor(name, x, y) {
        super('accidentals.' + name, x, y);
    }

    draw(g, scale) {
        super.draw(g, scale);
    }
}