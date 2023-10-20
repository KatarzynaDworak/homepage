{
    const welcome = () => {
    console.log("Witam serdecznie wszystkich developerów, którzy tu zaglądają!");
}

let toggleBackground = () => {
    const body = document.documentElement;
    const changeBackground = document.querySelector(".js-changeBackground");
    
    body.classList.toggle("body--white");
    changeBackground.innerText = body.classList.contains("body--white") ? "white" : "grey";
};

const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    
    changeBackgroundButton.addEventListener("click", changeBackground);

    welcome();
};
init();
}
