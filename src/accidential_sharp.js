'use strict';

import Accidental from './accidental.js';

export default class Sharp extends Accidental {
    constructor(x, y) {
        super('sharp', x, y);
    }

    draw(g, scale) {
        super.draw(g, scale);
    }
}