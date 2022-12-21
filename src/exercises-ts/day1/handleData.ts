import { getData } from "../../utils/getData"

export async function handleData() {
	const rawData = await getData("1")
	const data = rawData.split("\n\n").map((values) => values.split("\n"))
	const lastArr = data[data.length - 1]
	if (lastArr[lastArr.length - 1] === "") lastArr.splice(lastArr.length - 1, 1)
	return data
}
