//function return type
function add(num1, num2) {
    return num1 + num2;
}
function great(name) {
    return "Hello, ".concat(name);
}
var combined;
// combined = 10; invalid
// combined= function(){} valid
// combined = add; valid
// combined = great; valid
//good practice to define function type
var combineValues;
combineValues = add; // valid
// combineValues = great; invalid   
console.log(combineValues(8, 8));
//function type as callback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
