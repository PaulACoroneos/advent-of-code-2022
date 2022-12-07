import fs from "fs";
import path from "path";

//part three
fs.readFile(
  path.resolve(__dirname, "./input.txt"),
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }

    const parsedData = data.split("\n");
    let prioritySum = 0;

    parsedData.forEach((rucksack) => {
        const leftCompartment = rucksack.slice(0,rucksack.length/2);
        const rightCompartment = rucksack.slice(rucksack.length/2);

        const hashTable:Record<string,boolean> = {};

        [...leftCompartment].forEach(item => {
          hashTable[item] = true;
        });

        for(let i =0; i < rightCompartment.length; i++) {
          if (hashTable[rightCompartment[i]]) {
            const charCode = rightCompartment[i].charCodeAt(0);
            prioritySum += rightCompartment[i].toUpperCase() === rightCompartment[i] ? charCode - 38 : charCode - 96
            break;
          }
        }
      
    });
    console.log("priority sum for part one", prioritySum);
  }
);

//part three two
fs.readFile(
  path.resolve(__dirname, "./input.txt"),
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }

    const parsedData = data.split("\n");
    let prioritySum = 0;

    for(let i =0 ; i < parsedData.length; i+=3 ) {
        const hashTable:Record<string,boolean> = {};
        const hashTableTwo:Record<string,boolean> = {};

        [...parsedData[i]].forEach(item => hashTable[item] = true);
        [...parsedData[i+1]].forEach(item => hashTableTwo[item] = true);

        for(let j = 0; j < parsedData[i+2].length; j++) {
          if(hashTable[parsedData[i+2][j]] && hashTableTwo[parsedData[i+2][j]]) {
            const charCode = parsedData[i+2][j].charCodeAt(0);
            prioritySum += parsedData[i+2][j].toUpperCase() === parsedData[i+2][j] ? charCode - 38 : charCode - 96;
            break;
          }
        }
      
    };
    console.log("priority sum for part two", prioritySum);
  }
);