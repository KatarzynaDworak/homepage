console.log("Cześć!");

let changeBackground = document.querySelector(".changeBackground");
let body = document.querySelector(".body");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("body--white");
} );


const hideArticle = (article) => {
    article.classList.add(".article--hidden");
};

const init = () => {
    const articleTop = document.querySelector(".js-articleTop");
    const articleBottom = document.querySelector(".js.articleBottom");
    hideArticle(articleTop);
    hideArticle(articleBottom);
};

init();
