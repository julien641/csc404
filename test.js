
"use strict"
var grader=require("./grader");

var b = [];

b.push(gradeTest(4,["A","A","A","A"]));
b.push(gradeTest(3,["A-","B+","B-","C+"]));
b.push(gradeTest(1.50,["C","C-","D+","D"]));
b.push(gradeTest(.1675,["D-","F","Z","Z"]));
b.push(gradeTest(2.5, ["A", "B", "C", "D"]));
b.push(gradeTest(2.5, ["A", "D+", "B-", "C"]));
b.push(gradeTest(0,["F","F","F","F"]));



var x;
for(x=0;x<b.length;x++){

if(b[x]==false){
console.log("program does not work");

}
}
threshHoldTest();
function gradeTest(ans, values){
    if(ans!=grader.compGPA(values)){
        console.log(   grader.compGPA(values));
console.log(values+" is incorrect");
return false;
}else{
    console.log( values+ " is correct");
    return true;
}

}

var s = [];

function threshHoldTest() {
    var dude = []
    console.log("answer");
    console.log("The student that has a higher or equal GPA of: 2.5");
    console.log("Student Name: jul  GPA: 2.5");
    console.log("Student Name: dude  GPA: 3.5");

    console.log("actual");
    dude.push(new grader.student("jul", ["A"], 2.5));
    dude.push(new grader.student("dude", ["A"], 3.5));
    dude.push(new grader.student("exactly", ["A"], 1));

    grader.postresult(2.5, dude);


}
