/*function all_values(obj) {
    let keys = _keys(obj);
    let length = keys.length;
    let values = Array(length);
    for (let i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  }
function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    let keys = [];
    for (let key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)   
{  
    var type = typeof obj;  
    return type === 'function' || type === 'object' && !!obj;  
  } 
console.log(all_values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
*/

const objectTest = {
    a: 'somestring',
    b: 42,
    c: false
  };

console.log(Object.values(objectTest));

