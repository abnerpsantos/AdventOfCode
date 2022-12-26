import * as readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

const io = readline.createInterface({ input, output })

async function main() {
	// const whichDay = await io.question("Which day to execute? ")
	// const whichPart = await io.question("Which part to execute? ")
	const {
		default: { Main },
	} = await import(`./exercises-ts/day5/index`)
	/*
	if (whichPart.toLocaleLowerCase() === "one") {
		Main.prototype.partOne()
	}
	if (whichPart.toLocaleLowerCase() === "two") {
		Main.prototype.partTwo()
	}
	*/
	io.close()
	Main.prototype.partOne()
	Main.prototype.partTwo()
}

main()
