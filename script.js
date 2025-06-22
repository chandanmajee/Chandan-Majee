const allowedUsers = ["@chandanmajee", "@neha123", "@raj_verma"];

function checkGift() {
  const input = document.getElementById("insta").value.trim();
  const giftBox = document.getElementById("gift-box");
  const inputArea = document.getElementById("input-area");

  if (allowedUsers.includes(input)) {
    inputArea.classList.add("hidden");
    giftBox.innerHTML = `
      <h2>🎁 Thank You for Wishing
