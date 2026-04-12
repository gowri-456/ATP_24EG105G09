//5. Write a function that receives 3 number args and  return the big number 
function largest(a,b,c)
{
    if (a>b&&a>c){
        return a
    }
    else if (b>a&&b>c){
        return b
    }
    else{
        return c
    }
}
let result=largest(110,39,29)
console.log("largest number is",result)