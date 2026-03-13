//3.Find the sum of marks in [90,78,65,98]
function sumOfMarks(marks)
{
    let sum=0
    for (let i=0;i<marks.length;i++)
    {
        sum=sum+marks[i]
    }
    console.log("sum of marks is "+sum)
}    
sumOfMarks([90,78,65,98])