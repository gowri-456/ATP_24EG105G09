/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:


Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let filt=students.filter(stud=>stud.marks>=40)
console.log(filt)
let mapp=students.map(stud=>{
    if(stud.marks>=90)
    {
        console.log("A")
    }
    else if(stud.marks>=75)
    {
        console.log("B")
    }
    else if(stud.marks>=60)
    {
        console.log("C")
    }
    else{
        console.log("D")
    }
})
let red=students.reduce((acc,stud)=>{
    return (acc+stud.marks)/5

},0)
console.log(red)
let findd=students.find(stud=>stud.marks==92)
console.log(findd)
let ind=students.findIndex(stud=>stud.name=="Kiran")
console.log(ind)