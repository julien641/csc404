var prompt = require("prompt-async");
var grader = require('./grader');
var namescem = {
    properties: {
        name: {
            description: 'Enter Name',
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
            pattern: /((?<!.)([0-9]{1,3}(?!.))|(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))|((?<!.)d(?!.))|((?<!.)IP(?!.))|((?<!.)NG(?!.))|((?<!.)W)(?!.))|((?<!.)Y)(?!.)|((?<!.)AU)(?!.)|((?<!.)M)(?!.)/gi,
            message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F 0-100 IP NG W Y AU M', // Warning message to display if validation fails.
            hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            required: true // If true, value entered must be non-empty.
        },
        CSC142: {
            description: 'Enter your grade for CSC142', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /((?<!.)([0-9]{1,3}(?!.))|(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))|((?<!.)d(?!.))|((?<!.)IP(?!.))|((?<!.)NG(?!.))|((?<!.)W)(?!.))|((?<!.)Y)(?!.)|((?<!.)AU)(?!.)|((?<!.)M)(?!.)/gi,
            message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F 0-100 IP NG W Y AU M', // Warning message to display if validation fails.
            hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            // Default value to use if no value is entered.
            required: true // If true, value entered must be non-empty.
        },
        CSC240: {
            description: 'Enter your grade for CSC240', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /((?<!.)([0-9]{1,3}(?!.))|(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))|((?<!.)d(?!.))|((?<!.)IP(?!.))|((?<!.)NG(?!.))|((?<!.)W)(?!.))|((?<!.)Y)(?!.)|((?<!.)AU)(?!.)|((?<!.)M)(?!.)/gi, // Regular expression that input must be valid against.
            message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F 0-100 IP NG W Y AU M', // Warning message to display if validation fails.
            hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            // Default value to use if no value is entered.
            required: true // If true, value entered must be non-empty.
        },
        CSC241: {
            description: 'Enter your grade for CSC241', // Prompt displayed to the user. If not supplied name will be used.
            type: 'string', // Specify the type of input to expect.
            pattern: /((?<!.)([0-9]{1,3}(?!.))|(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))|((?<!.)d(?!.))|((?<!.)IP(?!.))|((?<!.)NG(?!.))|((?<!.)W)(?!.))|((?<!.)Y)(?!.)|((?<!.)AU)(?!.)|((?<!.)M)(?!.)/gi, // Regular expression that input must be valid against.
            message: 'Your grade must be A B+ B B- C+ C C- D+ D D- F 0-100 IP NG W Y AU M', // Warning message to display if validation fails.
            hidden: false, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.                      // If `hidden` is set it will replace each hidden character with the specified string.
            // Default value to use if no value is entered.
            required: true // If true, value entered must be non-empty.
        },
        postresult: {
            description: ' Type y to print out GPAs',
            type: 'string',
            message: 'The string inputed is not Y or N',
            hidden: false,
            required: true,
            pattern: /(?<!.)(y)(?!.)|(?<!.)(n)(?!.)/gi

        },
        entermore: {
            description: 'Enter Y to continue and N to exit',
            type: 'string',
            message: 'The string inputed is not Y or N',
            hidden: false,
            required: true,
            pattern: /(?<!.)(y)(?!.)|(?<!.)(n)(?!.)/gi
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
var val = false;
program();
async function program() {
    prompt.start();
    var studentarray = [];
    do {
        var {
            name
        } = await prompt.get(namescem);
        var x = {
            CSC141,
            CSC142,
            CSC240,
            CSC241,
            entermore,
            postresult
        } = await prompt.get(schema);



        var array = [x.CSC141, x.CSC142, x.CSC240, x.CSC241];
        var t = true;
        for (var i = 0; i < array.length; i++) {

            if (!await array[i].match(/((?<!.)([0-9]{1,3}(?!.))|(?<!.)a-(?!.)|((?<!.)a(?!.))|((?<!.)b\+(?!.))|((?<!.)b-(?!.))|((?<!.)b(?!.))|((?<!.)c\+(?!.))|((?<!.)c-(?!.))|((?<!.)c(?!.))|((?<!.)d\+(?!.))|((?<!.)d-(?!.))|((?<!.)f(?!.))|((?<!.)d(?!.))|((?<!.)IP(?!.))|((?<!.)NG(?!.))|((?<!.)W)(?!.))|((?<!.)Y)(?!.)|((?<!.)AU)(?!.)|((?<!.)M)(?!.)/gi)) {
                t = false;

            }

        }
        if (t == true) {
            var GPA = await grader.compGPA(array);
            await studentarray.push(new grader.student(name.toString(), CSC141, CSC142, CSC240, CSC241, GPA));

            if (postresult.toUpperCase() == "Y") {
                var tr = {
                    threshhold
                } = await prompt.get(schemathresh);
                await grader.postresult(tr.threshhold, studentarray);
            }
        } else {
            console.log("Incorrect grade reenter");

        }
    } while (x.entermore.toUpperCase() == "Y" || postresult.toUpperCase() == "Y");


}