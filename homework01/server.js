//import it
const express = require("express");
const chance = require("chance");
const fs = require("fs");

//create the app
const app = express();
const myChance = chance();
app.use(express.static("public"));


//3 configure by adding routes
app.get("/", (req, res) => {
	const template = fs.readFileSync("templates/homepage.html", "utf8");
	let count = fs.readFileSync("public/counter.json", "utf8");
	count++;
	fs.writeFileSync("public/counter.json", count);
	const text = template.replace("%%INTRO%%", "You are staying late at your job in the NYU IT department at 726 Broadway to get ahead of some service tickets when you hear a blood-curdling scream from above the foam dropped ceiling. Above you is the Center for Soft Matter Research. "Soft matter." What a broad designation! They're definitely doing some weird shit up there. They are definitely poking around people's brains, no matter what their website claims.</p><p>Just as your brain is shriveling into the corner of your cranium at that thought, an alarm blares across your floor. You are out of there!");
	text = text.replace("%%TITLE%%", "ESCAPE FROM MANHATTAN")
	res.send(text);
})
app.get("/upstairs", (req, res) => {
	const template = fs.readFileSync("templates/dead.html", "utf8");
	const text = "You walk toward the stairway, but suddenly you hear an animalistic growl as you tuen a corner. It's your boss. Something is off with him. 'SSSSSSSSSSSS. LLLLLLLLLLLLLLLLLLLLLLLLL. AAAAAAAAAAAAAAAAAAAAAAAAA,' he slurs. His eyes are a toxic green pierced by inflamed blood vessels. He lunges at you, grabs your skull, and digs in.";	
	res.send(template.replace('%%TEXT%%', text));
});
app.get("/getout", (req, res) => {
	const template = fs.readFileSync("templates/dead.html", "utf8");
	const text = "You walk toward the stairway, but suddenly you hear an animalistic growl as you turn a corner. It's your boss. Something is off with him. 'SSSSSSSSSSSS. LLLLLLLLLLLLLLLLLLLLLLLLL. AAAAAAAAAAAAAAAAAAAAAAAAA,' he slurs. His eyes are a toxic green pierced by inflamed blood vessels. He lunges at you, grabs your skull, and digs in.";	
	res.send(template.replace('%%TEXT%%', text));
});
app.get("/resolve", (req, res) => {
	const template = fs.readFileSync("templates/dead.html", "utf8");
	const text = "You walk toward the stairway, but suddenly you hear an animalistic growl as you tuen a corner. It's your boss. Something is off with him. 'SSSSSSSSSSSS. LLLLLLLLLLLLLLLLLLLLLLLLL. AAAAAAAAAAAAAAAAAAAAAAAAA,' he slurs. His eyes are a toxic green pierced by inflamed blood vessels. He lunges at you, grabs your skull, and digs in.";	
	res.send(template.replace('%%TEXT%%', text));
});
//start server
app.listen(3000, () => {
	console.log("The server is ready");
});