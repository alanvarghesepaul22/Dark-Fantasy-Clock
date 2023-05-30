setInterval(setClock, 1000);

const secHand = document.querySelectorAll(".secHand");
const hrNumber = document.getElementById("hour");
const minNumber = document.getElementById("minute");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
let ampm = document.querySelector(".ampm");

function setClock() {
  const currentDate = new Date();
  let secRatio = currentDate.getSeconds() / 60;
  let minRatio = currentDate.getMinutes();
  let hrRatio = currentDate.getHours() % 12 || 12;
  setRotation(secHand, secRatio);

  minRatio = minRatio < 10 ? "0" + minRatio : minRatio;
  hrRatio = hrRatio >= 1 && hrRatio < 10 ? "0" + hrRatio : hrRatio;
  let AMPMvar=hrRatio
  hrNumber.textContent = hrRatio;
  minNumber.textContent = minRatio;
}

function setRotation(element, rotatioRation) {
  for (let i = 0; i < secHand.length; i++) {
    element[i].style.setProperty("--rotation", rotatioRation * 360);
  }
}

setClock();
