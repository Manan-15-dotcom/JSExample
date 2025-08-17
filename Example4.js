let today=new Date();
console.log("Date:",today);

let students=["Deepak","Anjali","Rahul"];
// students.push("virat");
// console.log("Students:",students);
// students.unshift("manan");
// console.log("Students:",students);
// students.splice(2,1,"tanu");
// console.log(students)

// students.pop("virat")

for(let student of students){
    console.log(student);
}

console.log("Do...while loop-Hostel Floors:");
let floor=1;
do{
    console.log("Hostel Floor:",floor);
    floor++;
}while(floor<=3);

let StudentMap=new Map();
StudentMap.set("101",{name:"Manan",dept:"CSIT"});
console.log(StudentMap.get("101"));