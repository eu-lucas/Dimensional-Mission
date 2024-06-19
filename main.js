const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assm que você saiu de casa se deparou com um animal que consegue falar, e ele afirma que pode conceder todos os seus desejos. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "A primeira vista ficou um pouco assustado com esse ser.",
                    "Se depara com o animal e questionamentos surgem em sua mente.\"Uau! isso é um sonho? como isso é possível?\""
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber se isso era mesmo possível, então decidiu fazer o seu primeiro desejo.",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            }           
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre elaIA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao:[
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao:[
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:[
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:[
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            }
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao:[
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao:[
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:[
                    "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo.",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:[
                    "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. ",
                    "afirmacão 2 OooooooooooooOOo"
                ]
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista){
    const position = Math.floor(Math.random() * lista.length)
    return lista[position]
}

mostraPergunta();