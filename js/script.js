console.log("Cześć!");

const changeBackground = (background) => {
    body.classList.toggle("body--white");
};

const init = () => {
    const background = document.querySelector(".js-background");
    const body = document.querySelector(".js-body");
    changeBackground(background);
    changeBackground(body);
};

init();