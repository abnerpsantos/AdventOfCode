import { MainProps } from "../../types/Main.type"
import { day7PartOne } from "./partOne"
import { day7PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day7PartOne()
	}
	partTwo() {
		day7PartTwo()
	}
}
export default { Main }
