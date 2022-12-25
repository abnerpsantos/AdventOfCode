import { getData } from "../../utils/getData"

export async function handleData() {
	const rawData = await getData("4")
	const data = rawData
		.split("\n")
		.filter((string) => string != "")
		.map((containers) => containers.split(","))
	return data
}
