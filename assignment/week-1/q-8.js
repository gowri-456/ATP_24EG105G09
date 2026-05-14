/* 
1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"*/
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//to insert new emp at 2nd positon
let del=employees.splice(1,0,{eno:1022,name:"Teja",marks:[92,90,98]})
console.log(employees)
//to delte kiran    
delete employees[4]
console.log(employees)
//changing marks of sneha
employees[2].marks[2]=75
console.log(employees)
