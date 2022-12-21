import { readFile } from "node:fs/promises"

export function getData(path: string) {
	return readFile(`./src/exercises-ts/day${path}/puzzle.txt`, "utf-8")
}
