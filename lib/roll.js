export default function roll(sides, dice, rolls){
    let res = [];
    for(let i = 0; i < rolls; i++){
        let n = 0;
        for(let j = 0; j < dice; j++){
            let addNum = Math.floor(Math.random() * sides) + 1;
            n += addNum;
        }
        res[i] = n;
    }

    let a = {
        sides:sides,
        dice: dice, 
        rolls: rolls,
        results: res
    }

    return JSON.stringify(a);
}