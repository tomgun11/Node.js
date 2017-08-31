// var obj = {
//     name: "Tom"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


var personString = '{"name": "Tom", "age": 30}';

var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);