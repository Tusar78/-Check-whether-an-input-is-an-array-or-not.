// First Way
let isArrayF = (inp) => {
    let check = toString.call(inp) === '[object Array]'
    if(check){
        return true
    } else {
        return false
    }
}
console.log(isArrayF([1]))

//Second way
let isArrayS = (inp) => {
    let check = inp instanceof Array;
    if(check) {
        return true;
    } else {
        return false;
    }
}

console.log(isArrayS('g'));

//Third Way
let isArrayT = (inp) => {
    let check = Array.isArray(inp);
    if(check) {
        return true;
    } else {
        return false;
    }

}
console.log(isArrayT([]));