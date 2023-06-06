const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (input.type === "text") {
    input.type = "password";
  } else {
    input.type = "text";
  }

  if (input.type === "text") {
    btn.innerText = "Hide Password";
  } else {
    btn.innerText = "Show Password";
  }
});
