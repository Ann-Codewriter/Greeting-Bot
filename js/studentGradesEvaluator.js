//Declare 3 variables that contains the data of each student.

let students = [
    {name: "Ama", scores: [56, 62, 77]},
    {name: "Kofi", scores: [68, 43, 73]},
    {name: "Yaw", scores: [68, 97, 32]}
];

//Calculate the averageScore of students subject marks by first adding the marks and dividing by 3.
function averageScore(student){
  let totalScore = 0;
  for (let i = 0; i < student.scores.length; i++){
    totalScore = totalScore + student.scores[i];
  }
  return totalScore / student.scores.length;
}

students.forEach(student => {
    console.log(student.name + "'s average is:", averageScore(student).toFixed(2));
});


//Invoke another function that assigns grades to the students based on their average score.
//Use if, else if and else statements.
function assignGrade(averageScore){
    if (averageScore >= 80){
        return "Grade A";
    } 
    else if (averageScore >= 70){
        return "Grade B";
    } 
    else if (averageScore >= 60){
        return "Grade C";
    } 
    else if (averageScore >= 50){
        return "Grade D";
    } 
    else {
        return "Grade F";
    }
}

console.log(assignGrade(averageScore));

//To check if student passed or failed, call another function.
function passFail(averageScore){
    if (averageScore <= 60){
        return "Passed";
    }
    else {
        return "failed";
    }
}

console.log(passFail(averageScore));

//