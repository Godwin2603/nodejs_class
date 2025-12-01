// window.addEventListener("load", () => {
//     const params = new URLSearchParams(window.location.search);

//     if (params.get("signup") === "sucess") {
//         alert("Signup successful!");
//     } else if (params.get("signup") === "error") {
//         alert("Signup failed. Please fill all fields.");
//     }
// });
const msg = window.sessionMessage;
const type = window.sessionMessageType;

if (msg) {
  const box = document.getElementById("message");
  box.textContent = msg;
  box.style.color = type === "success" ? "green" : "red";
}
