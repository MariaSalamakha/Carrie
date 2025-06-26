const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener('click', mrBig);
buttonTwo.addEventListener('click', aiden)

function mrBig () {
    image.setAttribute("src", "CarrieAndMrBig.jfif");
    text.innerHTML="Они поженятся?";
    buttonOne.innerHTML = "Да, но не сразу";
    buttonTwo.innerHTML = "Никогда";

    buttonOne.addEventListener('click', wedding);
    buttonTwo.addEventListener('click', neverMarried);
}

function wedding () {
    image.setAttribute("src", "MrBigHappyWedding.jpg");
    text.innerHTML = "Они поженятся и будут счастливы";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function neverMarried () {
    image.setAttribute("src", "CarrieAndMrBigUnhappyWedding.jfif");
    text.innerHTML = "Он ее бросит у алтяря";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function aiden () {
    image.setAttribute("src", "AIdenWedding.jfif");
    text.innerHTML="Они будут счастливы?";
    buttonOne.innerHTML = "Да";
    buttonTwo.innerHTML = "Нет";

    buttonOne.addEventListener('click', happy);
    buttonTwo.addEventListener('click', unhappy);
}

function happy () {
    image.setAttribute("src", "AidanWithBaby.jpg");
    text.innerHTML = "Да, и у них родится ребенок";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function unhappy () {
    image.setAttribute("src", "CarryAidenunhappy.png");
    text.innerHTML = "Нет, они разойдутся из-за измены Керри";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}