
"use strict"
var grader=require("./grader");

var b=[];

b.push(test(4,["A","A","A","A"]));
b.push(test(3,["A-","B+","B-","C+"]));
b.push(test(1.50,["C","C-","D+","D"]));
b.push(test(.1675,["D-","F","Z","Z"]));
b.push(test(4,["A","A","A","A"]));
b.push(test(4,["A","A","A","A"]));



var x;
for(x=0;x<b.length;x++){

if(b[x]==false){
console.log("program does not work");

}
}

function test(ans, values){
    if(ans!=grader.compGPA(values)){
        console.log(   grader.compGPA(values));
console.log(values+" is incorrect");
return false;
}else{
    console.log( values+ " is correct");
    return true;
}

}
