var rl = require('readline-sync');

console.log("Enter the mark scored by the student:")
let writtenTest = parseFloat(rl.question("Written test: "));
let labExams = parseFloat(rl.question("Lab exams: "));
let assignments = parseFloat(rl.question("Assignments: "));

let overAllGrade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;

console.log("Grade of the student: " + overAllGrade);