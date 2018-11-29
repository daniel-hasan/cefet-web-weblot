
let connectionTime = document.getElementById('connectionTime');
let loadingTime = document.getElementById('loadingTime');
let totalConnection = document.getElementById('totalConnection');

let now = new Date().getTime();
let loadTime = now - performance.timing.navigationStart;
let totalConnectionTime = now - performance.timing.connectStart;


let connectTime = performance.timing.responseEnd - performance.timing.requestStart;

//console.log("Tempo de carregamento da página: " + loadTime + "ms");
console.log("Tempo de conexão: " + totalConnectionTime + "ms");

let textConnectionTime = "Você está conectado a " + connectTime + " ms, mas há quanto carrega essa conexão?";
let textLoadTime = "Mas seu tempo de carregamento de conexão é de " + loadTime + " ms";
let textConnected = "No entanto, seu tempo desde a primeira conexão foi de " + totalConnectionTime + " ms";

connectionTime.textContent = textConnectionTime;
loadingTime.textContent = textLoadTime;
totalConnection.textContent = textConnected;

