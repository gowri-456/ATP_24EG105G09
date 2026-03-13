//ex-1
let fruits=["apple","banana"]
let moreFruits=[];
let copy=[...fruits,...moreFruits]
let add=[...copy,"orange"]
console.log(copy)
console.log(add)


//ex-2
let user = {name: "Ravi", city: "Hyderabad"};
let updatedUser={...user,age: 25}
console.log(user)
console.log(updatedUser)  