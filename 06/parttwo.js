const path = require('path');
const filePath = path.join(__dirname, 'input.txt');
const readFile = require('../utils').readFile;

// Processing the input into a suitable data structure
function processInput(input) {
  const answers = input.split('\n\n').map((group) => {
    let letters = {};
    group
      .split('\n')
      .join('')
      .split('')
      .forEach((letter) => {
        if (letters[letter] == null) letters[letter] = 0;
        letters[letter]++;
      });
    return letters;
  });
  const people = input.split('\n\n').map((group) => {
    return group.split('\n').length;
  });
  return [answers, people];
}

// Main function that is run to get solution
async function main() {
  const input = await readFile(filePath);
  const [answers, people] = processInput(input);

  let totalYes = 0;

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    Object.keys(answer).forEach(letter => {
      if (answer[letter] === people[i]) totalYes++;
    })
  }
  console.log(totalYes);
}

main();
