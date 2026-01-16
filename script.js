const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  fetch("PASTE_YOUR_APPS_SCRIPT_URL_HERE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
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
