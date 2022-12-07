import fs from "fs";
import path from "path";

fs.readFile(
  path.resolve(__dirname, "./input.txt"),
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedMsg = data.split('').filter(char => char !== ' ' && char !== "\n");
    let buffer:string[] = [];

    //part one
    for(let i =0; i < parsedMsg.length; i++) {
      buffer.push(parsedMsg[i]);
      if(buffer.length >3) {
        const set = new Set(buffer);
        if(set.size === 4) {
          console.log('part one index where we got 4 uniques', i+1);
          break;
        }
        else buffer.shift();
      }
    }
    //part two
    buffer = []
    for(let i =0; i < parsedMsg.length; i++) {
      buffer.push(parsedMsg[i]);
      console.log('buffer',buffer)
      if(buffer.length >13) {
        const set = new Set(buffer);
        if(set.size === 14) {
          console.log('part two index where we got 14 uniques', i+1);
          return;
        }
        else buffer.shift();
      }
    }
  }
);
