const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const Cryptr = require('cryptr');
cryptr = new Cryptr('oleksii');
const cors = require('cors');
const express = require("express");
		app = express(),
		http = require("http").Server(app).listen(80),
		upload = require("express-fileupload");
app.use(cors())
app.use(upload())
app.use(express.static(__dirname + '/public'));
console.log("Server started")
app.get("/",function(req,res){
	res.sendFile(__dirname+"/index2.html");
})
app.post("/encode",function(req,res){
	if(req.files){
		const file = req.files.filename,
		filename = req.files.filename;
		let dataFromFile = filename.data;
	 	const mykey = cryptr.encrypt(dataFromFile);
			fs.appendFileSync("./EncryptedFiles/"+"Encrypted-" + filename.name, mykey +'\n');
			res.download("./EncryptedFiles/"+"Encrypted-" + filename.name);
	}
 })
 

app.post("/decode",function(req,res){
	if(req.files){
		
		const file = req.files.filename,
		filename = req.files.filename;
		console.log(filename.data); 
	 	let dataFromFile = filename.data;
	 	const mykey = cryptr.decrypt(dataFromFile);
		
				  fs.appendFileSync("./DecryptedFiles/"+"Decrypted-" + filename.name, mykey +'\n');
				  res.download("./DecryptedFiles/"+"Decrypted-" + filename.name);
					
	}
 })

 

