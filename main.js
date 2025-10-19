let buttons = document.querySelectorAll('.baner-pagination-button')
console.log(buttons)

for (let button of buttons) {
  button.onclick = function() {
    for (let btn of buttons) {
      btn.classList.remove('is-active')
    }
    button.classList.add('is-active')
  };
};