/*************************************************
 * 
 * VexTab http://www.vexflow.com/vextab/tutorial.html
 * Vocabulary
 *  notation    谱号
 *  notes       音符   
 *  clef        谱号
 *  key
 *  tuning      曲调
 *  rest        休止符
 *  bar-line    小节线
 *      =||     Double Bar
 *      =|:  Repeat Begin 
 *      =:|  Repeat End 
 *      =::  Double Repeat 
 *      =|=  End Bar 
 *************************************************/


'use strict';

import Snap from 'snapsvg';
import './style.scss';

console.log("index.js.asdfasdf");

var s = Snap('#svg');
var bigCircle = s.circle(150, 150, 100);