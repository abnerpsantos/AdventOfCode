import { MainProps } from "../../types/Main.type"
import { day6PartOne } from "./partOne"
import { day6PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day6PartOne()
	}
	partTwo() {
		day6PartTwo()
	}
}
export default { Main }
