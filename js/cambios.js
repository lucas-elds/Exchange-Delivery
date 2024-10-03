let trajetobtn = document.querySelectorAll(".trajeto-btn");
let mapa = document.querySelectorAll(".mapa");

let detalhebtn = document.querySelectorAll(".detalhe-btn");
let detalhes = document.querySelectorAll(".detalhes");

let btntxt = document.querySelectorAll(".btn-txt");

let setaBaixo = '<i class="fa-solid fa-chevron-down"></i>';
let setaCima = '<i class="fa-solid fa-chevron-up"></i>';
let logoMapa = '<i class="fa-solid fa-location-dot"></i>';
let logoDetalhes = '<i class="fa-solid fa-circle-info"></i>';

function expandirMapa() {
    if (mapa[0].style.display == "none") {
        detalhes[0].style.display = "block";
        mapa[0].style.display = "block";
        trajetobtn[0].innerHTML = logoMapa + " Recolher mapa " + setaCima;
    } else {
        detalhes[0].style.display = "none";
        mapa[0].style.display = "none";
        trajetobtn[0].innerHTML = logoMapa + " Acompanhar trajeto " + setaBaixo;
    };
};


function maisDetalhes(i) {
  if (detalhes[i+1].style.display == "none") {
    detalhes[i+1].style.display = "block";
    detalhebtn[i].innerHTML = logoDetalhes + " Menos detalhes " + setaCima;
  } else {
    detalhes[i+1].style.display = "none";
    detalhebtn[i].innerHTML = logoDetalhes + " Mais detalhes " + setaBaixo;
  };
};


let stts = document.querySelectorAll(".status");

for (let i = 0; i < stts.length; i++) {
  if (stts[i].textContent == "Em andamento") {
    stts[i].style.backgroundColor = "#478dde";
  } else if (stts[i].textContent == "Concluído") {
    stts[i].style.backgroundColor = "#29ba59";
  } else if (stts[i].textContent == "Cancelado") {
    stts[i].style.backgroundColor = "#cc2b2b";
  } else {
    stts[i].style.backgroundColor = "#000000";
  };;
}