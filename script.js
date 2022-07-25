let txt = document.querySelector(".txt");
let pb = document.querySelector(".progressbar");
let btn = document.querySelector(".btn");

function quest0_1() {
  btn.innerHTML = `<button class="left" onclick="quest1_1()">Nager</button>
    <button class="right" onclick="quest1_2()">Chercher à manger</button>`;
  txt.innerHTML = `<p>Que fais tu ?</p>`;
  pb.style.width = "80%";
}

function quest0_2() {
  btn.innerHTML = `<button class="left" onclick="quest1_1()">Nager</button>
    <button class="right" onclick="quest1_2()">Chercher à manger</button>`;
  txt.innerHTML = `<p>Que fais tu ?</p>`;
}

function quest1_1() {
  btn.innerHTML = `<button class="left" onclick="quest2_1()">Continuer à nager</button>
      <button class="right" onclick="quest2_2()">Dormir</button>`;
  txt.innerHTML = `<p>Et maintenant ?</p>`;
  pb.style.width = "60%";
}

function quest1_2() {
  btn.innerHTML = `<button class="left" onclick="quest2_3()">Cueillette</button>
      <button class="right" onclick="quest2_4()">Pêche</button>`;
  txt.innerHTML = `<p>Tu favorises ?</p>`;
}

function quest2_1() {
  btn.innerHTML = `<button class="left" onclick="quest3_1()">Bronzer sur la plage</button>
      <button class="right" onclick="quest3_2()">Chercher à manger</button>`;
  txt.innerHTML = `<p>Tu commences à avoir faim</p>`;
  pb.style.width = "40%";
}

function quest2_2() {
  btn.innerHTML = `<button class="left" onclick="quest3_3()">Rester sous la pluie</button>
      <button class="right" onclick="quest3_4()">S'abriter</button>`;
  txt.innerHTML = `<p>Un orage commence quand tu te réveille</p>`;
}

function quest2_3() {
  btn.innerHTML = `<button class="left" onclick="quest3_5()">Des champignons</button>
      <button class="right" onclick="quest3_6()">Des fruits</button>`;
  txt.innerHTML = `<p>Que veux tu chercher ?</p>`;
  pb.style.width = "40%";
}

function quest2_4() {
  btn.innerHTML = `<button class="left" onclick="quest3_7()">Pêcher à la main</button>
      <button class="right" onclick="quest3_8()">Faire une canne à pêche</button>`;
  txt.innerHTML = `<p>Comment pêcher ?</p>`;
}

function quest3_1() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Perdu, tu meurs de faim</p>`;
  pb.style.width = "20%";
}

function quest3_2() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Félicitations, les secours t'on retrouvé</p>`;
}

function quest3_3() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Perdu, tu fais une hypothermie</p>`;
  pb.style.width = "20%";
}

function quest3_4() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Félicitations, après la pluie un hélicoptère vient te chercher</p>`;
}

function quest3_5() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Perdu, les champignons étaient toxic</p>`;
  pb.style.width = "20%";
}

function quest3_6() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Félicitations, un avion de touristes t'as sauvé</p>`;
}

function quest3_7() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Perdu, tu as attrapé une méduse à main nue</p>`;
  pb.style.width = "20%";
}

function quest3_8() {
  btn.innerHTML = `<button class="left" onclick="restart()">Restart</button>`;
  btn.style.marginLeft = "4em";
  txt.innerHTML = `<p>Félicitations, un bâteaux de pêche t'as retrouvé</p>`;
}

function restart() {
  btn.innerHTML = `<button class="left" onclick="quest0_1()">Rouge</button>
  <button class="right" onclick="quest0_2()">Jaune</button>`;
  btn.style.marginLeft = "0em";
  txt.innerHTML = `<p>Choix de l'équipe</p>`;
  pb.style.width = "100%";
}
