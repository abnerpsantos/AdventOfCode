import { MainProps } from "../../types/Main.type"
import { day19PartOne } from "./partOne"
import { day19PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day19PartOne()
	}
	partTwo() {
		day19PartTwo()
	}
}
export default { Main }
