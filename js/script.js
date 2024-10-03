let user = document.getElementById("user");
let sttsUser = document.getElementById("stts-user");


function logar() {
  if (sttsUser.textContent == 'Login') {
    window.location.href = 'login.html';
  } else {
    sttsUser.textContent = 'Login';
  };
};

function redirecionar(destino) {
  if (sttsUser.textContent == 'Login') {
    window.location.href = 'login.html';
  } else {
    if (destino == 'cambios') {
      window.location.href = 'cambios.html';
    } else if (destino == 'perfil') {
      window.location.href = 'perfil.html';
    } else if (destino == 'finalizar') {
      if (moeda[0].textContent == "🇧🇷 BRL ") {
        window.location.href = 'pix.html';
      } else {
        window.location.href = 'coleta.html';
      }
    }

  };
};


let simbolo = document.querySelectorAll(".simbolo");
let moeda = document.querySelectorAll(".moeda");
let valor = document.querySelectorAll(".valor");
let dropdown = document.querySelectorAll(".dropdown-content");

function mostrarMoedas(i) {
  if (dropdown[i].style.display == "none") {
    dropdown[i].style.display = "block";
  } else {
    dropdown[i].style.display = "none";
  };
}

function clickMoeda(n1, n2) {
  if (n1 == 0) {
    if (n2 == 0) {
      simbolo[0].value = "R$";
      moeda[0].textContent = "🇧🇷 BRL ";
      valor[0].value = "";
      valor[1].value = "";
      
    } else if (n2 == 1) {
      simbolo[0].value = "$";
      moeda[0].textContent = "🇺🇸 USD ";
      valor[0].value = "";
      valor[1].value = "";
    } else {
      simbolo[0].value = "€";
      moeda[0].textContent = "🇪🇺 EUR ";
      valor[0].value = "";
      valor[1].value = "";
    };
    dropdown[0].style.display = "none";
  };
  if (n1 == 1) {
    if (n2 == 0) {
      simbolo[1].value = "R$";
      moeda[1].textContent = "🇧🇷 BRL ";
      valor[0].value = "";
      valor[1].value = "";
    } else if (n2 == 1) {
      simbolo[1].value = "$";
      moeda[1].textContent = "🇺🇸 USD ";
      valor[0].value = "";
      valor[1].value = "";
    } else {
      simbolo[1].value = "€";
      moeda[1].textContent = "🇪🇺 EUR ";
      valor[0].value = "";
      valor[1].value = "";
    };
    dropdown[1].style.display = "none";
  };
};

valor[0].addEventListener("keyup", conv1);
valor[1].addEventListener("keyup", conv2);

function conv1() {
  if (moeda[0].textContent == ("🇧🇷 BRL ") && moeda[1].textContent == ("🇺🇸 USD ")) {
    let conv = (valor[0].value / 5.00);
    valor[1].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇧🇷 BRL ") && moeda[1].textContent == ("🇪🇺 EUR ")) {
    let conv = (valor[0].value / 5.50);
    valor[1].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇺🇸 USD ") && moeda[1].textContent == ("🇧🇷 BRL ")) {
    let conv = (valor[0].value * 5.00);
    valor[1].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇺🇸 USD ") && moeda[1].textContent == ("🇪🇺 EUR ")) {
    let conv = (valor[0].value / 1.10);
    valor[1].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇪🇺 EUR ") && moeda[1].textContent == ("🇧🇷 BRL ")) {
    let conv = (valor[0].value * 5.50);
    valor[1].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇪🇺 EUR ") && moeda[1].textContent == ("🇺🇸 USD ")) {
    let conv = (valor[0].value / 0.90);
    valor[1].value = conv.toFixed(2);
  } else {
    let conv = (valor[0].value * 1);
    valor[1].value = conv.toFixed(2);
  };
};

function conv2() {
  if (moeda[0].textContent == ("🇧🇷 BRL ") && moeda[1].textContent == ("🇺🇸 USD ")) {
    let conv = (valor[1].value / 5.00);
    valor[0].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇺🇸 USD ") && moeda[1].textContent == ("🇧🇷 BRL ")) {
    let conv = (valor[1].value / 5.00);
    valor[0].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇧🇷 BRL ") && moeda[1].textContent == ("🇪🇺 EUR ")) {
    let conv = (valor[1].value * 5.50);
    valor[0].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇪🇺 EUR ") && moeda[1].textContent == ("🇧🇷 BRL ")) {
    let conv = (valor[1].value / 5.50);
    valor[0].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇺🇸 USD ") && moeda[1].textContent == ("🇪🇺 EUR ")) {
    let conv = (valor[1].value * 1.10);
    valor[0].value = conv.toFixed(2);
  } else if (moeda[0].textContent == ("🇪🇺 EUR ") && moeda[1].textContent == ("🇺🇸 USD ")) {
    let conv = (valor[1].value * 0.90);
    valor[0].value = conv.toFixed(2);
  } else {
    let conv = (valor[1].value * 1);
    valor[0].value = conv.toFixed(2);
  };
};
