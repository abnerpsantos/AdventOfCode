import { getData } from "../../utils/getData"

export async function handleData() {
	const rawData = await getData("06")
	const data = rawData.split("")
	return rawData
}
