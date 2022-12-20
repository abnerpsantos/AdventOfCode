#!/bin/bash

cd exercises-ts
for count in $(seq 1 25); do
mkdir "day$count"
cd "day$count"
echo "function day${count}PartOne() {}" > partOne.ts
echo "function day${count}PartTwo() {}" > partTwo.ts
printf "import { getData } from '../../utils/getData';\n\n export async function handleData() {\n const rawData = await getData('$count')\n return rawData\n}" > handleData.ts
echo "" > rawData.txt
echo "# Day $count" > problem.md
printf "function main() {}\n export {}" > index.ts
cd .. 
done
