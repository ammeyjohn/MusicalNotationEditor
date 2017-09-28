'use strict';

import Symbol from './symbol.js';

export default class Dot extends Symbol {
    constructor(x, y) {
        super('dots.dot', x, y);
    }

    draw(g, scale) {
        super.draw(g, scale);
    }
}