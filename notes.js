

const fs = require('fs');


var fetchNotes = () => {
    try{
        // this part will allow us to keep adding notes without
        // removing whats already there
        var notesString = fs.readFileSync('notes-data.json');
       //return fs.readFileSync('notes-data.json');
       return  JSON.parse(notesString);
    
        }catch(e){
            notes = [];
    
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
    return note;
    }
};
    



var getAll = () => {
    return fetchNotes();
};


var getNote = (title) => {
    console.log("Reading : " , title)

    // fetch notes
    var notes = fetchNotes();
    //notes.filter to only return notes that match the argument passed in
    var filterNotes = notes.filter((note) => {
        return note.title === title;
    });
    // return the first item in the array
    return filterNotes[0];
};







var removeNotes = (title) => {
    // fetch the notes
    var notes = fetchNotes();
    // filter out notes, removing the one with title of argument
    var filterNotes = notes.filter((note) => {
        return note.title !== title;
    });
    // save new notes array
    saveNotes(filterNotes)

    // if true then we assume  a note was removed
    // if false then we assume that a note was not removed
    return notes.length !== filterNotes.length;


}

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  };





module.exports = {
    // this is ES6 syntax
    addNote,
    getAll,
    getNote, 
    removeNotes,
    logNote

};
