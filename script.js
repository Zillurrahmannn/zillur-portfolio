console.log("Script loaded v2");
const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbzE6JQLgNcvSChKAVMSCkat3tw9Q7Gl8U2olcnvpBNJaOkPxEV1nIlXSJm3rtSO9mYmxQ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    statusText.classList.remove("hidden");
    form.reset();
  })
  .catch(() => {
    alert("Failed to send message. Please try again.");
  });
});


