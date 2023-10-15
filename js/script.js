console.log("Cześć!");

let changeBackground = document.querySelector(".changeBackground");
let body = document.querySelector(".body");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("body--white");
} );

function double(number) {
    return number * 2;
}

console.log(double(5));
console.log(double(10));

let triple = myNumber => myNumber * 2;
console.log(triple(10));