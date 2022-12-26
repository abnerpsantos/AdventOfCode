import { MainProps } from "../../types/Main.type"
import { day15PartOne } from "./partOne"
import { day15PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day15PartOne()
	}
	partTwo() {
		day15PartTwo()
	}
}
export default { Main }
