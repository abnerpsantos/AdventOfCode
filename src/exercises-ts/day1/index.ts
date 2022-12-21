import { MainProps } from "../../types/Main.type"
import { day1PartOne } from "./partOne"
import { day1PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day1PartOne()
	}
	partTwo() {
		day1PartTwo()
	}
}

export default { Main }
