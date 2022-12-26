import { MainProps } from "../../types/Main.type"
import { day09PartOne } from "./partOne"
import { day09PartTwo } from "./partTwo"
class Main implements MainProps {
	partOne() {
		day09PartOne()
	}
	partTwo() {
		day09PartTwo()
	}
}
export default { Main }
