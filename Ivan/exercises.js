// Basic
var mysandwiches = JSON.parse(sandwiches);
var friesObj = JSON.parse(fries);
console.table(mysandwiches.sandwich);
console.table(friesObj.fries_size);

document.getElementById("basic").innerHTML = ` 	My favorite sandwich is a ${mysandwiches.sandwich} which 
												has approximately ${mysandwiches.calories} calories, 
												along with it I enjoy eating ${friesObj.fries_size} which 
												have about ${friesObj.calories} calories. `
												

// Intermediate
var zero = JSON.parse(employeeZero);
var one = JSON.parse(employeeOne);
var two = JSON.parse(employeeTwo);
var three = JSON.parse(employeeThree);
var four = JSON.parse(employeeFour);
var five = JSON.parse(employeeFive);
var six = JSON.parse(employeeSix);
var seven = JSON.parse(employeeSeven);
var eight = JSON.parse(employeeEight);
var nine = JSON.parse(employeeNine);

console.table(zero);

var employees = [zero, one, two, three, four, five, six, seven, eight, nine]

console.table(employees);

for( let i = 0 ; i < employees.length ; i++) {
	document.getElementById("intermediate").innerHTML += ` 	<h3> Employee: ${employees[i].firstName} </h3> 
															<p> Last Name: ${employees[i].lastName} </p> 
															<p> ID: ${employees[i].uniqueID} </p>
															<p> Email: ${employees[i].emailAddress} </p>
															<p> Job: ${employees[i].jobTitle} </p>
															<p> Money: ${employees[i].salary} </p>
															<br>	
															`
};

// intermediate_1

var empAllArray = JSON.parse(employeesAll);

console.table(empAllArray);

for( let i = 0 ; i < empAllArray.length ; i++) {
	document.getElementById("intertable").innerHTML += ` 	<th>Employee: ${empAllArray[i].firstName}</th>
															<tr>
															<td> Last Name: ${empAllArray[i].lastName}</td>
															<td> ID: ${empAllArray[i].uniqueID}</td>
															<td> Email: ${empAllArray[i].emailAddress}</td>
															<td> Job: ${empAllArray[i].jobTitle}</td>
															<td> Money: ${empAllArray[i].salary}</td>
															</tr>
															<br> `
};