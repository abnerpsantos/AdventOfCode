import { handleData } from "./handleData"

export async function day05PartTwo() {
	const { data, structure } = await handleData()
	data.forEach((line) => {
		const [_1, quantity, _2, from, _3, to] = line.split(" ")
		const tmpArr = []
		for (let i = 0; i < Number(quantity); i++) {
			const removed = structure[from].pop()!
			tmpArr.push(removed)
		}
		for (let i = 0; i < +quantity; i++) {
			const removed = tmpArr.pop()!
			structure[to].push(removed)
		}
	})
	const result = []
	for (let i in structure) {
		result.push(structure[i][structure[i].length - 1])
	}
	console.log(
		`Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?\nThe puzzle answer is: ${result.join(
			""
		)}`
	)
}
