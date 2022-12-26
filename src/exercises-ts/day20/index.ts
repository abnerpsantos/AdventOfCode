import { MainProps } from "../../types/Main.type"
import { day20PartOne } from "./partOne"
import { day20PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day20PartOne()
	}
	partTwo() {
		day20PartTwo()
	}
}
export default { Main }
