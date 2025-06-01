function abrirConvite() {
  
    const welcome = document.getElementById('welcome');
    const convite = document.getElementById('convite');
    const music = document.getElementById('bgMusic');
  
  
    welcome.classList.add('hidden');
    convite.classList.remove('hidden');
  
   
    music.volume = 0.5;
    music.play().catch(() => {
      console.log("Reprodução automática bloqueada.");
    });
}
  
function responder(sim) {
    const resposta = document.getElementById('resposta');
    resposta.textContent = sim
      ? "💖 Mal posso esperar para comemorar com você, meu amor! "
      : "😔 Entendo, mas sentirei muito sua falta...";
}
  
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
  
    if (music.paused) {
      music.play();
      btn.textContent = "🔊 Música Ligada";
    } else {
      music.pause();
      btn.textContent = "🔇 Música Desligada";
    }
}
  

const dataFesta = new Date("2025-05-17T19:00:00");

function atualizarContador() {
    const agora = new Date();
    const tempoRestante = dataFesta - agora;
  
    if (tempoRestante <= 0) {
      document.querySelector(".contador").textContent = "🎉 Já chegou a hora!";
      clearInterval(intervalo); 
      return;
    }
  
    const segundos = Math.floor((tempoRestante / 1000) % 60);
    const minutos = Math.floor((tempoRestante / 1000 / 60) % 60);
    const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}
  
const intervalo = setInterval(atualizarContador, 1000);

let fugas = 0;
const maxFugas = 10;
const btnNao = document.getElementById('nao');

btnNao.addEventListener('mouseover', () => {
    if (fugas >= maxFugas) return;

    // Calcular a posição aleatória com segurança
    const maxX = window.innerWidth - btnNao.offsetWidth - 20;
    const maxY = window.innerHeight - btnNao.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Mover o botão para uma nova posição
    btnNao.style.position = 'absolute';
    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;

    fugas++;


    if (fugas === maxFugas) {
        btnNao.innerText = "Ok, parei 😅";
    }
});
