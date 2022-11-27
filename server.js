import minimist from "minimist"
import express from "express"
import roll from "./lib/roll.js"

const app = express();

const args = minimist(process.argv.slice(2));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
let port = 5000;

if(args.port){
    port = args.port;
}

app.get('/app/', (req, res) => {
    res.status(200);
    res.send("200 OK");
});

app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1));
});




app.post("/app/roll", (req, res) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    res.status(200).json(roll(sides,dice,rolls));
  })

app.get('/app/roll/:sides/', (req, res, next) => {
    let sides = parseInt(req.params.sides);
    res.send(roll(sides, 2, 1)).end();
});

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