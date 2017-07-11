var fs=require('fs');
var data=fs.readFileSync('textfile.txt');
console.log(data.toString());
console.log("End of the file");