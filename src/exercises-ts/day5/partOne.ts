import { handleData } from "./handleData"

export async function day5PartOne() {
	const { data, structure } = await handleData()
	data.forEach((line) => {
		const [_1, quantity, _2, from, _3, to] = line.split(" ")
		for (let i = 0; i < Number(quantity); i++) {
			const removed = structure[from].pop()!
			structure[to].push(removed)
		}
	})
	const result = []
	for (let i in structure) {
		result.push(structure[i][structure[i].length - 1])
	}

	console.log(
		`After the rearrangement procedure completes, what crate ends up on top of each stack?\nThe puzzle answer is: ${result.join(
			""
		)}`
	)
}
