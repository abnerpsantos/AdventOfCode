import { MainProps } from "../../types/Main.type"
import { day12PartOne } from "./partOne"
import { day12PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day12PartOne()
	}
	partTwo() {
		day12PartTwo()
	}
}
export default { Main }
