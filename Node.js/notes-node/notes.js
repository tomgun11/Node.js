console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Addning Note', title, body);
}

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
