'use strict';

import './editor.scss';
import { getPaperSize } from '../utils.js';
import utils from '../utils.js';
import drm from '../doremi.js';

console.log(utils);
var size = getPaperSize('A4');
$('svg').css(size);