// It doesnt work adding this outside, you have to referesh var ranNum = Math.floor(Math.random() * sidenum) + 1;

export default function roll(numbersides, numberdice, numberrolls){
    let results = [];

    for(let i = 0; i < numberrolls; i++){
        let current = 0;
        for(let j = 0; j < dice; j++){
            var ranNum = Math.floor(Math.random() * numbersides) + 1;
            current += ranNum;
        }
        results[i] = current;

}
let futurestring = {
    sides:numbersides,
    dice: numberdice, 
    rolls: numberrolls,
    results: results
}

const resultString = JSON.stringify(futurestring);
return resultString;
}


