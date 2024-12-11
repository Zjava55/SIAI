// Zadanie 3.2
const myList = [];
myList.push("Mleko","Pieczywo","Jabłka");
myList.splice(1, 1, "Banany", "Jajka");
const removeLast = myList.pop();
console.log(removeLast);
myList.sort();
console.log(myList.indexOf("Mleko"));
myList.splice(1, 0, "Marchew", "Sałata");
const myList2 = ["Sok","Pop"];
const finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);
