export function aleatorio(lista){
    const position = Math.floor(Math.random() * lista.length)
    return lista[position]
}