console.log("Starting app.js");

const _ = require('lodash');
const yargs = require('yargs');

// fetching fs module and storing in variable fs
const fs = require('fs');



// parses the same argv array that node does 
const argv  = yargs.argv;
// we are requiring the the notes.js file
const notes = require('./notes.js');

//console.log(process.argv);

//console.log("Process", process.argv);
console.log("Yargs" , argv);

var command = argv._[0];
console.log("Command: " , command);

if(command === "add"){
	//console.log("Adding new note");
	notes.addNote(argv.title , argv.body);
}
else if(command === "list")
{
	console.log("listing all notes");
	notes.getAll();
} 
else if (command === "read")
{
	console.log("now reading notes");
	notes.getNote(argv.title);
}
else if(command === "remove")
{
	console.log("Now removing notes");
	notes.removeNotes(argv.title , argv.body);
}
else
{
	console.log("command not recognized");
}