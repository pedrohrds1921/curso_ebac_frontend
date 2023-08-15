const student = [
    { name: "João", grade: 8 },
    { name: "Maria", grade: 5 },
    { name: "Carlos", grade: 7 },
    { name: "Ana", grade: 9 },
    { name: "Pedro", grade: 10 }
];


function getStutdentAproved(studentList){
return studentList.filter(student=>student.grade >=6)

}
console.log(getStutdentAproved(student))