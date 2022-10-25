// Write your solution in this file!
let employee = {
    name: "Mustafa",
  };
function updateEmployeeWithKeyAndValue(employee, key, value){
   return { ...employee, ...{ [key]: value } }
}
// console.log(updateEmployeeWithKeyAndValue(employee, key, value))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value ;
    return employee
}
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value))
function deleteFromEmployeeByKey(employee, key){
     // delete employee[key];

    // return employee;
 let newEmployee = { ...employee };
 delete newEmployee[key]
 return newEmployee
   
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}