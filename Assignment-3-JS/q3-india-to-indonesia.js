let string = 'INDIA';
let arr = string.split('');

arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
let output = arr.join('');

console.log(output);