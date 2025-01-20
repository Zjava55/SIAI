const randomNumber = Math.floor(Math.random() * 6);
let answer = "Coś poszło nie tak";
let question = prompt("Zadaj mi pytanie");
switch (randomNumber) {
 case 0:
 answer = "Zdecydowanie tak";
 break;
 case 1:
 answer = "Tak";
 break;
 case 2:
 answer = "Możliwe";
 break;
 case 3:
 answer = "Nie";
 break;
 default:
 answer = "Nic mi o tym nie wiadomo";
}
let output = "Zadano mi pytanie: " + question + ". Moja odpowiedź: " + answer;
console.log(output); 
