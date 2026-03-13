//2. Find the big number in given three numbers
function bigOfThree(a,b,c)
{
    if(a>b&&a>c)
        console.log("largest number is "+a)
    else if(b>a&&b>c)
        console.log("largest number is "+b)
    else
        console.log("largest number is "+c)
}
bigOfThree(10,6,8)