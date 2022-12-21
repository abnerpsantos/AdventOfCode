import { handleData } from "./handleData"

export async function day1PartTwo() {
	const data = await handleData()
	const sumOfCalories = data
		.map((bagOfFood) => {
			return bagOfFood.reduce((acc, calories) => acc + +calories, 0)
		})
		.sort((a, b) => a - b)
		.reverse()

	const [elf1, elf2, elf3] = sumOfCalories
	const result = elf1 + elf2 + elf3
	console.log(
		`Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?\nThe Puzzle answer is: ${result}`
	)
}
