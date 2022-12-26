import { MainProps } from "../../types/Main.type"
import { day13PartOne } from "./partOne"
import { day13PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day13PartOne()
	}
	partTwo() {
		day13PartTwo()
	}
}
export default { Main }
