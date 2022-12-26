import { MainProps } from "../../types/Main.type"
import { day16PartOne } from "./partOne"
import { day16PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day16PartOne()
	}
	partTwo() {
		day16PartTwo()
	}
}
export default { Main }
