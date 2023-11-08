/*function Fibonacci(n){
    let FibArr=[];
    console.log(FibArr[0]=0);
    console.log(FibArr[1]=1);
    for(i=2; i<n; i++){
        console.log(FibArr[i]=FibArr[i-1] + +FibArr[i-2]);
    } 
}

Fibonacci(5);
*/

function main(n){
    if(n===0){
        console.log("not defined with 0");
    }
    else if(n===1){
        console.log(1);
    }
    else {
        console.log(fibonacci(0,1,n-1));
    }
}


function fibonacci(prev, current ,n) {
    if(!n){
        return current;  
    }
    let temp = current;
    current += prev;
    prev = temp;
    console.log(prev);
    return fibonacci(prev, current, n-1)
}

main(7);
