export default function roll(sides, dice, rolls){

    let results = [];
    for(let i = 0; i < rolls; i++){
        let current = 0;
        for(let counter = 0; counter < dice; counter++){
            let addNum = Math.floor(Math.random() * sides) + 1;
            current += addNum;
        }
        results[i] = current;
    }

    let resultstring = {
        sides:sides,
        dice: dice, 
        rolls: rolls,
        results: results
    }


    return JSON.stringify(resultstring);
}