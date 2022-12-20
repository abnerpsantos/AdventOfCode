import { readFile } from "node:fs/promises";

export function getData(path: string) {
  return readFile(`./src/exercises-ts/day${path}/rawData.txt`, "utf-8");
}
