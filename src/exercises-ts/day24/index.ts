import { MainProps } from "../../types/Main.type"
import { day24PartOne } from "./partOne"
import { day24PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day24PartOne()
	}
	partTwo() {
		day24PartTwo()
	}
}
export default { Main }
