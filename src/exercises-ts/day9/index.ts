import { MainProps } from "../../types/Main.type"
import { day9PartOne } from "./partOne"
import { day9PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day9PartOne()
	}
	partTwo() {
		day9PartTwo()
	}
}
export default { Main }
