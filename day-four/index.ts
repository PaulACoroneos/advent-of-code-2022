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
    let overlappingCount = 0;
    let overlappingCountAtAll = 0;

    parsedInventory.forEach((pair) => {
      const [elfOne, elfTwo] = pair.split(",");
      const [elfOneMin, elfOneMax] = elfOne.split("-");
      const [elfTwoMin, elfTwoMax] = elfTwo.split("-");

      if (
        (parseInt(elfOneMin) <= parseInt(elfTwoMin) &&
          parseInt(elfOneMax) >= parseInt(elfTwoMax)) ||
        (parseInt(elfOneMin) >= parseInt(elfTwoMin) &&
          parseInt(elfOneMax) <= parseInt(elfTwoMax))
      ) {
        overlappingCount++;
      }

      if (
        parseInt(elfOneMin) >= parseInt(elfTwoMin) &&
        parseInt(elfOneMin) <= parseInt(elfTwoMax) ||
        parseInt(elfTwoMin) >= parseInt(elfOneMin) &&
        parseInt(elfTwoMin) <= parseInt(elfOneMax)
      ) {
        overlappingCountAtAll++;
      }
    });

    console.log("part one pairs with overlap are", overlappingCount);
    console.log("part one pairs with overlap at all", overlappingCountAtAll);
  }
);
