const sumArray = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    console.log("sum is " + sum);
  }

  return sum;
};

let list = [2, 4, 6, 8];
const result = sumArray(list);
console.log(result);

// Practice

// [10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

// Arrow function

const practice = (learn) => {
  let summ = 0;

  for (let i = 0; i < learn.length; i++) {
    summ += learn[i];
    console.log("The sum of the given array is " + summ);
  }
  return summ;
};
let checkOut = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
];
const resultCheck = practice(checkOut);
console.log(resultCheck);
