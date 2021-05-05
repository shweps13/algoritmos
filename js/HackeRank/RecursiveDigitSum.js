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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function recursiveDigit(p) {
    // base case
    if (p.length === 1) {
        return parseInt(p);
    }
    
    // iterate over p
    let pSum = 0;
    for (let i=0; i<p.length; i++) {
        // sum over digits together
        // convert each symbol to integer
        pSum = pSum + parseInt(p[i])
    }
        
    // call function with new digits (as a string)
    if (pSum.toString().length === 1) {
        return pSum;
    }
    return recursiveDigit(pSum.toString())
}

function superDigit(n, k) {
    // Write your code here

    // create 'p'
    let p = (recursiveDigit(n) * k).toString();

    // call a recursive func
    return recursiveDigit(p)
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
