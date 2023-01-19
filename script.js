// Select element function
/*global document*/
const selectElement = function(element) {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
