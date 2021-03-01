let phrase = "Hello";
let _ = "Hi";

function say(name){
  alert(`${phrase}, ${name}!!!` + `${_}, ${name}~~~`);
}
say("John");

function Employee(){
  //public
  this.displayEmployeeDtls = function(){
    alert("Employee Details");
  }
  //private
  var deleteEmployee = function(){
    alert("Employee Deleted");
  }
 }

var emp = new Employee();
emp.displayEmployeeDtls();
emp.deleteEmployee();
