console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  if (fs.exists('notes-data.json')){
    var notesString = fs.readFileSync('notes-data.json');  
    notes = JSON.parse(notesString);
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
  else{
    notes.push(note);
    fs.appendFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Got note ', title)
};

var deleteNote = (title) => {
  console.log('Delete note ', title)
};

module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote
};
