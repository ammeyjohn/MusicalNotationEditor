'use strict';

import './editor.scss';
import $ from 'jquery';
import { getPaperSize } from '../utils.js';
// import utils from '../utils.js';
import Score from '../score.js';

var size = getPaperSize('A4');
$('svg').css(size);

var score = new Score('#svg');
score.draw('0 1 2 3 4 5 6 7 # b');

// 参考资料
/*
https://packages.debian.org/stable/fonts/fonts-oflb-euterpe
https://elbsound.studio/experiments-in-automatic-font-conversion.php
https://googlechrome.github.io/samples/classes-es6/
https://github.com/paulrosen/abcjs/blob/master/write/abc_glyphs.js
*/