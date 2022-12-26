import { MainProps } from "../../types/Main.type"
import { day03PartOne } from "./partOne"
import { day03PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day03PartOne()
	}
	partTwo() {
		day03PartTwo()
	}
}

export default { Main }
