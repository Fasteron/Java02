            // First program
// let chyslo = +prompt('введіть число');
// if (chyslo % 5 === 0 || chyslo % 15 === 0) {
//     console.log("число правильне")
// }
// else {
//         console.log("число неправильне")
//     }

                // Second Program

let first = +prompt("Введіть перше число");
let second = +prompt("Введіть друге число");
let third = +prompt("Введіть третє число");

let suma = 0;

console.log("Введене перше число : " + first);

console.log("Введене друге число : " + second);

console.log("Введене третє число : " + third);



if (first < 0) {
    suma += first; 
}


if (second < 0){
    suma += second;
}


if (third < 0){
    suma += third;
}


if (suma < 0) {
    alert("Правильні числа, Результат = " + suma)
}
else  {
    alert("Не правильні числа")
}
console.log(suma);