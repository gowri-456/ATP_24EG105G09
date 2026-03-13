//4.find the smallest element in marks array
function smallest(marks)
{
    let small=marks[0]
    for(let i=1;i<marks.length;i++)
    {
        if(marks[i]<small)
        {
            small=marks[i]
        }
    }
    console.log("smallest element is "+small)
}
smallest([90,78,65,98])