const form = document.getElementById("contactpage");
const formSuccess = document.getElementById("form_success");
const formTitle = document.getElementById("form_title");

function handleSubmit(event) {
  event.preventDefault();
  console.log("Form Submitted!");
  console.log(document.querySelector("#name").value);
  console.log(document.querySelector("#email").value);
  console.log(document.querySelector("#message").value);
  (function () {
    emailjs.init("b8DgPBZU8cnhOAaxv"); //please encrypted public key for malicious attacks
  })();
  //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
  var templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs.send("test_email", "bf360_contact_form", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      form.reset();
      formSuccess.style.display = "block";
      formTitle.style.display = "none";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

form.addEventListener("submit", handleSubmit);
