let prize = prompt("Wybierz liczbę z przedziału 0-10");
prize = Number(prize);
let output = "Wybrana opcja to: ";
switch (prize){
 case 0:
 output += "złota ";
 case 1:
 output += "moneta ";
 break;
 case 2:
 output += "duże ";
 case 3:
 output += "pudełko ";
 case 4:
 output += "srebrnych ";
 case 5:
 output += "klocków ";
 break;
 default:
 output += "Spróbuj ponownie";
}
console.log(output); 
