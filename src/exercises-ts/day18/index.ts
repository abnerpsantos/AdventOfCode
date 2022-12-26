import { MainProps } from "../../types/Main.type"
import { day18PartOne } from "./partOne"
import { day18PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day18PartOne()
	}
	partTwo() {
		day18PartTwo()
	}
}
export default { Main }
