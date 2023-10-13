console.log("Cześć!");

let changeBackground = document.querySelector(".changeBackground");
let body = document.querySelector(".body");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("body--white");
} );

let modul = document.querySelector(".modul").innerText;
let howMuch = document.querySelector(".howMuch");

switch(modul) {
   
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    howMuch.innerText = "a lot of";
    break;

    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    case "12":
    howMuch.innerText = "much";
    break;

    default:
    howMuch.innerText = "not a lot of";
}

function double(number) {
    return number * 2;
}

console.log(double(5));
console.log(double(10));

let triple = myNumber => myNumber * 2;
console.log(triple(10));