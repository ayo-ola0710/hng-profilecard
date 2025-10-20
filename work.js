const updateTime = document.querySelector('[data-testid="test-user-time"]');
const form = document.getElementById("contact-form");

const nameField = document.getElementById("contact-name");
const emailField = document.getElementById("contact-email");
const subjectField = document.getElementById("contact-subject");
const messageField = document.getElementById("contact-message");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorSubject = document.getElementById("error-subject");
const errorMessage = document.getElementById("error-message");

const success = document.querySelector('[data-testid="test-contact-success"]');

function updateCurrentTime() {
  const currentTime = Date.now();
  updateTime.textContent = currentTime;
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  success.hidden = true;
  errorName.hidden = true;
  errorEmail.hidden = true;
  errorSubject.hidden = true;
  errorMessage.hidden = true;

  let isValid = true;

  if (nameField.value.trim() === "") {
    errorName.textContent = "Please enter your name.";
    errorName.hidden = false;
    isValid = false;
  }

  if (emailField.value.trim() === "") {
    errorEmail.textContent = "Please enter your email.";
    errorEmail.hidden = false;
    isValid = false;
  } else if (!emailField.value.includes("@")) {
    errorEmail.textContent = "Please enter a valid email address.";
    errorEmail.hidden = false;
    isValid = false;
  }

  if (subjectField.value.trim() === "") {
    errorSubject.textContent = "Please enter a subject.";
    errorSubject.hidden = false;
    isValid = false;
  }

  if (messageField.value.trim() === "") {
    errorMessage.textContent = "Please enter a message.";
    errorMessage.hidden = false;
    isValid = false;
  } else if (messageField.value.length < 10) {
    errorMessage.textContent =
      "Please enter a message with at least 10 characters.";
    errorMessage.hidden = false;
    isValid = false;
  }

  if (isValid) {
    form.reset();
    success.hidden = false;
    success.textContent = "Message sent successfully!";
  }
});
