const path = require('path')

console.log(path.sep);

const filePath = path.join('/content','mycontent','test.txt') 

console.log(filePath);

baseName = path.basename(filePath)

console.log(baseName);

absulatePath = path.resolve(__dirname,'content','mycontent','test.txt')

console.log(absulatePath);