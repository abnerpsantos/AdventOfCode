import { MainProps } from "../../types/Main.type"
import { day17PartOne } from "./partOne"
import { day17PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day17PartOne()
	}
	partTwo() {
		day17PartTwo()
	}
}
export default { Main }
