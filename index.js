const word_bank = [
  "hello",
  "who",
  "are",
  "you",
  "to",
  "tell",
  "me",
  "too",
  "stop",
  "talking",
  "please",
  "try",
  "not",
  "bye",
];
const lenWordBank = word_bank.length;
// choose random words
let randomWord;
let final_sentence;
function getRandomWord() {
  let randomNumber = Math.floor(Math.random() * lenWordBank);
  randomWord = word_bank[randomNumber];

  return randomWord;
}
// make a random sentence from randowm words from array
function makeSentence(words) {
  let temp_word;
  for (let i = 0; i < words; i++) {
    if (i == 0) {
      final_sentence = getRandomWord();
    } else if (i > 0) {
      temp_word = getRandomWord();
      final_sentence = final_sentence + " " + temp_word;
    } else {
      console.log("hola");
    }
  }
  return final_sentence;
}

let keyDownCount = 0;
let sentence = makeSentence(30);
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key == sentence[keyDownCount]) {
    document.querySelector(".text").classList.add("sucess");
    console.log(sentence[keyDownCount]);
    console.log("ok");
    keyDownCount++;
    console.log(keyDownCount);
  } else if (event.key == backspace) {
    console.log("ok");
    console.log(keyDownCount);
  } else {
    console.log(sentence[keyDownCount]);
    console.log("not ok");
    keyDownCount++;
    console.log(keyDownCount);
  }
});

document.querySelector(".text").innerHTML = sentence;
