// let userInput: unknown;
let userInput: any;
let userName: string;
userInput = 5;
userName = 'Max';

userName = userInput

if(typeof userInput === "string"){
    userName = userInput;
}

//function never return type
function generateError(message:string, code:number): never{
    throw {message: message, errorCode: code};
}
const res= generateError("An error occurred!", 500);
console.log(res);