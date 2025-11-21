// union ,literal type ,type alias

//union  type
/*
function combine (num1: number | string , num2: number | string ){
    let result;

    if(typeof num1 === "number" && typeof num2 === "number"){
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }

    return result;
}

const sum = combine(20,20)
const sumCombine = combine("omar",  "faruq")
console.log(sum, sumCombine)

*/
//literal type
/*
function combine(
  num1: number | string,
  num2: number | string,
  conversionType: "as number" | "as string"
) {
  let result;

  if ((typeof num1 === "number" && typeof num2 === "number") || conversionType === "as number") {
    result = +num1 + +num2; // convert to number if needed
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

const sum = combine(20, "20", "as number");

console.log(sum); // 40
*/

//Type alias

/*
type Combinable = number | string
type ConversionType = "as number" | "as string"

function combine( num1:Combinable ,num2: Combinable,conversionType: ConversionType
) {
  let result;

  if ((typeof num1 === "number" && typeof num2 === "number") || conversionType === "as number") {
    result = +num1 + +num2; // convert to number if needed
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

const sum = combine(20, "20", "as number");

console.log(sum); // 40
*/

type User ={
    name:string;
    age:number;
    skills:string[]
}

const user1:User = {
    name: "omar",
    age:24,
    skills:["react",'node']
}

function great(user1:User){
return `I am ${user1.name}. My age is ${user1.age} and my skills are ${user1.skills}`
}
// const result = great(use1)
great(user1)