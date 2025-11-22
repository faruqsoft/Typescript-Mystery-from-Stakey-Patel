// let userInput: unknown;
var userInput;
var userName;
userInput = 5;
userName = 'Max';
userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
//function never return type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var res = generateError("An error occurred!", 500);
console.log(res);
