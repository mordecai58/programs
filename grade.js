function calculateGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return 'A';
    } else if (marks >= 80 && marks < 90) {
        return 'B';
    } else if (marks >= 70 && marks < 80) {
        return 'C';
    } else if (marks >= 60 && marks < 70) {
        return 'D';
    } else if (marks >= 0 && marks < 60) {
        return 'F';
    } else {
        return 'Invalid input. Marks should be between 0 and 100.';
    }
}

const inputMarks = parseFloat(prompt('Enter student marks (between 0 and 100):'));

if (!isNaN(inputMarks)) {
    const grade = calculateGrade(inputMarks);
    console.log(`Grade: ${grade}`);
} else {
    console.log('Invalid input. Please enter a valid number.');
}
