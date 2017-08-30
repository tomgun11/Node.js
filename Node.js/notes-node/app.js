console.log('Starting app.js');

//Third party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//Own created modules
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command: ", command);
console.log('Yargs', argv);

switch(command){
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        console.log('read');
        break;
    case 'write':
        console.log('write item');
        break;
    default:
        console.log('command not recognized');
        break;
}