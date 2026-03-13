//7. Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function searchElement(arr,search)
{
    for(let i=0;i<arr.length;i++)   
    {
        if(arr[i]===search)  
        {
            console.log("index of search element is "+i)
            return i
        }
    }
    console.log("not found")
    return -1
}
searchElement([90,78,65,98],65)