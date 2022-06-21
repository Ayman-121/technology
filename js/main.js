let listShower = document.querySelector("#nav-hider");

listShower.onclick = function ayman() {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  document.body.appendChild(popup);

  let a1 = document.createElement("a");
  a1.href = "#home";
  a1.innerHTML = "Home";
  popup.appendChild(a1);

  let a2 = document.createElement("a");
  a2.href = "#services";
  a2.innerHTML = "Services";
  popup.appendChild(a2);

  let a3 = document.createElement("a");
  a3.href = "#about";
  a3.innerHTML = "About";
  popup.appendChild(a3);

  let a4 = document.createElement("a");
  a4.href = "#pages";
  a4.innerHTML = "Message Us";
  popup.appendChild(a4);

  let a5 = document.createElement("a");
  a5.href = "#testimonials";
  a5.innerHTML = "Testimonials";
  popup.appendChild(a5);

  let a6 = document.createElement("button");
  a6.classList.add("btn", "btn-success");
  a6.innerHTML = "Contact Support";
  popup.appendChild(a6);

  a1.onclick = function () {
    popup.remove();
  };
  a2.onclick = function () {
    popup.remove();
  };
  a3.onclick = function () {
    popup.remove();
  };
  a4.onclick = function () {
    popup.remove();
  };
  a5.onclick = function () {
    popup.remove();
  };
  a6.onclick = function () {
    popup.remove();
  };

  listShower.onclick = function () {
    popup.remove();
    listShower.onclick = function () {
      ayman();
    };
  };
};

// show Testimonials <[-?>

let myFirstBox = document.querySelector(".testimonials .first-box");
let mySecondBox = document.querySelector(".testimonials .second-box");
let myThirdBox = document.querySelector(".testimonials .third-box");
let myAllBoxes = document.querySelectorAll(".testimonials .box");

myArray = [myFirstBox, mySecondBox, myThirdBox];

function test() {
  myFirstBox.style.display = "none";
  mySecondBox.style.display = "none";
  myThirdBox.style.display = "none";
  let our = Math.floor(Math.random() * myAllBoxes.length);
  let value = (myArray[our].style.display = "grid");

  let dot1 = document.querySelector(`.testimonials #one`);
  let dot2 = document.querySelector(`.testimonials #second`);
  let dot3 = document.querySelector(`.testimonials #third`);

  if (our === 0) {
    dot1.style.cssText = "opacity:1";
    dot2.style.cssText = "opacity:0.3";
    dot3.style.cssText = "opacity:0.3";
  } else if (our === 1) {
    dot1.style.cssText = "opacity:0.3";
    dot2.style.cssText = "opacity:1";
    dot3.style.cssText = "opacity:0.3";
  } else if (our === 2) {
    dot1.style.cssText = "opacity:0.3";
    dot2.style.cssText = "opacity:0.3";
    dot3.style.cssText = "opacity:1";
  }
}
setTimeout(test, 0);