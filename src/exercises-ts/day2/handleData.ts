import { getData } from "../../utils/getData"

interface pointsForChooseProps {
	[key: string]: number
}
const pointsForChoose: pointsForChooseProps = {
	rock: 1,
	paper: 2,
	scissor: 3,
}

export async function handleData() {
	const rawData = await getData("2")
	const data = rawData
		.split("\n")
		.filter((round) => round != "")
		.map((round) => round.split(" "))

	return {
		data,
		pointsForChoose,
	}
}

/*

*/
