module.exports = {
    compGPA: function(array) {
        var sum = 0;
        var totalclass = 0;

        for (i in array) {


        if (array[i] >= 93 || array[i].toUpperCase() == "A") {
                sum += 4.00;
                totalclass++;
            } else if (array[i] >= 90 || array[i].toUpperCase() == "A-") {
                sum += 3.67;
                totalclass++;
            } else if (array[i] >= 87 || array[i].toUpperCase() == "B+") {
                sum += 3.330;
                totalclass++;
            } else if (array[i] >= 83 || array[i].toUpperCase() == "B") {
                sum += 3.00;
                totalclass++;
            } else if (array[i] >= 80 || array[i].toUpperCase() == "B-") {
                sum += 2.670;
                totalclass++;
            } else if (array[i] >= 77 || array[i].toUpperCase() == "C+") {
                sum += 2.330;
            } else if (array[i] >= 73 || array[i].toUpperCase() == "C") {
                sum += 2;
                totalclass++;
            } else if (array[i] >= 70 || array[i].toUpperCase() == "C-") {
                sum += 1.67;
                totalclass++;
            } else if (array[i] >= 67 || array[i].toUpperCase() == "D+") {
                sum += 1.330;
                totalclass++;
            } else if (array[i] >= 63 || array[i].toUpperCase() == "D") {
                sum += 1.0;
                totalclass++;
            } else if (array[i] >= 60 || array[i].toUpperCase() == "D-") {
                sum += 0.670;
                totalclass++;
            } else if (array[i] <= 59 || array[i].toUpperCase() == "F") {
                sum += 0.0;
                totalclass++;
            }
        }
        return sum / totalclass;
    },
    //TODO
    
    student: function (name, grades, GPA) {
        this.name = name.toString();
        this.grades=grades;
        this.GPA = GPA;
    },
    postresult:function(threshhold, studentarray){
        console.log("The student that has a higher or equal GPA of: " + threshhold);
        for (var i = 0; i < studentarray.length; i++) {
            if (studentarray[i].GPA >= threshhold) {
                console.log("Student Name: " + studentarray[i].name.toString() + " GPA: " + studentarray[i].GPA.toString());
            }
        }


    }
  };

