// Write a merge sort program in JavaScript.  
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

function mergeSort (array) {
    if (array.length <= 1) {
      return array;
    }
    let mid = Math.floor(array.length / 2),
    a = mergeSort(array.slice(0, mid)),
    b = mergeSort(array.slice(mid)),
    result = [],
    firstIndex = 0,
    lastIndex = 0;
  
    while(firstIndex < a.length && lastIndex < b.length) {
      let elementA = a[firstIndex],
      elementB = b[lastIndex];
      if (elementA <= elementB) {
        result.push(elementA);
        firstIndex += 1;
      } else {
        result.push(elementB);
        lastIndex += 1;
      }
    }
    while(firstIndex < a.length) {
      result.push(a[firstIndex]);
      firstIndex += 1;
    }
    while(lastIndex < b.length) {
      result.push(b[lastIndex]);
      lastIndex += 1;
    }
    return result;
  }
  
  console.log(mergeSort([0,6,2,4,1]));
