import { getData } from "../../utils/getData"

interface ObjProps {
	[key: string]: string[]
}

function getStructure() {
	const arr = [
		"FTCLRPGQ",
		"NQHWRFSJ",
		"FBHWPMQ",
		"VSTDF",
		"QLDWVFZ",
		"ZCLS",
		"ZBMVDF",
		"TJB",
		"QNBGLSPH",
	]
	const obj: ObjProps = {}
	for (let i in arr) {
		const splitedArr = arr[i].split("")
		obj[Number(i) + 1] = splitedArr
	}
	return obj
}
export async function handleData() {
	const rawData = await getData("05")
	const [, script] = rawData.split("---")
	const data = script.split("\n").filter((line) => line != "")
	const structure = getStructure()
	return { data, structure }
}
