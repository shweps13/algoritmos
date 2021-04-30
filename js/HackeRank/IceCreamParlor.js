'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
    // Write your code here
    
    // k = 4
    // cost = [1, 4, 5, 3, 2]
    
    // push arr to Map (number:position)
    // loop through the arr
        // if (k - arr[i]) exist in Map
        // return both el positions
        
    let map = new Map();
    let result = [];
    
    for (let i=0; i<arr.length; i++){
        map.set(arr[i], i)
    }
    // console.log('here',map)
    for (let j=0; j<arr.length; j++){
        let searchEl = m - arr[j]
        if (map.has(searchEl)){
            result.push(j+1);
            result.push(map.get(searchEl)+1);
            return result;
        }
    }
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const m = parseInt(readLine().trim(), 10);

        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = icecreamParlor(m, arr);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
