//6. Write a function that receives an array as arg and return their sum
function sumOfArray(arr)
{
    let sum=0   
    for (let i=0;i<arr.length;i++)  
    {
        sum=sum+arr[i]
    }   
    console.log("sum of array is "+sum)
}
sumOfArray([90,78,65,98])