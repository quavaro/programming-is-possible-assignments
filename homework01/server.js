//import it
const express = require("express");
//const chance = require("chance");
const fs = require("fs");

//create the app
const app = express();
app.use(express.static("public"));

let inventory = ['ID Card'];

//3 configure by adding routes
app.get("/", (req, res) => {
	const template = fs.readFileSync("templates/homepage.html", "utf8");

	let text = template.replace("%%INTRO%%", "You are staying late at your job in the NYU IT department at 726 Broadway to get ahead of some service tickets when you hear a blood-curdling scream from above the foam dropped ceiling. Above you is the Center for Soft Matter Research. 'Soft matter.' What a broad designation! They're definitely doing some weird shit up there. They are definitely poking around people's brains, no matter what their website claims.</p><p>Just as your brain is shriveling into the corner of your cranium at that thought, an alarm blares across your floor. You are out of there!");
	text = text.replace("%%TITLE%%", "ESCAPE FROM 726 Broadway");
	
	res.send(text);
})
app.get("/inventory", (req, res) => {
	let template = fs.readFileSync("templates/inventory.html", "utf8");
	let text = '<ul id="inventory">';
	inventory.forEach(item => {
		text += `<li class="item">${item}</li>`
	});
	text += '</ul>';
	let referrer = req.header('Referer');
	template = template.replace('%%BACK%%', referrer);
	res.send(template.replace('%%TEXT%%', text));
});
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
	if(inventory.indexOf('AXE') < 0 ){
		inventory.push('AXE');
	}
	let template = fs.readFileSync("templates/location.html", "utf8");
	template = template.replace('%%LOCATION%%', '726 Broadway, 4th Floor');
	template = template.replace("%%LINK1%%", '/run');
	template = template.replace("%%LINKTEXT1%%", "RUN!");
	template = template.replace("%%LINK2%%", '/attack');
	template = template.replace("%%LINKTEXT2%%", "TIMBERRR!");
	let text = "You finish your last ticket and begin walking toward the exit. Someone rounds the corner in a hurry and flags you down—a fireman. 'Hey, didn't you hear the alarm? We're clearing out the building. Some kind of chemical leak upstairs is driving people crazy.' Just as you reach him, a disheveled, bloody figure jumps on the fireman's back and starts attacking him. It's a scientist/zombie from Soft Matter Research! He's been infected. You pick up the axe that the fireman dropped and:";	
	res.send(template.replace('%%TEXT%%', text));
});
app.get("/run", (req, res) => {
	let template = fs.readFileSync("templates/location.html", "utf8");
	template = template.replace('%%LOCATION%%', 'Out the Door');
	template = template.replace("%%LINK1%%", '/');
	template = template.replace("%%LINKTEXT1%%", "Go back to the start");
	template = template.replace("%%LINK2%%", '/attack');
	template = template.replace("%%LINKTEXT2%%", "Go back and help the fireman");
	const text = "You run to the stairwell and fly down the stairs. You run into the lobby and out the door into the sweet night air, just as the police arrive.";	
	res.send(template.replace('%%TEXT%%', text));
});
app.get("/attack", (req, res) => {
	let template = fs.readFileSync("templates/dead.html", "utf8");
	const text = "You hack at at the lab zombie, but he doesn't go down. He turns his attention to you and grabs your skull and digs in.";	
	res.send(template.replace('%%TEXT%%', text));
});
//start server
app.listen(3000, () => {
	console.log("The server is ready");
});