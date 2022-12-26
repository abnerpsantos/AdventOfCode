import { MainProps } from "../../types/Main.type"
import { day25PartOne } from "./partOne"
import { day25PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day25PartOne()
	}
	partTwo() {
		day25PartTwo()
	}
}
export default { Main }
