// function multiplyBoard(number) {
//     let matrix = [[]];
//     for (let i = 0; i <= number; i++) {
//       matrix[i] = [];
//       for (let j = 0; j <= number; j++) {
//         matrix[i][j] = i * j;
//       }
//     }
//     return matrix;
//   }
  
//   const multiplicationTable = multiplyBoard(10);
//   console.log(multiplicationTable);

//   function createMultiplicationTable(n) {
//     const table = [];
//     for (let i = 1; i <= n; i++) {
//       table.push([]);
//       for (let j = 1; j <= n; j++) {
//         table[i - 1].push(i * j);
//       }
//     }
//     return table;
//   }
  
//   const table = createMultiplicationTable(10);
//   console.log(table);

  function createMultiplicationTable(size) {
    let multiplicationTable = [];
    for (let i = 1, id = 1; i <= size * size; i++, id++) {
      if (id === size + 1) {
        id = 1;
      }
  
      if (i % size === 1) {
        multiplicationTable.push([id]);
      } else {
        multiplicationTable[multiplicationTable.length - 1].push(id);
      }
    }
    return multiplicationTable;
  }
console.log(createMultiplicationTable(10));
  