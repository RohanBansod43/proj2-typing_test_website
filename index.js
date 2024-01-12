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
  console.log(randomWord);
  return randomWord;
}
// make a random sentence from randowm words from array
function makeSentence(words){
    let temp_word;
    for(let i = 0; i<words; i++){
        if (i==0){
            final_sentence = getRandomWord();
        }
        else if (i>0){
            temp_word = getRandomWord()
            final_sentence = final_sentence + " " + temp_word;
        }
        else{
            console.log("hola");
        }
    }
    return final_sentence;
}

document.querySelector(".text").innerHTML= makeSentence(30);