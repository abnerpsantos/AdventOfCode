#!/bin/bash

cd exercises-ts
for count in $(seq 5 25); do
cd "day$count"
printf "export async function day${count}PartOne() {}" > partOne.ts
printf "export async function day${count}PartTwo() {}" > partTwo.ts
printf "import { MainProps } from '../../types/Main.type'\nimport { day${count}PartOne } from './partOne'\nimport { day${count}PartTwo } from './partTwo'\nclass Main implements MainProps {\npartOne() {\nday${count}PartOne()\n}\npartTwo() {\nday${count}PartTwo()}\n}\nexport default { Main }" > index.ts
cd ..
done
