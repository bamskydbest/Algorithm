function reverseString(input) {
  let answer = "";

  for (let i = input.length - 1; i >= 0; i -= 1) {
    answer += input[i];
  }

  return answer;
}
let text = "pentium";
const result = reverseString(text);
console.log(result);

// practice

// FLABAGASTED

function reversal(put) {
  let script = " ";
  for (let i = put.length - 1; i >= 0; i--) {
    script += put[i];
  }
  return script;
}
let word = "FLABAGASTED";
const look = reversal(word);
console.log(look);
