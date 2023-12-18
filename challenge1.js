const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determineGrade() {
    rl.question("Enter the student's marks (0-100): ", function(marks) {
        marks = parseInt(marks);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Marks should be a number between 0 and 100.");
            rl.close();
        } else {
            var grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 50) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }
            console.log(`The student's grade is: ${grade}`);
            rl.close();
        }
    });
}

determineGrade();

