const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const shadingButton = document.querySelector("button");
const overlayEffect = document.querySelector(".overlay");

if (!displayedImage || !thumbBar || !shadingButton || !overlayEffect)
  throw "Erro ao carregar elementos HTML.";

const assetsPath = `./assets`;

const imageNames = [
  "computer1.jpg",
  "computer2.jpg",
  "computer3.webp",
  "computer4.jpg",
  "computer5.jpg",
];

const alts = {
  "computer1.jpg": "IBM desktop computer",
  "computer2.jpg": "Old beige desktop computer with joystick",
  "computer3.webp": "Dell Dimension computer with LCD Monitor",
  "computer4.jpg": "IBM PC Compatible with Roland MT-32",
  "computer5.jpg": "Desktop Compaq computer",
};

for (const imageName of imageNames) {
  const image = document.createElement("img");
  image.setAttribute("src", `${assetsPath}/${imageName}`);
  image.setAttribute("alt", alts[imageName]);
  thumbBar.appendChild(image);
  image.addEventListener("click", (event) => {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
  });
}

shadingButton.addEventListener("click", () => {
  const btnClass = shadingButton.getAttribute("class");
  if (btnClass === "dark") {
    shadingButton.setAttribute("class", "light");
    shadingButton.textContent = "Lighten";
    overlayEffect.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    shadingButton.setAttribute("class", "dark");
    shadingButton.textContent = "Darken";
    overlayEffect.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
