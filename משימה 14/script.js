let capitalString="Check D",nonCapitalString="check";
function checkCapital(string){
    let isCapitalStart=string.match(/^[A-Z]/)
    return isCapitalStart
}

console.log(checkCapital(capitalString));
console.log(checkCapital(nonCapitalString));