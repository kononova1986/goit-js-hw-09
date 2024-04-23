const inputText = document.querySelector("input");
inputText.addEventListener('click', (event) => {
    event.target.setAttribute('placeholder', `Type area`);
    event.target.style.border = '1px solid #808080';
    event.target.classList.add('label-form');
});
inputText.addEventListener('blur', (event) => { 
    event.target.setAttribute('placeholder', ``);
});

const FEEDBACK_FORM = 'feedback-form-state';
const form = document.querySelector(".feedback-form");

const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};
form.elements.email.value = formData.email || '';
form.elements.message.value = formData.message || '';

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    if (event.target.elements.email.value === "" || event.target.elements.message.value === "") {
        return alert(`Fill out all form fields!`);
    }
    event.preventDefault();
    console.log(`${event.target.elements.email.name}: ${event.target.elements.email.value.trim()}\n${event.target.elements.message.name} ${event.target.elements.message.value.trim()}`);
    form.reset();
    localStorage.removeItem(FEEDBACK_FORM);
});
