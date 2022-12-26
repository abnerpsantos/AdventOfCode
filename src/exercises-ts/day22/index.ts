import { MainProps } from "../../types/Main.type"
import { day22PartOne } from "./partOne"
import { day22PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day22PartOne()
	}
	partTwo() {
		day22PartTwo()
	}
}
export default { Main }
