"use strict";

var US = new Intl.DateTimeFormat("en-US");
var HUE = new Intl.DateTimeFormat("pt-BR");

console.log(US.format(new Date("2010-01-07")));
console.log(HUE.format(new Date("2010-01-07")));
