const word_bank = [
  "slay",
  "queen",
  "bruh",
  "bet",
  "ratioed",
  "sus",
  "snack",
  "zesty",
  "skibidi",
  "cap",
  "gooning",
  "rizz",
  "ohio",
  "gyatt",
];

let sucess = 0;
let error = 0;
let accuracy;
const lenWordBank = word_bank.length;
// choose random words
let randomWord;
let final_sentence;
let wpm ;
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
let sentence = makeSentence(10);

//convert word into string
function convert_into_span() {
  
  var split = sentence.split("");
  console.log(split)
  var html = '';
  for(let i = 0; i < split.length; i++) {
      html += '<span class="single_letter">' + split[i] + '</span>';
  }
  document.getElementById('text').innerHTML = html;
}
convert_into_span()



//look for keydown events

let keyDownCount = 0;
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key == sentence[keyDownCount]) {
    document.querySelectorAll
    (".single_letter")[keyDownCount].classList.add("sucess");
    sucess++
    keyDownCount++;
    console.log(sucess);
  } else if (event.key == "Backspace") {
    if(keyDownCount>0){keyDownCount--;
    console.log(event.key)
    sucess--;
    document.querySelectorAll
    (".single_letter")[keyDownCount].classList.remove("sucess", "error");
    }
  } 
  else if(keyDownCount == sentence.length){
    accuracy = Math.floor((sucess/keyDownCount)*100)
    
    console.log(accuracy)
  }
  else {
    console.log(sentence[keyDownCount]);
    document.querySelectorAll(".single_letter")[keyDownCount].classList.add("error");
    console.log("not ok");
    keyDownCount++;
    error++
    console.log(error);
  }
});




