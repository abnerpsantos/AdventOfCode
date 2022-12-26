import { MainProps } from "../../types/Main.type"
import { day10PartOne } from "./partOne"
import { day10PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day10PartOne()
	}
	partTwo() {
		day10PartTwo()
	}
}
export default { Main }
