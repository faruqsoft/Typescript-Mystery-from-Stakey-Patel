//function return type

function add(num1 : number, num2: number): number{
    return num1 + num2;
}

function great (name : string): string{
    return `Hello, ${name}`;
}

let combined : Function ;
// combined = 10; invalid
// combined= function(){} valid
// combined = add; valid
// combined = great; valid

//good practice to define function type
let combineValues : (a: number, b: number) => number;
combineValues = add; // valid
// combineValues = great; invalid   
console.log(combineValues(8, 8));

//function type as callback

type CB= (n: number) => void;

function addHandle(num1:number, num2:number, cb:(n:number) => void){
    const result = num1 + num2;
    cb(result);
}
addHandle(10, 20, (result)=>{
    console.log(result);
});