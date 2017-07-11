var fs=require('fs');
fs.readFile('textfile.txt',function(err,data){

    if(err){
    console.log('error happen during file read time');
}
setTimeout(()=>{

    console.log(data.toString());

},1000)

console.log('End of the line');


});