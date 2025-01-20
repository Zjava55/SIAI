let age = prompt("Ile masz lat?");
age = Number(age);
let message;
if(age >= 21){
 message = "Możesz wejść do lokalu i zakupić alkohol.";
}else if(age >= 19){
 message = "Możesz wejść do lokalu, ale nie wolno Ci kupić alkoholu.";
}else{
 message = "Nie możesz wejść do lokalu!";
}
console.log(message);
