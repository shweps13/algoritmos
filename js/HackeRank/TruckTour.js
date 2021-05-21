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
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
    // Write your code here
    let fuel = 0;
    let start = 0;
    let current = 0;
    
    while (start < petrolpumps.length) {
        fuel = fuel + petrolpumps[current][0];
        fuel = fuel - petrolpumps[current][1];
        current = (current + 1) % petrolpumps.length;
        if (fuel < 0) {
            fuel = 0;
            start = current
        } else if (current === start) {
            return start
        }
        
    }
    console.log(fuel)
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let petrolpumps = Array(n);

    for (let i = 0; i < n; i++) {
        petrolpumps[i] = readLine().replace(/\s+$/g, '').split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    const result = truckTour(petrolpumps);

    ws.write(result + '\n');

    ws.end();
}
