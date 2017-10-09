
var fs = require('fs'),
    readline = require('readline'),
    stream = require('stream'),
    logic = require('./logic.js'),
    stringSearcher = require('string-search');

var instream = fs.createReadStream(console.readline());
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

rl.on('line', function(line) {
    //console.log(line);
    stringSearcher.find(line, 'FATAL').then(function(res){
        if(logic.isEmptyObject(res)){
            //Currently does nothing
        }
        else{
            console.log(res);
        }

    }).catch(function(err){
        console.log(err);
    });

    // if (condition) {
        
    // } else {
        
    // }

    //Do your stuff ...
    //Then write to outstream
    //rl.write(cubestuff);
});