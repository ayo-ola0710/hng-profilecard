const updateTime = document.querySelector('[data-testid="test-user-time"]');
const form = document.getElementById("contact-form");

// Only query form-related fields if the form exists on the page
const nameField = form ? document.getElementById("contact-name") : null;
const emailField = form ? document.getElementById("contact-email") : null;
const subjectField = form ? document.getElementById("contact-subject") : null;
const messageField = form ? document.getElementById("contact-message") : null;

const errorName = form ? document.getElementById("error-name") : null;
const errorEmail = form ? document.getElementById("error-email") : null;
const errorSubject = form ? document.getElementById("error-subject") : null;
const errorMessage = form ? document.getElementById("error-message") : null;

const success = form
  ? document.querySelector('[data-testid="test-contact-success"]')
  : null;

function updateCurrentTime() {
  const currentTime = Date.now();
  if (updateTime) {
    updateTime.textContent = currentTime;
  }
}
if (updateTime) {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
}

if (form) {
  form.addEventListener("submit", validateForm);
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      validateForm(e);
    }
  });
}

function validateForm(e) {
  e.preventDefault();
  if (!form) return;

  if (success) success.hidden = true;
  if (errorName) errorName.hidden = true;
  if (errorEmail) errorEmail.hidden = true;
  if (errorSubject) errorSubject.hidden = true;
  if (errorMessage) errorMessage.hidden = true;

  let isValid = true;

  if (nameField && nameField.value.trim() === "") {
    if (errorName) errorName.textContent = "Please enter your name.";
    if (errorName) errorName.hidden = false;
    isValid = false;
  }

  if (emailField && emailField.value.trim() === "") {
    if (errorEmail) errorEmail.textContent = "Please enter your email.";
    if (errorEmail) errorEmail.hidden = false;
    isValid = false;
  } else if (emailField && !emailField.value.includes("@")) {
    if (errorEmail)
      errorEmail.textContent = "Please enter a valid email address.";
    if (errorEmail) errorEmail.hidden = false;
    isValid = false;
  }

  if (subjectField && subjectField.value.trim() === "") {
    if (errorSubject) errorSubject.textContent = "Please enter a subject.";
    if (errorSubject) errorSubject.hidden = false;
    isValid = false;
  }

  if (messageField && messageField.value.trim() === "") {
    if (errorMessage) errorMessage.textContent = "Please enter a message.";
    if (errorMessage) errorMessage.hidden = false;
    isValid = false;
  } else if (messageField && messageField.value.length < 10) {
    if (errorMessage)
      errorMessage.textContent =
        "Please enter a message with at least 10 characters.";
    if (errorMessage) errorMessage.hidden = false;
    isValid = false;
  }

  if (isValid) {
    form.reset();
    if (success) {
      success.hidden = false;
      success.textContent = "Message sent successfully!";
    }
  }
}
