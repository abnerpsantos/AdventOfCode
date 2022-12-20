#!/bin/bash

cd exercises-ts
for count in $(seq 1 25); do
cd "day$count"
rm -f rawData.txt
printf "" > puzzle.txt
cd ..
done
