let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let result=document.getElementById("result");

function add(){
    let x=Number(num1.value);
    let y=Number(num2.value);
    result.innerHTML= x+y;
    result.classList.remove("result");
}

function subtract(){
    let x=Number(num1.value);
    let y=Number(num2.value);
    result.innerHTML= x-y;
    result.classList.remove("result");
}

function clearnum(){
    num1.value="";
    num2.value="";
    result.value="";
    result.classList.add("result");
}