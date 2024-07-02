import { perguntas } from "./asks.js";
import { aleatorio, nome, pessoaAleatoria, posicaoPessoaAleatoria } from "./random.js";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".inicia-btn")
const telaInicial = document.querySelector(".tela-inicial")

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo(){
    let atual = 0; 
    let historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta()
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if(opcaoSelecionada.proxima !== undefined){
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `${nome}, atravessou o portal...`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
    caixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function obterPronome(posicao) {
    const posicaoPessoa = [0, 5, 7, 8, 10, 13];
    return posicaoPessoa.includes(posicao) ? "a" : "o";
}

function substituirNome(){
    const pronome = obterPronome(posicaoPessoaAleatoria);
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
        pergunta.enunciado = pergunta.enunciado.replace(/people/g, `${pronome} ${pessoaAleatoria}`); // gambiarra braba, mas funcional
    }
}

substituirNome();
