let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(`.feedback-form`)
const email = form.querySelector(`input`)
const textarea = form.querySelector(`textarea`)
const btn = form.querySelector(`button`)

const STORAGE_KEY = 'feedback-form-state';

loadFormData();

form.addEventListener(`input`, onFormInput)
form.addEventListener(`submit`, onFormSubmit)

function onFormInput(event) {

    formData[event.target.name] = event.target.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {

    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);

    formData = {
    email: "",
    message: ""
  };
}


function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    formData = JSON.parse(savedData);
    email.value = formData.email || '';  
    textarea.value = formData.message || '';  
  }
}