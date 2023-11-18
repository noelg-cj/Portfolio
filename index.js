let letters = document.querySelector('.scroll-text');
let angle = 360/letters.innerText.length;
letters.innerHTML = letters.innerText.split("").map((letter, index) => {
    return `<span style="transform: rotate(${index * angle}deg)">${letter}</span>`
}).join("");