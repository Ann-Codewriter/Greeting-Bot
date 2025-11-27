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
