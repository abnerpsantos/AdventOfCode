import { MainProps } from "../../types/Main.type"
import { day21PartOne } from "./partOne"
import { day21PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day21PartOne()
	}
	partTwo() {
		day21PartTwo()
	}
}
export default { Main }
