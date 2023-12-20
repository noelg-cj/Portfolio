
// Scroll down circular animation
let circular_letters = document.querySelector('.scroll-text');
let angle = 360/circular_letters.innerText.length;
circular_letters.innerHTML = circular_letters.innerText.split("").map((letter, index) => {
    return `<span style="transform: rotate(${index * angle}deg)">${letter}</span>`
}).join("");

// Magnetic contact div
let contact = document.querySelector(".landing-contact");
contact.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let width = contact.clientWidth;
    let height = contact.clientHeight;
    let x_offset = x - width/2;
    let y_offset = y - height/2;
    console.log(x_offset, y_offset)
    contact.style.transform = `translateX(${x_offset}px) translateY(${y_offset}px)`;

    let exp_x = e.pageX - contact.offsetLeft;
    let exp_y = e.pageY - contact.offsetTop;
    contact.style.setProperty('--x', exp_x+'px');
    contact.style.setProperty('--y', exp_y+'px');
});

contact.addEventListener("mouseout", e => {
    contact.style.transform = '';
})

window.onload = (e) => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
    })
}