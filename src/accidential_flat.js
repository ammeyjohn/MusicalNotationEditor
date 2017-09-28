'use strict';

import Accidental from './accidental.js';

export default class Flat extends Accidental {
    constructor(x, y) {
        super('flat', x, y);
    }

    draw(g, scale) {
        super.draw(g, scale);
    }
}