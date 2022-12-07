import fs from "fs";
import path from "path";
// [J]             [F] [M]
// [Z] [F]     [G] [Q] [F]
// [G] [P]     [H] [Z] [S] [Q]
// [V] [W] [Z] [P] [D] [G] [P]
// [T] [D] [S] [Z] [N] [W] [B] [N]
// [D] [M] [R] [J] [J] [P] [V] [P] [J]
// [B] [R] [C] [T] [C] [V] [C] [B] [P]
// [N] [S] [V] [R] [T] [N] [G] [Z] [W]
//  1   2   3   4   5   6   7   8   9

const INITIAL_STACKS = [
  ["J", "Z", "G", "V", "T", "D", "B", "N"],
  ["F", "P", "W", "D", "M", "R", "S"],
  ["Z", "S", "R", "C", "V"],
  ["G", "H", "P", "Z", "J", "T", "R"],
  ["F", "Q", "Z", "D", "N", "J", "C", "T"],
  ["M", "F", "S", "G", "W", "P", "V", "N"],
  ["Q", "P", "B", "V", "C", "G"],
  ["N", "P", "B", "Z"],
  ["J", "P", "W"],
];
const INITIAL_STACKS_PART_TWO = [
  ["J", "Z", "G", "V", "T", "D", "B", "N"],
  ["F", "P", "W", "D", "M", "R", "S"],
  ["Z", "S", "R", "C", "V"],
  ["G", "H", "P", "Z", "J", "T", "R"],
  ["F", "Q", "Z", "D", "N", "J", "C", "T"],
  ["M", "F", "S", "G", "W", "P", "V", "N"],
  ["Q", "P", "B", "V", "C", "G"],
  ["N", "P", "B", "Z"],
  ["J", "P", "W"],
];

fs.readFile(
  path.resolve(__dirname, "./input.txt"),
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsedInstructions = data.split("\n");
    parsedInstructions.forEach((instruction) => {
      const moveQty = parseInt(instruction.split("from")[0].split(" ")[1]);
      const [from, to] = instruction.split("from")[1].split("to");
      const toRow = parseInt(to);
      const fromRow = parseInt(from);

      for (let i = 0; i < moveQty; i++) {
        const box = INITIAL_STACKS[fromRow-1].shift() as string;
        INITIAL_STACKS[toRow-1].unshift(box);
      }
    });
    console.log("stack with moves part one", INITIAL_STACKS.map(stack => stack[0]).join(''));

    parsedInstructions.forEach((instruction) => {
      const moveQty = parseInt(instruction.split("from")[0].split(" ")[1]);
      const [from, to] = instruction.split("from")[1].split("to");
      const toRow = parseInt(to);
      const fromRow = parseInt(from);
      let boxesToMove:string[] = [];
      for (let i = 0; i < moveQty; i++) {
        boxesToMove.push(INITIAL_STACKS_PART_TWO[fromRow-1].shift() as string);
      }
      INITIAL_STACKS_PART_TWO[toRow-1].unshift(...boxesToMove);
    });
    console.log("stack with moves part two", INITIAL_STACKS_PART_TWO.map(stack => stack[0]).join(''));
  }
);
