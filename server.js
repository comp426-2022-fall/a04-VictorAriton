#!/usr/bin/env node

import express from 'express';
import roll from './lib/roll.js';
import minimist from "minimist"
import parseArgs from 'minimist';


const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res) => {
    res.status(200);
    res.send("200 OK");
});

app.get("/app/roll", (req,res) => {
    res.status(200).json(roll(6,2,1));
})

app.post('/app/roll', (req, res, next) =>{
	let sides = parseInt(req.body.sides);
	let dice = parseInt(req.body.dice);
	let rolls = parseInt(req.body.rolls);
	
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(sides,dice,rolls));
});

app.get('/app/roll/:sides', (req, res) => {
    const sides =  parseInt(req.params.sides);
    res.send((roll(sides, 2,1)));
  })

  app.get('/app/roll/:sides/:dice', (req, res) => {
    const sides =  parseInt(req.params.sides);
    const dice =  parseInt(req.params.dice);
    res.status(200).json((roll(sides, dice,1)));
  })

  app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = parseInt(req.params.rolls);
    res.send(roll(sides, dice, rolls)).end();
});
app.use((req, res) =>{
    res.status(404).send("404 NOT FOUND").end();
});

app.listen(port);
