/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty.
var students = [];
// Create an array called picked, start empty. 
var picked = [];

/* Function Main()
 * Set variable called count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(count), the name of a random student in the list
 * Set keymaster = randNewStudent(), name of a different random student
 * Display gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */
function main(){
students = [];
picked = [];

    const count = prompt("How many students are there?");
  if (isNaN(count) || count <= 0) {
    window.focus(document.documentElement.requestFullscreen(alert("Invalid number of students. Please enter a positive number.")));
    return;
  }
   addStudents(count);
     if (students.length < 2) {
    alert("Not enough students to pick a gatekeeper and a keymaster.");
    return;
  }
  let gateKeeper = randStudent();
  let keymaster = randNewStudent();

  alert(`The Gatekeeper is: ${gateKeeper}`);
  alert(`The Keymaster is: ${keymaster}`);
repeat = confirm("Would you like to keep picking?")
while(repeat == true){
  let gateKeeper = randStudent();
  let keymaster = randNewStudent();

  alert(`The Gatekeeper is: ${gateKeeper}`);
  alert(`The Keymaster is: ${keymaster}`);
  
  repeat = confirm("Would you like to keep picking?")

  if (students.length === 0) {
   let addMore = confirm("No students left to pick from, add more?");
    if (addMore == true){
        const count = prompt("How many students are there?");
  if (isNaN(count) || count <= 0) {
    window.focus(document.documentElement.requestFullscreen(alert("Invalid number of students. Please enter a positive number.")));
    return;
  }
   addStudents(count);
     if (students.length < 2) {
    alert("Not enough students to pick a gatekeeper and a keymaster.");
    return;
            }
        }
    }
}
alert("I hope I was useful!")
}
/* Function addStudents(count) 
 * Use a for loop to add student names to the students array via user input.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */

function addStudents(count) {
  for (let i = 0; i < count; i++) {
    const studentName = prompt(`Enter the name of student ${i + 1}:`);
    if (studentName) {
      students.push(studentName);
    }
  }
}

/* Function randStudent(count)
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = count {integer}
 * @return = name {string}
 */
function randStudent() {
  if (students.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * students.length);
  const pickedStudent = students.splice(randomIndex, 1)[0];
  picked.push(pickedStudent);
  return pickedStudent;
}
/* Function randNewStudent() (start with copy of randStudent)
 * Set name = "", student = 0 and pickedYet = 0. 
 * Loop while pickedYet is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Set pickedYet = the index of that name the picked array. 
 * End the while loop.
 * Add name to picked array.
 * Return the name of the new random student
 * @param = none
 * @return = name {string}
 */
function randNewStudent() {
  return randStudent();
}