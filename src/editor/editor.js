'use strict';

import './editor.scss';
import $ from 'jquery';
import { getPaperSize } from '../utils.js';
// import utils from '../utils.js';
// import drm from '../doremi.js';

var size = getPaperSize('A4');
$('svg').css(size);