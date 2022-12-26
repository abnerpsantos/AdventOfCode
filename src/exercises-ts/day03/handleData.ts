import { getData } from "../../utils/getData"

interface PriorityTypes {
	[key: string]: number
}

function setPriority() {
	const lowerCase = "abcdefghijklmnopqrstuvwxyz"
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const priority: PriorityTypes = {}
	let counter = 0
	for (let letter of lowerCase) {
		counter++
		priority[letter] = counter
	}
	for (let letter of upperCase) {
		counter++
		priority[letter] = counter
	}
	return priority
}

export async function handleData() {
	const rawData = await getData("03")
	const priority = setPriority()
	const data = rawData.split("\n").filter((string) => string != "")

	return { data, priority }
}
