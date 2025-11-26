//To find the average score of 3 subject marks,

let student1 = {
    name: "Ama",
    scores: [56, 62, 77]
};

let student2 = {
    name: "Kofi",
    scores: [68, 43, 73]
};

let student3 = {
    name: "Yaw",
    scores: [56, 62, 77]
};



function averageScore(mark1, mark2, mark3){
  return (mark1 + mark2 + mark3) / 3;
}

//To assign a grade based on the average score, a new function named assignGrade will be called.
function assignGrade(average){
  //Use if, else if and else statements
  if(average >= 80) {
    return "A";
  }
  else if (average >= 70){
    return "B";
  }
  else if (average >= 60){
    return "C";
  }
  else if (average >= 50){
    return "D";
  }
  else {
    return "F";
  }
}

//To check whether the student has passed or failed, call another function named checkStatus.
function checkStatus(average){
  if (average >= 60){
    return "Passed";
  }
  else {
    return "Failed";
  }
}

console.log(checkStatus(averageScore))

//To test three students with the functions, a new function named studentTest
function studentTest(name, mark1, mark2, mark3){

  const avg = averageScore(mark1, mark2, mark3);
  const grade = assignGrade(avg);
  const passed = checkStatus(grade);

  console.log(`Student: ${name}`);
  console.log(`Average Score: ${avg.toFixed(2)}`);
  console.log(`Grade: ${grade}`);

}

console.log(studentTest("Ama", 67, 81, 72));
// console.log(studentTest("Kofi", 69, 64, 80));
// console.log(studentTest("Yeboah", 96, 90, 76));