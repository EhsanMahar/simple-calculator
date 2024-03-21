#! /usr/bin/env node 
import inquier from "inquirer";

const answer=await inquier.prompt([
{message:"enter your firstnumber",type:"number",name:"firstnumber"},
{message:"enter your secondnumber",type:"number",name:"secondnumber"},
{message:"select an operator to perform an action",type:"list",name:"operator",choices:["addition","subtraction","multiplication","division"]},

]);
if(answer.operator==="addition"){
    console.log(answer.firstnumber + answer.secondnumber);
    
}
else if(answer.operator==="subtraction"){
    console.log(answer.firstnumber-answer.secondnumber);
    
}
else if(answer.operator==="multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
    
}
else if(answer.operator==="division"){
    console.log(answer.firstnumber/answer.secondnumber);
    
}
else{
console.log("select a correct operator");

};