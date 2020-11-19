const fs =   require('fs');
const sup  =  require('superheroes');
const vil =  require('supervillains');

fs.copyFileSync('file1.txt', 'file2.txt');



var name = sup.random();
var oppa = vil.random();
console.log( name+"  vs  "+oppa);
