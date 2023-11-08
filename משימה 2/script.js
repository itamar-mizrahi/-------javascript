// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
  
  function a(n,arr) {
    if(n === 0) {
      return [];
    }
    else {
      if(n >= arr[0]) {
        var t = n - arr[0];
        return [arr[0]].concat(a(t,arr));
      }
      else {
        arr.shift();
        return a(n,arr);
      } 
    }
  }
console.log(a(5,[2,1]));