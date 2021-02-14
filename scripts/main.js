const foooterForm = document.querySelector(".footer-form");
const footerInput = document.querySelector(".footer-input");
const errorMessage = document.querySelector("#error");
const footerFormWrapper = document.querySelector(".footer-form-wrapper");

foooterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = footerInput.value;

  validateEmail(email);

  input.value = "";
});

function validateEmail(emailAddress) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

  if (emailAddress.length === 0) {
    errorMessage.style.display = "block";
    return;
  }

  if (emailAddress.match(pattern)) {
    footerFormWrapper.style.display = "none";

    errorMessage.textContent = "Email Sent Successfully!";
    errorMessage.style.color = "green";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }
}
