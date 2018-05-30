//console.log("Starting app.js");
//console.log("pushing this change to repo");

const _ = require('lodash');
const yargs = require('yargs');

// fetching fs module and storing in variable fs
const fs = require('fs');



// parses the same argv array that node does 
const argv  = yargs.
command('add' , 'Add a new note', {
title: {
	describe: 'Title of Note',
	demand: true,
	alias: 't'
},
	body:{
		describe: "Body of Note",
		demand: true,
		alias: 'b'

	}
}).command('list' , 'List all notes')
.command('read' , 'Read a Note',{
	describe: 'Read a Note',
	demand: true,
	alias: 'r'



}).command('remove', ' Remove a Note' , {
	// title : titleOptions
	// const titleOptions{
	// describe: 'Title of notes'
	// demand : true,
	// alias: 't'
//	}
	describe: 'Remove a Note',
	demand: true,
	alias: 'r'
})
.help().argv;
// we are requiring the the notes.js file
const notes = require('./notes.js');

//console.log(process.argv);

//console.log("Process", process.argv);
console.log("Yargs" , argv);

var command = argv._[0];
//console.log("Command: " , command);

if(command === "add"){
	//console.log("Adding new note");
	var note = notes.addNote(argv.title , argv.body);
	if (note) {
		console.log("Congrats, the note was created");
		console.log('----');
		console.log(`Title : ${note.title}`);
		console.log(`Body: ${note.body}`);
	}else{
		console.log("Note already exists");
	}
}
else if(command === "list")
{
	console.log("listing all notes");
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => {
		notes.logNote(note);
	});
} 
else if (command === "read")
{
	console.log("now reading notes");
	var mynote = notes.getNote(argv.title);
	if( mynote){
		console.log('-------------');
		console.log(`Title : ${mynote.title}`);
	}else{
		console.log("Note not found");
	}
}
else if(command === "remove")
{
	console.log("Now removing note");
	var noteRemoved = notes.removeNotes(argv.title , argv.body);
	var message = noteRemoved ? 'Note was removed' : 'Note not found'
	console.log(message);
}
else
{
	console.log("command not recognized");
}
