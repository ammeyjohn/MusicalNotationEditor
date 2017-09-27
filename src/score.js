'use strict';

import Snap from 'snapsvg';
import Settings from './settings.js';

class Score {
    constructor(eleName) {
        this.paper = Snap(eleName);
    }

    draw(text) {
        var t = this.paper.text(50, 50, text);
        t.attr({
            'font-size': '24px',
            'font-family': Settings.defaults.number_font 
        });
    }
}


export default Score;