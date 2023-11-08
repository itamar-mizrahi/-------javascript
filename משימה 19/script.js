let nonSortedArray= [5,2,4,7,6,0,9,2];

function quickSort(nonSortedArray){
    if (nonSortedArray.length<=1){
        return nonSortedArray;
    }
    let pivot=nonSortedArray[0];
    let left=[];
    let right=[];
    for (let i=1; i<nonSortedArray.length; i++){
        if (pivot>nonSortedArray[i]){
            left.push(nonSortedArray[i]);
        }
        else{
            right.push(nonSortedArray[i]); 
        }
    }
    return quickSort(left).concat(pivot,quickSort(right)); 
        
}

console.log(quickSort(nonSortedArray));

