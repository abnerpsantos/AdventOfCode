import { handleData } from "./handleData"

export async function day4PartOne() {
	const data = await handleData()
	const result = data
		.map((containers) => {
			const [[elf1c1, elf1c2], [elf2c1, elf2c2]] = containers.map((container) =>
				container.split("-")
			)
			if (+elf1c1 <= +elf2c1 && +elf1c2 >= +elf2c2) {
				return [`${elf1c1}-${elf1c2}`, `${elf2c1}-${elf2c2}`]
			}
			if (+elf2c1 <= +elf1c1 && +elf2c2 >= +elf1c2) {
				return [`${elf1c1}-${elf1c2}`, `${elf2c1}-${elf2c2}`]
			}
			return false
		})
		.filter((bool) => bool !== false)

	console.log(
		`In how many assignment pairs does one range fully contain the other?\nThe puzzle answer is: ${result.length}`
	)
}
