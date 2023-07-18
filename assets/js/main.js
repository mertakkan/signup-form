document.addEventListener("DOMContentLoaded", function () {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const submitBtn = document.querySelector("#submitButton");
  const form = document.querySelector("#signupForm");

  function getInputValues() {
    return {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };
  }

  function checkPasswordStrength(password) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pattern.test(password);
  }

  function checkAllFields() {
    const inputs = getInputValues();
    return (
      inputs.firstName &&
      inputs.lastName &&
      inputs.email &&
      checkPasswordStrength(inputs.password)
    );
  }

  function updateSubmitButtonStatus() {
    submitBtn.disabled = !checkAllFields();
  }

  function logInputValues(event) {
    event.preventDefault();
    const inputs = getInputValues();

    if (
      !inputs.firstName ||
      !inputs.lastName ||
      !inputs.email ||
      !inputs.password
    ) {
      console.log("All fields need to be filled out.");
      return;
    }

    if (!checkPasswordStrength(inputs.password)) {
      console.log(
        "Password does not match the criteria.\nThe password should include:\nMinimum 8 letters\nOne big letter\nOne small letter\nOne number"
      );
      return;
    }

    console.log("First Name: ", inputs.firstName);
    console.log("Last Name: ", inputs.lastName);
    console.log("Email: ", inputs.email);
    console.log("Password: ", inputs.password);
  }

  form.addEventListener("submit", logInputValues);
});
