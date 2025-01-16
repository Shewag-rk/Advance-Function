//  Array of object for the students details:

const students = [
  { id: 1, name: "Alice", grades: [85, 90, 78] },
  { id: 2, name: "Bob", grades: [70, 88, 80] },
  { id: 3, name: "Charlie", grades: [95, 92, 89] },
];

// adding new student in array of objects using Name Function:

function addStudent(){
    students.push({id:4,name:"James",grades:[90,50,99]});
    console.log("New student details added successfully:");
    students.forEach((student, index) => {
console.log(
    `${index + 1}. id: ${student.id}, name: ${student.name}, grades: ${student.grades}`
      );
});
}
addStudent(4,"mohan",)

// Calculate Average Grade Arrow Function:

function avg(grades){
    if(grades === 0) return 0;
    const sum = grades.reduce((total, grade)=> total + grade, 0);
    return sum / grades.length;
}
function listAllStudents() {
    students.forEach((studentDetails,index) => {
      const average = avg(studentDetails.grades);
      let round=Math.round(average*100)/100
      students[index].average = round;

      console.log(studentDetails);
    });
}

// Immediately Invoked Function Expressions (IIFE):

(function myIIFE() {
  listAllStudents()
  console.log(students);
})(students);

console.log("Filter Students by Grade Higher-Order Function with filter:")

function filterTopStudents(){
  const higheraverage = students.filter(avg=> avg.average >=85);
  console.log(higheraverage);  
}
filterTopStudents()

// Modify Student Data Callback Function with map:

function addBonusPoints(){
  const addPoints = students.map(addpoints => addpoints.average+5);
  console.log(addPoints);
}
addBonusPoints()

// List Student Names (for-of):

for (studlist of students) {
  studlist = students.map(litsname => litsname.name);
  console.log(`${studlist}`);
  break;
}

// Iterate Over Grades for-in:

for(Listgrades in students){
  Listgrades = students.map(showgrades => showgrades.grades);
  console.log(`${Listgrades}`);
  break;
}

// Reduce Grades to Total Using reduce:

function getTotalGrades(){
  const sum = students.map((a=>a.grades.reduce((x,y)=>x+y)))
  console.log(`${sum}`);
}
getTotalGrades();

// Bonus Feature
// Update Student Grades (Closure):

function outer(a){
  return function(y){
    let result = students.find(stud=> stud.id==a);
  if(result){
    result.grades=y;
  }else{
    console.log("id not found");
  }
}
  }
let newFunc = outer(1);
newFunc([72,83,90]);
console.log("Update grade student "+ students[0].grades)