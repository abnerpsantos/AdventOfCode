import { handleData } from "./handleData"

export async function day1PartOne() {
	const data = await handleData()
	const result = data
		.map((bagOfFood) => {
			return bagOfFood.reduce((acc, calories) => acc + +calories, 0)
		})
		.sort((a, b) => a - b)
		.reverse()

	console.log(
		`Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?\nThe puzzle input is: ${result[0]}`
	)
}
