
  const themeToggle = document.getElementById("themeToggle");

  // 1. Load the saved theme when page loads
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true; // move switch to ON
  }

  // 2. Listen for switch changes and save them
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });


  const input = document.getElementById("messageInput");
const button = document.getElementById("sendBtn");

button.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  if (input.value.trim() === "") return;
  console.log("Sent message:", input.value);
  input.value = ""; // clear input
}
const textarea = document.getElementById("messageInput");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // reset
  textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight/2) + "px"; 
});
// send effect

function sendMessage() {
      let text = document.getElementById("messageInput").value;
      if (text.trim() !== "") {
        // encode text so spaces/symbols don’t break the URL
        let encoded = encodeURIComponent(text);
        // open new page with the message
        window.location.href = "newpage.html?msg=" + encoded;
    }
}