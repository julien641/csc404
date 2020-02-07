var prompt = require('prompt');
var schema = {
    properties: {
        name:{
            description: 'Enter Name',   
            type: 'string',
            required: true
        },
    CSC141: {
        description: 'Enter your grade for CSC141',     // Prompt displayed to the user. If not supplied name will be used.
        type: 'string',                 // Specify the type of input to expect.
        pattern: /(([af](?!\+|\- ))|(([bcd]+[+-])|[bcd]))(?![A-z ])/gi,                  // Regular expression that input must be valid against.
        message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F', // Warning message to display if validation fails.
        hidden: false,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
        required: true                       // If true, value entered must be non-empty.
    },
    CSC142: {
        description: 'Enter your grade for CSC142',     // Prompt displayed to the user. If not supplied name will be used.
        type: 'string',                 // Specify the type of input to expect.
        pattern: /(([af](?!\+|\-))|(([bcd]+[+-])|[bcd]))(?![A-z ])/gi,                  // Regular expression that input must be valid against.
        message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F', // Warning message to display if validation fails.
        hidden: false,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
                // Default value to use if no value is entered.
        required: true                      // If true, value entered must be non-empty.
    },
            CSC240: {
            description: 'Enter your grade for CSC240',     // Prompt displayed to the user. If not supplied name will be used.
            type: 'string',                 // Specify the type of input to expect.
            pattern: /(([af](?!\+|\- ))|(([bcd]+[+-])|[bcd]))(?![A-z ])/gi,                  // Regular expression that input must be valid against.
            message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F', // Warning message to display if validation fails.
            hidden: false,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
                    // Default value to use if no value is entered.
            required: true                        // If true, value entered must be non-empty.
                },
                CSC241: {
                description: 'Enter your grade for CSC241',     // Prompt displayed to the user. If not supplied name will be used.
                type: 'string',                 // Specify the type of input to expect.
                pattern: /(([af](?!\+|\- ))|(([bcd]+[+-])|[bcd]))(?![A-z ])/gi,                  // Regular expression that input must be valid against.
                message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F', // Warning message to display if validation fails.
                hidden: false,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
                        // Default value to use if no value is entered.
                required: true                       // If true, value entered must be non-empty.
                    }
   
      }
    }
  
prompt.start();

program();

function program(){

prompt.get(schema,function(err,result){
var x=[result.CSC141,result.CSC142,result.CSC240,result.CSC241];
if(result.name){}

console.log(compGPA(x));

});
}

function datainput(){




}
function compGPA(array){
var sum=0;
var gpavalue={};

    for(var i=0;i<array.length;i++){

    switch(array[i].toUpperCase()){

        case "A":
        sum+=4;
        break;
        case "A-":
        sum+=3.67;
        break;
        case "B+":
        sum+=3.330;
        break;
        case "B":
        sum+=3.00;
        break;
        case "B-":
        sum+=2.670
        break;
        case "C+":
        sum+=2.330;
        break;
        case "C":
        sum+=2;
        break;
        case "C-":
        sum+=1.67;
        break;
        case "D+":
        sum+=1.330;
         break;
        case "D":
         sum+=1.0;
        break;
        case "D-":
         sum+=0.670;
        break;
          case "F":
         sum+=0.0;
         break;
         case "Z":
         sum+=0.000;
         break;
}


}
return sum/array.length;
}


function display(){}