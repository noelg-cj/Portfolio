const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+><?/.,"

const loading_container = document.querySelector(".loading-container");
const text = document.querySelector(".jittery-text");

console.log("hi", text, loading_container);

setTimeout(() => {
    console.log("hi");
    loading_container.style.display = "none";
}, 0);

window.onload = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        text.innerText = text.innerText.split("")
        .map((letter, index) => { 
            if (index < iterations) {
                return text.dataset.title[index];
            }
            else return getRandomCharacter(letter);
        })
        .join("");

        if (iterations > text.innerText.length) clearInterval(interval)
        iterations += 1 / 3;

    }, 50)
}

function getRandomCharacter(letter) {
    let replaceChar = "";
    if (letter != " ") {
        replaceChar = letters[Math.floor(Math.random()*26)];
    }

    else {
        replaceChar = " "
    }
    return replaceChar;
}