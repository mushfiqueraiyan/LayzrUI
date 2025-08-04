let startingSalary = 45000;
let experience = 30;

let currentSalary = startingSalary;

for (let i = 1; i <= experience; i++) {
  currentSalary += currentSalary * 0.05; //5%
}

currentSalary = currentSalary.toFixed(2);

console.log(currentSalary);

// name
// roll
// .
// department
// @ph.ac.bd

var student = { name: "raiyan", roll: 1014, department: "cse" };
var email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);

// new problem

var lastDay = 11;

for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`medicine`);
  } else {
    console.log(`Rest`);
  }
}
