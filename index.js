let circular_letters = document.querySelector('.scroll-text');
let angle = 360/circular_letters.innerText.length;
circular_letters.innerHTML = circular_letters.innerText.split("").map((letter, index) => {
    return `<span style="transform: rotate(${index * angle}deg)">${letter}</span>`
}).join("");