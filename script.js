const loginScreen = document.querySelector(".login-screen");
const openLogin = document.querySelector(".button-bottom");

function openLog() {
  {
    for (let i = 0; i < openLogin.length; i++)
      document.querySelector(".button-bottom");
    document.querySelector(".login-screen").style.display = "block";
    document.querySelector(".people-img").style.transition = "all 2s";
    document.querySelector(".people-img").style.opacity = "0";
    document.querySelector(".button-bottom").style.opacity = "0";
    document.querySelector(".button-bottom").style.transition = "all 2s";
  }
}

openLogin.addEventListener("click", openLog);

const closeLogin = document.querySelector(".fechar");

function closeLog() {
  document.querySelector(".fechar");
  document.querySelector(".login-screen").style.display = "none";
  document.querySelector(".people-img").style.transition = "all 2s";
  document.querySelector(".people-img").style.opacity = "1";
  document.querySelector(".button-bottom").style.opacity = "1";
  document.querySelector(".button-bottom").style.transition = "all 2s";
}

closeLogin.addEventListener("click", closeLog);
