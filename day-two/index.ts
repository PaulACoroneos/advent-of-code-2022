//part two
import fs from "fs";
import path from "path";

// A = ROCK, B = PAPER, C = SCISSORS
// X = ROCK, Y = PAPER, Z = SCISSORS
// X = 1, Y = 2, Z = 3
// LOSE = 0, DRAW = 3, WIN = 6

const SCORE_RESULT_PART_ONE: Record<string, number> = {
  "A X": 1 + 3,
  "A Y": 2 + 6,
  "A Z": 3 + 0,
  "B X": 1 + 0,
  "B Y": 2 + 3,
  "B Z": 3 + 6,
  "C X": 1 + 6,
  "C Y": 2 + 0,
  "C Z": 3 + 3,
};

// A = ROCK, B = PAPER, C = SCISSORS
//X = LOSE, Y = DRAW, Z = WIN
const SCORE_RESULT_PART_TWO: Record<string, number> = {
  "A X": 3 + 0,
  "A Y": 1 + 3,
  "A Z": 2 + 6,
  "B X": 1 + 0,
  "B Y": 2 + 3,
  "B Z": 3 + 6,
  "C X": 2 + 0,
  "C Y": 3 + 3,
  "C Z": 1 + 6,
};

fs.readFile(
  path.resolve(__dirname, "./input.txt"),
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }

    const parsedData = data.split("\n");

    let score = 0;
    parsedData.forEach((round) => {
      score += SCORE_RESULT_PART_ONE[round];
    });

    console.log("your final score part one", score);

    score = 0;
    parsedData.forEach((round) => {
      score += SCORE_RESULT_PART_TWO[round];
    });

    console.log("your final score part two", score);
  }
);
