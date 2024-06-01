const message = document.querySelector('.button-send');
const content = document.querySelector('.content-message')
message.addEventListener('click', () => {
    const inputEl = document.querySelector('.footer-input');
    console.log(inputEl.value);
    content.innerHTML += `<p class='my-message'>${inputEl.value}</p>`;
});