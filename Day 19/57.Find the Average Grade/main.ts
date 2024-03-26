let grades = [45,60,78,94,98]

let sum = 0
for(let i = 0; i < grades.length; i++)
sum += grades[i]
const averageGrades = sum / grades.length
console.log(averageGrades)