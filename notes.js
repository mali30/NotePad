console.log("starting notes.js");

const fs = require('fs');


var fetchNotes = () => {
    try{
        // this part will allow us to keep adding notes without
        // removing whats already there
       return fs.readFileSync('notes-data.json');
       notes = JSON.parse(notesString);
    
        }catch(e){
            notes =  [];
    
        }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json' , JSON.stringify(notes));

};

var addNote = (title ,body) => {
    // empty array
    var notes = fetchNotes();
    // represents a new note
    var note = {
        title,
        body
    };

    // filtering for duplicate notes
    var duplicateNote = notes.filter((note) => {
        return note.title === title;
    });


    if(duplicateNote.length === 0){
    // pushing the new note to the notes
    notes.push(note);
    saveNotes(notes);
    }
};
    



var getAll = () => {
    console.log("Getting all Notes");
    console.log('Listing Notes', process.argv[2]);
};

var getNote = (title) => {
    console.log("Reading " , title)
};

var removeNotes = (title) => {
    console.log("Now removing " , title);
};


module.exports = {
    // this is ES6 syntax
    addNote,
    getAll,
    getNote, 
    removeNotes
};