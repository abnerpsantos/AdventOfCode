import { MainProps } from "../../types/Main.type"
import { day5PartOne } from "./partOne"
import { day5PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day5PartOne()
	}
	partTwo() {
		day5PartTwo()
	}
}
export default { Main }
