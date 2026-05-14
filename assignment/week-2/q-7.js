//ass-1
console.log("exam submitted succesfully")
setTimeout(()=>{
    console.log("Evaluating answers")
},2000)
setTimeout(()=>{
    console.log("Result: Pass")
},4000)

//ass-2
console.log("OTP Sent Successfully")
let seconds=10
let intervelId=setInterval(() => {
    console.log(`OTP can resend in${seconds}sec`)
    seconds--;
    
    if(seconds===0)
    {
        console.log("Resend OTP")
        clearInterval(intervelId)
    }
}, 1000);