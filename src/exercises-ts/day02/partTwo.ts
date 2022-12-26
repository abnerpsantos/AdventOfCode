import { handleData } from "./handleData"

interface winConditionProps {
	[key: string]: {
		[key: string]: number
	}
}

export async function day02PartTwo() {
	const { data, pointsForChoose } = await handleData()
	const winCondition: winConditionProps = {
		X: {
			rock: pointsForChoose.scissor + 0,
			paper: pointsForChoose.rock + 0,
			scissor: pointsForChoose.paper + 0,
		},
		Y: {
			rock: pointsForChoose.rock + 3,
			paper: pointsForChoose.paper + 3,
			scissor: pointsForChoose.scissor + 3,
		},
		Z: {
			rock: pointsForChoose.paper + 6,
			paper: pointsForChoose.scissor + 6,
			scissor: pointsForChoose.rock + 6,
		},
	}
	const result = data
		.map((value) => {
			if (value[0] === "A") value[0] = "rock"
			if (value[0] === "B") value[0] = "paper"
			if (value[0] === "C") value[0] = "scissor"
			return value
		})
		.map((round) => {
			const [A, B] = round
			return winCondition[B][A]
		})
		.reduce((acc, value) => acc + value, 0)

	console.log(
		`Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?\nThe puzzle answer is: ${result}`
	)
}
