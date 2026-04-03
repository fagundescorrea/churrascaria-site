function pedir(item) {
  alert("Pedido realizado: " + item + " 🍖");
}

function scrollMenu() {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}

function abrirWhats() {
  const numero = "5581999999999";
  const mensagem = "Olá, gostaria de fazer um pedido!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}



function irParaReserva() {
    window.location.href = "reserva.html";
}

