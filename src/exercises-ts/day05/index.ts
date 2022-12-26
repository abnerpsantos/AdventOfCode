import { MainProps } from "../../types/Main.type"
import { day05PartOne } from "./partOne"
import { day05PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day05PartOne()
	}
	partTwo() {
		day05PartTwo()
	}
}
export default { Main }
