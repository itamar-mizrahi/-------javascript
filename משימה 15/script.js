let IPString="100.121.1.4",nonIPString="dfdfd";
function IPCheck(string){
    let isIP=string.match(/^[\d\.]+$/)
    return isIP
}

console.log(IPCheck(IPString));
console.log(IPCheck(nonIPString));
