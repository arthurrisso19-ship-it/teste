function mostrarsenha() {
  var inputpass = document.getElementById("senha")
  var versenha = document.getElementById("senhas")

  if (inputpass.type === "password") {
    inputpass.setAttribute("type", "text")
    versenha.classList.replace("bx-lock-alt", "bx-lock-open")
  } else {
    inputpass.setAttribute("type", "password")
    versenha.classList.replace("bx-lock-open", "bx-lock-alt")
  }
}
