import { MainProps } from "../../types/Main.type"
import { day06PartOne } from "./partOne"
import { day06PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day06PartOne()
	}
	partTwo() {
		day06PartTwo()
	}
}
export default { Main }
