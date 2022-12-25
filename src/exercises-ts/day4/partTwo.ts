import { handleData } from "./handleData"

export async function day4PartTwo() {
	const data = await handleData()
	const result = data
		.map((containers) => {
			const [[elf1c1, elf1c2], [elf2c1, elf2c2]] = containers.map(
				(container) => {
					const [containerInit, containerEnd] = container.split("-")
					return [Number(containerInit), Number(containerEnd)]
				}
			)
			if (elf1c1 <= elf2c2 && elf1c2 >= elf2c1) {
				return [`${elf1c1}-${elf1c2}`, `${elf2c1}-${elf2c2}`]
			}
			if (elf2c1 <= elf1c2 && elf2c1 >= elf1c1) {
				return [`${elf1c1}-${elf1c2}`, `${elf2c1}-${elf2c2}`]
			}
			return false
		})
		.filter((bool) => bool != false)

	console.log(
		`In how many assignment pairs do the ranges overlap?\nThe puzzle answer is: ${result.length}`
	)
}
