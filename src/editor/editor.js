'use strict';

import './editor.scss';
import $ from 'jquery';
import { getPaperSize } from '../utils.js';
// import utils from '../utils.js';
import Score from '../score.js';

var size = getPaperSize('A4');
$('svg').css(size);

var score = new Score('#svg');
score.draw();

// 参考资料
/*
https://zh.wikipedia.org/wiki/%E5%BC%B7%E5%BC%B1%E6%B3%95
https://packages.debian.org/stable/fonts/fonts-oflb-euterpe
https://elbsound.studio/experiments-in-automatic-font-conversion.php
https://googlechrome.github.io/samples/classes-es6/
https://github.com/paulrosen/abcjs/blob/master/write/abc_glyphs.js
*/