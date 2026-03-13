/* ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 


Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let filt=cart.filter((item)=>{
  return item.inStock==true
})
console.log(filt)

let mapp=cart.map((item)=>
{
  let sum=item.price*item.quantity
  return {name:item.name,totalPrice:sum}
})
console.log(mapp)
let red=cart.reduce((acc,ele)=>{
  return (acc+ele.price*ele.quantity)

},0)
console.log(red)
let findd=cart.find((item)=>item.name="Mouse")
console.log(findd)
let ind=cart.findIndex((item)=>item.name=="Keyboard")
console.log(ind)