// Zadanie 3.4
const myCar = {
    make: "Mercedes-Benz"
    model: "E-Class"
    tires: 4,
    doors: 4,
    color: "Brillantblau",
    forSale: false
};

let propColor = "color";
myCar[propColor] = "Mountain Gray";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + "" + myCar.model);
console.log(myCar.forSale);
