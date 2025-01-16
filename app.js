let titulo = document.querySelection("h 1");
titulo.innerHTML = "Hora do desafio!"; 

function Clique1(){
    console.log("Obotão foi pressionado")
    }
function Clique2(){
    console.log("Eu odeio Java!")
}
function Clique3(){
    let cidade = prompt("De qual cidade você é?")
    alert(`Estive em ${cidade} e lembrei de você.`)
}
function Clique4(){
    let n1 = parseInt(prompt("Digite um número."));
    let n2 = parseInt(prompt("Digite outro número."));
    let soma = n1 + n2;
    alert(`A soma entre ${n1} e ${n2} é igual a ${soma}.`)
    
}
