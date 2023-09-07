const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

if (!customName || !randomize || !story) {
  throw "Erro ao carregar elementos HTML.";
}

const randomValueFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

const storyText = `Toda vez que eu chego em casa :insertx: :inserty: tá na minha :insertz:...<br>
Diga lá :insertk: o que você vai fazer?<br>
Vou usar :insertl: pra me defender!`;

const insertX = ["a escada", "a bandeja", "o celular"];
const ptInsertX = ["o fiambre", "o autocarro", "o telemóvel"];
const insertY = ["da vizinha", "do padeiro", "do colega", "da inquilina"];
const ptInsertY = ["da rapariga", "do gajo", "do malta", "da gaja"];
const insertZ = ["cama", "cozinha", "janela"];
const insertK = ["Caio", "Joana", "Juliano", "Carla"];
const insertL = [
  "uma raquete",
  "uma marreta",
  "um mata-mosquitos",
  "um mouse",
  "um pendrive",
];

randomize.addEventListener("click", () => {
  const isPT = document.getElementById("pt").checked;

  story.innerHTML = storyText
    .replaceAll(":insertx:", randomValueFromArray(!isPT ? insertX : ptInsertX))
    .replaceAll(":inserty:", randomValueFromArray(!isPT ? insertY : ptInsertY))
    .replaceAll(":insertz:", randomValueFromArray(insertZ))
    .replaceAll(":insertk:", customName.value || randomValueFromArray(insertK))
    .replaceAll(":insertl:", randomValueFromArray(insertL));
  story.style.visibility = "visible";
});
