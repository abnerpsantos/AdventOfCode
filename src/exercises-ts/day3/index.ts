import { MainProps } from "../../types/Main.type"
import { day3PartOne } from "./partOne"
import { day3PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day3PartOne()
	}
	partTwo() {
		day3PartTwo()
	}
}

export default { Main }
