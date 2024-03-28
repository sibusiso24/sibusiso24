let word = prompt("Enter a word").toLowerCase();
let answerArray = [];
answerArray = word.split("").map(() => "_");
let remainingLetters = word.length

while (remainingLetters > 0) {
  let letter = prompt("Guess a letter for the unspecified word");

  word.split("").forEach((char, index) => {
    if (char === letter) {
      answerArray[index] = letter;
    }
  });

  remainingLetters--;
  alert(answerArray.join(", "));
}

if (answerArray.join("") == word) {
  alert(`you won`);
} else {
  alert(`you lose`);
}
