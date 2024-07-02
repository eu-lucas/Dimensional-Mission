const nomes = [
    "Amanda",
    "Bruno",
    "Everton",
    "Israel Krainski",
    "Israel Wojcik",
    "Jheneffer",
    "Kayke",
    "Klaudiane",
    "Luana",
    "Lucas",
    "Maiara",
    "Mateus Polak",
    "Matheus Wergenski",
    "Miselhen",
    "Nicolas",
    "Rihad"
]

export function aleatorio(lista){
    const position = Math.floor(Math.random() * lista.length);
    return lista[position];
}

export const nome = aleatorio(nomes);
export const pessoaAleatoria = aleatorio(nomes);
export const posicaoPessoaAleatoria = nomes.indexOf(pessoaAleatoria); // função que retorna a posição
