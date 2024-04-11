var result = "";
var is_calc = false;
result = document.getElementById('result');

function clear_key(){
    result.value = "0";
    is_calc = false;
}

function number_key(val){
    if(is_calc)  result.value = "0";
    is_calc = false;    
    if (val === '.') {
        if (searchDotFromRight(result.value)) {
            return;
        }
        else if(!is_ope_last())
            result.value += val;
    } else if((result.value =="0" && val == "0")||(result.value =="0" && val == "00")){
        result.value = "0";
    } else if(result.value == "0" && val == "."){
        result.value = "0.";
    } else if(result.value == "0"){
        result.value = val;
    } else {
        result.value += val;
    }
}

function is_decimal(){
    return ["."].includes(result.value.slice(-1));
}

function operator_key(val){
    if(is_calc) is_calc = false;
    if (val === '+' || val === '-' || val === '*' || val === '/') {
        if (result.value.slice(-1) === '.') {
            return; 
        }
    }
    if(is_ope_last()){
        return
    } else {
        result.value += val;
    }
}

function equal_key(){
    if(is_ope_last()) result.value = result.value.slice(0, -1);

    var temp = Function("return " + result.value)();

    if(temp == Infinity || Number.isNaN(temp)){
        result.value = "Error";
    }else{
        result.value = temp;
        is_calc = true;
    }
}

function is_ope_last(){
    return ["+","-","*","/"].includes(result.value.slice(-1));
}

function searchDotFromRight(inputString) {
    for (let i = inputString.length - 1; i >= 0; i--) {
		  if (inputString[i] === '.') {
        return true; 
      }
      if (inputString[i] === '+' || inputString[i] === '-' || inputString[i] === '*' || inputString[i] === '/') {
        return false; 
      }
      }
      return false; 
    }
const resultValue = result.value; 

