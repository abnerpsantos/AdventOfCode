import { MainProps } from "../../types/Main.type"
import { day2PartOne } from "./partOne"
import { day2PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day2PartOne()
	}
	partTwo() {
		day2PartTwo()
	}
}

export default { Main }
