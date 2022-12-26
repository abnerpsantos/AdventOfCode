import { MainProps } from "../../types/Main.type"
import { day14PartOne } from "./partOne"
import { day14PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day14PartOne()
	}
	partTwo() {
		day14PartTwo()
	}
}
export default { Main }
