import { MainProps } from "../../types/Main.type"
import { day8PartOne } from "./partOne"
import { day8PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day8PartOne()
	}
	partTwo() {
		day8PartTwo()
	}
}
export default { Main }
