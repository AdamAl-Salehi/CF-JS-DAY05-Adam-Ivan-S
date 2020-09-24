var myemployees = JSON.parse(employees);


for (let i = 0; i < myemployees.company.length; i++) {
    document.writeln("<td>");
    document.writeln("<table border='2'>");
    document.writeln("<tr><td><b>UniqueID</b></td><td>" + myemployees.company[i].UniqueID + "</td></tr>");
    document.writeln("<tr><td><b>FirstName</b></td><td>" + myemployees.company[i].FirstName + "</td></tr>");
    document.writeln("<tr><td><b>Lastname</b></td><td>" + myemployees.company[i].Lastname + "</td></tr>");
    document.writeln("<tr><td><b>EmailAddress</b></td><td>" + myemployees.company[i].EmailAddress + "</td></tr>");
    document.writeln("<tr><td><b>JobTitle</b></td><td>" + myemployees.company[i].JobTitle + "</td></tr>");
    document.writeln("<tr><td><b>Salary</b></td><td>" + myemployees.company[i].Salary + "</td></tr>");
    document.writeln("</table>");
    document.writeln("</td>");
}