var mysandwiches = JSON.parse(sandwiches);
var myfries = JSON.parse(fries);
document.getElementById('result').innerHTML = `My favorite sandwich is a
									 ${mysandwiches[0].sandwich} which has approximately 
									 ${mysandwiches[0].calories} calories, along with it I enjoy eating 
									 ${myfries[0].fries_size} which have about 
									 ${myfries[0].calories} calories.
									 `;