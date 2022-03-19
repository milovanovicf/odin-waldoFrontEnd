const clear = require("./clear");
const htmlElem = require("./htmlElemnts");
const timer = require("./timer");

const loadLevel = () => {
  htmlElem().level.forEach((lvl) => {
    lvl.addEventListener("click", () => {
      clear(htmlElem().homePage);
      htmlElem().levelImg.src = lvl.children[1].src;
      htmlElem().levelTitle.innerText = `Level: ${lvl.children[0].innerText}`;
      htmlElem().levelsContainer.style.display = "block";
      setInterval(timer, 1000);
    });
  });

  htmlElem().levelImg.addEventListener("click", (event) => {
    let lvlHeading = htmlElem().levelTitle.innerText;
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y);

    if (lvlHeading === "LEVEL: SKI TRIP") {
      findChar(1555, 1590, 700, 750, "waldo", x, y);
      findChar(1045, 1070, 430, 455, "wenda", x, y);
      findChar(465, 485, 730, 760, "wizard", x, y);
      findChar(815, 830, 630, 645, "odlaw", x, y);
    }
    if (lvlHeading === "LEVEL: THE MOON") {
      findChar(943, 947, 513, 535, "waldo", x, y);
      findChar(789, 795, 415, 440, "wenda", x, y);
      findChar(1468, 1475, 468, 493, "wizard", x, y);
      findChar(475, 483, 575, 595, "odlaw", x, y);
    }

    if (lvlHeading === "LEVEL: THE RACE TRACK") {
      findChar(760, 785, 265, 290, "waldo", x, y);
      findChar(724, 740, 610, 635, "wenda", x, y);
      findChar(1228, 1240, 730, 783, "wizard", x, y);
      findChar(1211, 1224, 539, 590, "odlaw", x, y);
    }
  });
  let score = 0;

  const findChar = (xMin, xMax, yMin, yMax, char, X, Y) => {
    if (X <= xMax && X >= xMin && Y <= yMax && Y >= yMin) {
      htmlElem().characters.forEach((c) => {
        if (c.id === char) {
          c.classList.add("found");
          createCircle(X, Y);
          score++;
          if (score === 4) {
            document.querySelectorAll(".circle").forEach((c) => {
              document.body.removeChild(c);
            });
            clear(htmlElem().levelsContainer);
            htmlElem().endScreen.style.display = "flex";
          }
        }
      });
    }
  };

  const createCircle = (X, Y) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = `${Y - 10}px`;
    circle.style.left = `${X - 20}px`;
    document.body.appendChild(circle);
  };
};

module.exports = loadLevel;
