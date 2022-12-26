import { MainProps } from "../../types/Main.type"
import { day23PartOne } from "./partOne"
import { day23PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day23PartOne()
	}
	partTwo() {
		day23PartTwo()
	}
}
export default { Main }
