import { handleData } from "./handleData"

export async function day06PartOne() {
	const data = await handleData()
	const tmpArr = []
	const markerLength = []
	for (let i = 0; i < data.length; i++) {
		tmpArr.push(data[i])
		markerLength.push(data[i])
		if (tmpArr.length === 4) {
			const set = new Set(tmpArr)
			if (set.size === 4) {
				break
			}
			tmpArr.shift()
		}
	}
	console.log(
		`How many characters need to be processed before the first start-of-packet marker(4 distinct characters) is detected?\nThe puzzle answer is: ${markerLength.length}`
	)
}
