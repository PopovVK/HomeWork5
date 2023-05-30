const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let summaPositive = 0;
let countPositive = 0;
let maxElement = numbers[0];
let maxElementIndex = 0;
let countNegative = 0;
let countOddPositive = 0;
let countEvenPositive = 0;
let summaEvenPositive = 0;
let summaOddPositive = 0;
let productPositive = 1;

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  if (currentNumber > 0) {
    summaPositive += currentNumber;
    countPositive++;
    productPositive *= currentNumber;

    if (currentNumber % 2 === 0) {
      countEvenPositive++;
      summaEvenPositive += currentNumber;
    } else {
      countOddPositive++;
      summaOddPositive += currentNumber;
    }
  } else {
    countNegative++;
  }

  if (currentNumber > maxElement) {
    maxElement = currentNumber;
    maxElementIndex = i;
  }
}


alert("Сума позитивних елементів: " + summaPositive + "\n" +
  "Кількість позитивних елементів: " + countPositive + "\n" +
  "Максимальний елемент: " + maxElement + "\n" +
  "Порядковий номер максимального елементу: " + (maxElementIndex ) + "\n" +
  "Кількість негативних елементів: " + countNegative + "\n" +
  "Кількість непарних позитивних елементів: " + countOddPositive + "\n" +
  "Кількість парних позитивних елементів: " + countEvenPositive + "\n" +
  "Сума парних позитивних елементів: " + summaEvenPositive + "\n" +
  "Сума непарних позитивних елементів: " + summaOddPositive + "\n" +
  "Добуток позитивних елементів: " + productPositive)
