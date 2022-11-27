#!/usr/bin/env node

// All the necessary import statements 
import minimist from "minimist"
import express from "express"
import roll from "./lib/roll.js"

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.use(express.urlencoded({extended:true}));

// this is part three in the assignment
app.get('/app/', (req, res) => {
    res.status(200);
    res.send("200 OK");
});
// part 4
app.get('/app/roll/', (req, res) => {
    let sides = 6;
	let dice = 2;
	let rolls = 1;
    res.send(roll(sides, dice, rolls));
});
// part 5
app.post('/app/roll/', (req, res, next) => { //endpoint HTTP accept
    let sides = parseInt(req.body.sides);
    let dice = parseInt(req.body.dice);
    let rolls = parseInt(req.body.rolls);
    res.send(roll(sides, dice, rolls)).end();
});
// part 6
app.get('/app/roll/:sides/', (req, res, next) => {
    let sides = parseInt(req.params.sides);
    let dice =2;
    let rolls = 1;
    res.send(roll(sides, dice, rolls)).end();
});
// part 7
app.get('/app/roll/:sides/:dice/', (req, res, next) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = 1;
    res.send(roll(sides, dice, rolls)).end();
});
// part 8
app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = parseInt(req.params.rolls);
    res.send(roll(sides, dice, rolls)).end();
});

//From here downward is the default default route
app.use((req, res) =>{
    res.status(404).send("404 NOT FOUND").end();
});
// setup the server
app.listen(port);