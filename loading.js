const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+><?/.,"

const text = document.querySelector("p");

console.log("hi", text);

text.onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => { 
            if (index < iterations) {
                return event.target.dataset.title[index];
            }
            else return getRandomCharacter(letter);
        })
        .join("");

        if (iterations > event.target.innerText.length) clearInterval(interval)
        iterations += 1 / 3;

    }, 50)
    console.log("hovered")
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