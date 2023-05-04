export default function validaPrimeiroDigito(cpf:any) {
    let soma = 0
    let multiplicador = 10

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11
    if (soma == 10 || soma == 11) {
        soma = 0
    }

    return soma != cpf[9]

}