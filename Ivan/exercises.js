// Basic
var mysandwiches = JSON.parse(sandwiches);
var friesObj = JSON.parse(fries);
console.table(mysandwiches.sandwich);
console.table(friesObj.fries_size);

document.getElementById("basic").innerHTML = ` 	My favorite sandwich is a ${mysandwiches.sandwich} which 
												has approximately ${mysandwiches.calories} calories, 
												along with it I enjoy eating ${friesObj.fries_size} which 
												have about ${friesObj.calories} calories. `
												