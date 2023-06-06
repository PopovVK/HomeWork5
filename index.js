const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2'];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const parsedNumber = parseInt(numbers[i], 10);
  if (!isNaN(parsedNumber)) {
    sum += parsedNumber;
  }
}

alert('Sum is ' + sum);