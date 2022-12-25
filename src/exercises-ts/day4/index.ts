import { MainProps } from "../../types/Main.type"
import { day4PartOne } from "./partOne"
import { day4PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day4PartOne()
	}
	partTwo() {
		day4PartTwo()
	}
}

export default { Main }
