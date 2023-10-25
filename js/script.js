{
    const welcome = () => {
    console.log("Witam serdecznie wszystkich developerów, którzy tu zaglądają!");
}

let toggleBackground = () => {
    const body = document.documentElement;
    const changeBackground = document.querySelector(".js-changeBackground");
    
    body.classList.toggle("body--white");
    changeBackground.innerText = body.classList.contains("body--white") ? "Change for grey background" : "Change for white background";
};

const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
};
init();
}
