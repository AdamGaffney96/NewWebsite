const hamburger = document.querySelector('.hamburger-icon');

hamburger.addEventListener('click', (e) => {
    const content = document.querySelector('.nav-items');
    if (content.style.maxWidth) {
        content.style.maxWidth = null;
    } else {
        console.log(content.scrollWidth);
        content.style.maxWidth = "10rem";
    }
})