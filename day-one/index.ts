import fs from "fs";
import path from "path";

//part one
fs.readFile(
  path.resolve(__dirname, "./input.txt"),
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }

    const parsedInventory = data.split("\n");
    const summedInventoryPerElf: number[] = [];
    let sumOfCalories = 0;

    for(let i =0; i < parsedInventory.length; i++) {
      if(parsedInventory[i] === '') {
        summedInventoryPerElf.push(sumOfCalories);
        sumOfCalories = 0;
      }
      else {
        sumOfCalories += Number(parsedInventory[i]);
      }
    }
    console.log('elf with max cals',Math.max(...summedInventoryPerElf))

    //part-two
    const sortedElfInventoryDescending = summedInventoryPerElf.sort((a,b) => b-a);
    console.log('sum of top 3 elves calories', summedInventoryPerElf[0] + summedInventoryPerElf[1] + summedInventoryPerElf[2])
  }
);

