"use strict"
var prompt = require("prompt-async");

var grader = require('./grader');
var namescem = {
    properties: {
        name: {
            description: 'Enter Student Name',
            type: 'string',
            required: true
        }
    }

}
var schema = {
    properties: {
        CSC141: {
            description: 'Enter your grade for CSC141', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))/gi,
            message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F', // Warning message to display if validation fails.
            hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            required: true // If true, value entered must be non-empty.
        },
        CSC142: {
            description: 'Enter your grade for CSC142', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))/gi,   message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F',
        hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            // Default value to use if no value is entered.
            required: true // If true, value entered must be non-empty.
        },
        CSC240: {
            description: 'Enter your grade for CSC240', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))/gi,    message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F',
          hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            // Default value to use if no value is entered.
            required: true // If true, value entered must be non-empty.
        },
        CSC241: {
            description: 'Enter your grade for CSC241', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))/gi,    message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F',
         hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            // Default value to use if no value is entered.
            required: true // If true, value entered must be non-empty.
        }

    }

}
var scemenu = {
    properties: {
        menu: {
            description: ' Type 1 to add a student or type 2 to print gpa or type 0 to exit',
            type: 'string',
            message: 'The string inputed is not 1,2 or 3',
            hidden: false,
            required: true,
            pattern: /(?<!.)(1)(?!.)|(?<!.)(2)(?!.)|(?<!.)(0)(?!.)/gi

        }
    }

}
var schemathresh = {
    properties: {
        threshhold: {
            description: 'Enter a GPA threshhold between 0-4.0',
            type: 'number',
            message: 'The string inputed is not between 0-4.0',
            hidden: false,
            required: true,
            pattern: /(?<!.)[0-4]\.[0-9](?!.)|(?<!.)[0-4](?!.)|(?<!.)[0-4]+\.(?!.)|(?<!.)\.+[0-9](?!.)/gi
        }

    }


}
var studentarray=[];
async function inputdata() {

    prompt.start();
    var t = true;
var CSC141,CSC142,CSC240,CSC241;
    var {
        name
    } = await prompt.get(namescem);
    var grades = {
        CSC141,
        CSC142,
        CSC240,
        CSC241
    } =  await prompt.get(schema);
var x;

    if (t == true) {
        for (x in grades) {

            if (!await grades[x].match(/((?<!.)([0-9]{1,3}(?!.))|(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))|((?<!.)d(?!.))|((?<!.)IP(?!.))|((?<!.)NG(?!.))|((?<!.)W)(?!.))|((?<!.)Y)(?!.)|((?<!.)AU)(?!.)|((?<!.)M)(?!.)/gi)) {
                t = false;
                break;
            }
        }
    } else {
        console.log("Incorrect grade reenter");
    }

    var GPA = await grader.compGPA(grades);
    if(GPA ==true){
    await studentarray.push(new grader.student(name.toString(), grades, GPA));
console.log(`Student ${name} entered with Incomplete GPA of :${GPA}`);
    }else{
        console.log("Incorect Grade Entered");


    }

}

async function postresultmenu() {

    prompt.start();
    var threshhold;
    var tr = {
        threshhold
    } = await prompt.get(schemathresh);

    await grader.postresult(tr.threshhold, studentarray);

}


var val = false;
program();
async function program() {



/*
    (async()=>{const response =await prompts(scemenu);
    console.log(response);
    
    
    }
*/
    do {
        
var menu;

prompt.start();
        var x={
            menu
        } = await prompt.get(scemenu);

        switch (menu) {
            case "1":
                await inputdata();
                break;
            case "2":
            await grader.postresult(2.5, studentarray);
                break;
            case "0":
                break;

        }
    } while (menu != "0")

}
