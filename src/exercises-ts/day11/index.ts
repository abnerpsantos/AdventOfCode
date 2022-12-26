import { MainProps } from "../../types/Main.type"
import { day11PartOne } from "./partOne"
import { day11PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day11PartOne()
	}
	partTwo() {
		day11PartTwo()
	}
}
export default { Main }
