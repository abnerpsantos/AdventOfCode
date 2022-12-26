import { MainProps } from "../../types/Main.type"
import { day04PartOne } from "./partOne"
import { day04PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day04PartOne()
	}
	partTwo() {
		day04PartTwo()
	}
}

export default { Main }
