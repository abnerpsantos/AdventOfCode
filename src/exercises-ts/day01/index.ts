import { MainProps } from "../../types/Main.type"
import { day01PartOne } from "./partOne"
import { day01PartTwo } from "./partTwo"

class Main implements MainProps {
	partOne() {
		day01PartOne()
	}
	partTwo() {
		day01PartTwo()
	}
}

export default { Main }
