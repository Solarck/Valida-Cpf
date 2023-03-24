
function validaCpf() {
    const campoCpf = document.querySelector('[data-inputCPF]')
    const span = document.querySelector('[data-resultadoDaValidação]')
    const cpf = campoCpf.value.replace(/\.|-/g, "")
    if (validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        span.innerHTML = 'Falso'
    }
    else {
       span.innerHTML = 'Verdadeiro'
    }
}



function validaPrimeiroDigito(cpf) {
    let soma = 0
    let multiplicador = 10

    // temos uma váriavel 0 que vai se repetir até chegar a 9.
    // A repetição ocorrerá 9 vezes,
    // a variavel soma vai recolher o cpf pela posição em que condiz com o laço de repetição até
    // chegar a 9, que irá multiplicar pelo multiplicador.
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    // Obtem-se resultado final da soma de cada um,
    // multiplica-se por 10 e por fim se obtem o resto da divisão po 11, que 
    // nos indica o primereiro digito de um cpf
    soma = (soma * 10) % 11

    // Somentes se o resto da divisão for igual
    // a 10 ou 11 o resultad o do primeiro digito deverá ser = 0
    if (soma == 10 || soma == 11) {
        soma = 0
    }

}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    // verificação do segundo digito
    // agora com os 9 digitos de um cpf e o digito verificador feito anteriormente
    // o loop será feito com tamanho de 10 numeros
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}