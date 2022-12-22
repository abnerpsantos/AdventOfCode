import { handleData } from "./handleData"

interface objProps {
	[key: string]: string[]
}

export async function day3PartTwo() {
	const { data, priority } = await handleData()
	const rucksackGroups = getRucksackGroups(data)
	const result = rucksackGroups
		.map((group) => {
			const tmpObj: objProps = {}
			const [string1, string2, string3] = group
			const string1obj = countRepeated(string1, "One", tmpObj)
			const string2obj = countRepeated(string2, "Two", string1obj)
			const string3obj = countRepeated(string3, "Three", string2obj)

			const obj = Object.entries(string3obj)
				.map((arr) => {
					return {
						letter: priority[arr[0]],
						containsIn: new Set(arr[1]),
					}
				})
				.filter((object) => object.containsIn.size === 3)
				.map((obj) => obj.letter)
				.reduce((acc, value) => acc + value, 0)
			return obj
		})
		.reduce((acc, value) => acc + value, 0)

	console.log(
		`Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?\nThe puzzle answer is: ${result}`
	)
}

function countRepeated(string: string, name: string, obj: objProps) {
	for (let letter of string) {
		if (!obj[letter]) {
			obj[letter] = []
		}
		obj[letter].push(`string${name}`)
	}
	return obj
}
function getRucksackGroups(data: string[]) {
	const arr = []
	for (let i = 0; i < data.length; i++) {
		if (i % 3 === 0) {
			arr.push([data[i], data[i + 1], data[i + 2]])
		}
	}
	return arr
}
