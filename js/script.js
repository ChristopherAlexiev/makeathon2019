//var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// create Oscillator node
//var oscillator = audioCtx.createOscillator();
var frequency = 800.0
var toneLength = 0.3;
var i;
var context = new AudioContext(),
    oscillator;
var input ="";
var space = 4000;
var spaceBarLength = 6000;

function inputMessage(){
input = document.getElementById("newMessageInput").value;
document.getElementById('messages').value += "\n" + input;



/*
oscillator.connect(audioCtx.destination);
oscillator.frequency.value = frequency;
*/
// stop 2 seconds after the current time

i = 0;

makeMorseSignalRecursive(input, 0);
input ="";

}

function makeMorseSignalRecursive(input, i){
  console.log(input, i)

  if (i == input.length){
    currentLetter = '=';
  } else {
   currentLetter = input.charAt(i);
  }
  if (currentLetter == 'a'){
    letterLength = toneLength*(space+5000);
  } else if (currentLetter == 'b'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'c'){
    letterLength = toneLength*(space+11000);
  } else if (currentLetter == 'd'){
    letterLength = toneLength*(space+7000);
  } else if (currentLetter == 'e'){
    letterLength = toneLength*(space+1000);
  } else if (currentLetter == 'f'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'g'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'h'){
    letterLength = toneLength*(space+7000);
  } else if (currentLetter == 'i'){
    letterLength = toneLength*(space+3000);
  } else if (currentLetter == 'j'){
    letterLength = toneLength*(space+13000);
  } else if (currentLetter == 'k'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'l'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'm'){
    letterLength = toneLength*(space+7000);
  } else if (currentLetter == 'n'){
    letterLength = toneLength*(space+5000);
  } else if (currentLetter == 'o'){
    letterLength = toneLength*(space+11000);
  } else if (currentLetter == 'p'){
    letterLength = toneLength*(space+11000);
  } else if (currentLetter == 'q'){
    letterLength = toneLength*(space+13000);
  } else if (currentLetter == 'r'){
    letterLength = toneLength*(space+7000);
  } else if (currentLetter == 's'){
    letterLength = toneLength*(space+5000);
  } else if (currentLetter == 't'){
    letterLength = toneLength*(space+3000);
  } else if (currentLetter == 'u'){
    letterLength = toneLength*(space+7000);
  } else if (currentLetter == 'v'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'w'){
    letterLength = toneLength*(space+9000);
  } else if (currentLetter == 'x'){
    letterLength = toneLength*(space+11000);
  } else if (currentLetter == 'y'){
    letterLength = toneLength*(space+13000);
  } else if (currentLetter == 'z'){
    letterLength = toneLength*(space+11000);
  } else if (currentLetter == ' '){
    letterLength = toneLength*(spaceBarLength-space);
  } else if (currentLetter == '='){
    letterLength = toneLength*(space+15000);
  }

  printLetter(currentLetter);
  if (i >= input.length){
    return;
  }
  setTimeout(() => makeMorseSignalRecursive(input, i+1), letterLength);
  return;
}


function playOscillator(startTime, endTime) {
  oscillator = context.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(endTime);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function printLetter(letter){
  console.log(`printing ${letter}`)
  switch(letter) {
    case 'a': 
    playOscillator(context.currentTime, context.currentTime + toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 5*toneLength);  
    break;
    case 'b':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 7*toneLength);
    playOscillator(context.currentTime + 8*toneLength, context.currentTime + 9*toneLength);
      break;
    case 'c':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
    playOscillator(context.currentTime + 10*toneLength, context.currentTime + 11*toneLength);
    break;
    case 'd':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 7*toneLength);
    break;
    case 'e':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    break;
    case 'f':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
    playOscillator(context.currentTime + 8*toneLength, context.currentTime + 9*toneLength);
    break;
    case 'g':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
    playOscillator(context.currentTime + 8*toneLength, context.currentTime + 9*toneLength);
    break;
    case 'h':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 7*toneLength);
    break;
    case 'i':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 3*toneLength);
    break;
    case 'j':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
    playOscillator(context.currentTime + 10*toneLength, context.currentTime + 13*toneLength);
    break;
    case 'k':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
    break;
    case 'l':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 7*toneLength);
    playOscillator(context.currentTime + 8*toneLength, context.currentTime + 9*toneLength);
    break;
    case 'm':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
    break;
    case 'n':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    break;
    case 'o':
    playOscillator(context.currentTime, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
    playOscillator(context.currentTime + 8*toneLength, context.currentTime + 11*toneLength);
    break;
    case 'p':
    playOscillator(context.currentTime, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
    playOscillator(context.currentTime + 10*toneLength, context.currentTime + 11*toneLength);
    break;
    case 'q':
    playOscillator(context.currentTime + 0*toneLength, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
    playOscillator(context.currentTime + 8*toneLength, context.currentTime + 9*toneLength);
    playOscillator(context.currentTime + 10*toneLength, context.currentTime + 13*toneLength);
    break;
    case 'r':
    playOscillator(context.currentTime + 0*toneLength, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 7*toneLength);
    break;
    case 's':
    playOscillator(context.currentTime + 0*toneLength, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    break;
    case 't':
    playOscillator(context.currentTime + 0*toneLength, context.currentTime + 3*toneLength);
    break;
    case 'u':
    playOscillator(context.currentTime + 0*toneLength, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
    break;
    case 'v':
    playOscillator(context.currentTime + 0*toneLength, context.currentTime + 1*toneLength);
    playOscillator(context.currentTime + 2*toneLength, context.currentTime + 3*toneLength);
    playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
    playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
    break;
  case 'w':
  playOscillator(context.currentTime + 0*toneLength, context.currentTime + 1*toneLength);
  playOscillator(context.currentTime + 2*toneLength, context.currentTime + 5*toneLength);
  playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
  break;
  case 'x':
  playOscillator(context.currentTime + 0*toneLength, context.currentTime + 3*toneLength);
  playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
  playOscillator(context.currentTime + 6*toneLength, context.currentTime + 7*toneLength);
  playOscillator(context.currentTime + 8*toneLength, context.currentTime + 11*toneLength);
  break;
  case 'y':
  playOscillator(context.currentTime + 0*toneLength, context.currentTime + 3*toneLength);
  playOscillator(context.currentTime + 4*toneLength, context.currentTime + 5*toneLength);
  playOscillator(context.currentTime + 6*toneLength, context.currentTime + 9*toneLength);
  playOscillator(context.currentTime + 10*toneLength, context.currentTime + 13*toneLength);
  break;
  case 'z':
  playOscillator(context.currentTime + 0*toneLength, context.currentTime + 3*toneLength);
  playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
  playOscillator(context.currentTime + 8*toneLength, context.currentTime + 9*toneLength);
  playOscillator(context.currentTime + 10*toneLength, context.currentTime + 11*toneLength);
  break;
  case ' ':
  break;
  case '=':
  playOscillator(context.currentTime + 0*toneLength, context.currentTime + 3*toneLength);
  playOscillator(context.currentTime + 4*toneLength, context.currentTime + 7*toneLength);
  playOscillator(context.currentTime + 8*toneLength, context.currentTime + 11*toneLength);
  playOscillator(context.currentTime + 12*toneLength, context.currentTime + 15*toneLength);
  break;
  
  
  
  
    
    default:
      // code block
} 
}