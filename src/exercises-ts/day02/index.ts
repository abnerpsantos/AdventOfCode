import { MainProps } from "../../types/Main.type"
import { day02PartOne } from "./partOne"
import { day02PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day02PartOne()
	}
	partTwo() {
		day02PartTwo()
	}
}

export default { Main }
