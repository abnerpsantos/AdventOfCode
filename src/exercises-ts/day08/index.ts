import { MainProps } from "../../types/Main.type"
import { day08PartOne } from "./partOne"
import { day08PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day08PartOne()
	}
	partTwo() {
		day08PartTwo()
	}
}
export default { Main }
