/*let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    console.log(library);
    function sortByTitle(){
        library.sort(function(a, b){
            let x = a.title, y = b.title;
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
        console.log(library);
    }
sortByTitle();
*/ 
/*function twoSum(arr, targetNumber) {
    let subTwo = [];
    let indexNum = [];
    
    for (let x = 0; x < arr.length; x++){
        if (subTwo[arr[x]] != null)
        {
            index = subTwo[arr[x]];
            indexNum[0] = index+1;
            indexNum[1] = x+1;
            return indexNum;
        }
        else
        {
            subTwo[targetNumber - arr[x]] = x;
        }
    }
}
  
  console.log(twoSum([10,10,50,40,10,40,50],100));
  */

/*function findAllCombinations(arr, targetNumber){
    let combinations=[];
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===targetNumber)
                combinations.push({i,j});
        }
        
    }
return combinations;
}


console.log(findAllCombinations([10,60,10,50,40,10,40,50],100));
*/
function findAllCombinations(arr, targetNumber){
    let combinations=[];
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            for (let k=j+1; k<arr.length; k++){ 
                if(arr[i]+arr[j]+arr[k]===targetNumber)
                    combinations.push({i,j,k});
            }
        }
        
    }
return combinations;
}

console.log(findAllCombinations([50,10,40,10],100));


