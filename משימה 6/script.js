/*let findArmstrong =function(number){
    let powNumber=0,remainder=0,sumNumber=0;tempNum=number;
    if (number<100 || number>=1000){
        console.log(`${number} is not a 3 digit number`);
        return;
    }
    while (tempNum>0){
        remainder=tempNum%10;
        powNumber=Math.pow(remainder,3);
        sumNumber=sumNumber+powNumber;
        tempNum=Math.floor(tempNum/10);
    }
    if (number==sumNumber){
        return true;
    }
    else{ 
        return false;
    }
 }
console.log(findArmstrong(153));
*/

// Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the 
// sum of the cubes of its digits is equal to the number itself.
//  For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
let find3DigitArmstrong =function(){
    let numbers=[];
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            for(let k=0; k<10; k++){
                checkPow=Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3);
                checkDigit=Number(`${i}${j}${k}`);
                if (checkDigit==checkPow && checkPow>99){
                     numbers.push(checkPow);
                }
            }
        }
    }
    return numbers;
}

console.log(find3DigitArmstrong());
