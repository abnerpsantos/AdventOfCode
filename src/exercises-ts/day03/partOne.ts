import { handleData } from "./handleData"

type tmpObject = { [key: string]: number }
export async function day03PartOne() {
	const { data, priority } = await handleData()
	const result = data
		.map((string) => {
			const string1 = string.slice(0, string.length / 2)
			const string2 = string.slice(string.length / 2)
			return [string1, string2]
		})
		.map((rucksack) => {
			const tmpObj: tmpObject = {}
			const [string1, string2] = rucksack

			for (let letter of string1) {
				tmpObj[letter] = 1
			}
			for (let letter of string2) {
				if (tmpObj[letter] && tmpObj[letter] === 1) {
					tmpObj[letter] += 1
				}
			}
			const moreThanOne = Object.entries(tmpObj)
				.filter((arr) => {
					if (arr[1] > 1) return true
					return false
				})
				.reduce((acc, value) => {
					return value[0]
				}, "")
			return moreThanOne
		})
		.map((letter) => {
			return priority[letter]
		})
		.reduce((acc, value) => acc + value, 0)
	console.log(
		`Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?\nThe puzzle answer is: ${result}`
	)
}
