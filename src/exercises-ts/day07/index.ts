import { MainProps } from "../../types/Main.type"
import { day07PartOne } from "./partOne"
import { day07PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day07PartOne()
	}
	partTwo() {
		day07PartTwo()
	}
}
export default { Main }
