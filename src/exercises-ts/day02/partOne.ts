import { handleData } from "./handleData"

interface winConditionProps {
	[key: string]: {
		[key: string]: number
	}
}

const winCondition: winConditionProps = {
	rock: {
		rock: 3,
		paper: 6,
		scissor: 0,
	},
	paper: {
		rock: 0,
		paper: 3,
		scissor: 6,
	},
	scissor: {
		rock: 6,
		paper: 0,
		scissor: 3,
	},
}

export async function day02PartOne() {
	const { data, pointsForChoose } = await handleData()
	const result = data
		.map((value) => {
			if (value[0] === "A") value[0] = "rock"
			if (value[0] === "B") value[0] = "paper"
			if (value[0] === "C") value[0] = "scissor"
			if (value[1] === "X") value[1] = "rock"
			if (value[1] === "Y") value[1] = "paper"
			if (value[1] === "Z") value[1] = "scissor"
			return value
		})
		.map((round) => {
			const [A, B] = round
			return winCondition[A][B] + pointsForChoose[B]
		})
		.reduce((acc, value) => acc + value, 0)

	console.log(
		`What would your total score be if everything goes exactly according to your strategy guide?\nThe puzzle answer is: ${result}`
	)
}
