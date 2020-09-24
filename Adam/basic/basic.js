var mysandwiches = JSON.parse(sandwiches);
var myfries = JSON.parse(fries);
console.table(myfries.calories);
document.getElementById('result').innerHTML = `My favorite sandwich is a
									 ${mysandwiches.sandwich} which has approximately 
									 ${mysandwiches.calories} calories, along with it I enjoy eating 
									 ${myfries.fries_size} which have about 
									 ${myfries.calories} calories.
									 `;