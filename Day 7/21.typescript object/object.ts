const student = 
{
    name: "Ana",
    age: 19,
    education: "A-Levels"
}

let students: Array<typeof student> = [];

students.push(student)
students.push({
    name: "Natasha",
    age: 25,
    education: "CA"
})
let student3 = 
{
    name: "Alka",
    age: 18,
    education: "Intermediate"
}
students.push(student3)

console.log(students)