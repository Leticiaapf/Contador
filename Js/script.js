

// FUNÇÕES 

// Declarando o contador
let contador = 0;
function updateCounter() {
    // Atualizando o valor do contador no elemento HTML
    document.getElementById('counter').textContent = contador;
} // Pegar um elemento com id "counter" e atualizar seu texto para o valor do contador

// Função de contador de aumento
function incrementCount() {
    contador++;
    updateCounter();
}   // contador = contador + 1 ou contador += 1 ou  contador++
     // Função para decrementar o contador e atualzar o valor no HTML

// Função de contador de declínio
function decreaseCount() {
    contador--;
    updateCounter();
}   // contador = contador - 1 ou contador -= 1 ou contador--
    // Inicializando o contador no HTML
// Função para resetar o contador
function resetCount() {
    contador = 0;
    updateCounter();
}   // contador = 0   
// função para salvar o valor do contador no armazenamento local do navegador 
function saveCount  () {
    localStorage.setItem('contador', contador);
    alert('Contador salvo!');
}   // Salvar o valor do contador no armazenamento local do navegador

// Função de contador de carga
function loadCount() {  
    const savedCounter = localStorage.getItem('contador');

    if (savedCounter !== null) {
        contador = Number(savedCounter);
    }

    updateCounter();
}
   // A função loadCount() recupera o valor do contador salvo no armazenamento local, converte para um número inteiro e atualiza o contador e o HTML. Se não houver um valor salvo, exibe uma mensagem de alerta.


// localStorage é um objeto que permite armazenar dados no navegador do usuário. Ele é persistente, ou seja, os dados permanecem mesmo após o navegador ser fechado e reaberto.
//  O método setItem() é usado para salvar um valor associado a uma chave, enquanto 
// O  método getItem() é usado para recuperar o valor associado a uma chave.


// EVENTOS 

// Adicionando eventos aos botões
document.getElementById("btnPlus").addEventListener("click", incrementCount);
document.getElementById("btnMinus").addEventListener("click", decreaseCount);
document.getElementById("btnReset").addEventListener("click", resetCount);
document.getElementById("btnSave").addEventListener("click", saveCount);
document.getElementById("btnLoad").addEventListener("click", loadCount);


