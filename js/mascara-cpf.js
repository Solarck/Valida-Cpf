function inputMascaraCpf() {
    const inputCpf = document.querySelector('[data-inputCPF]')

    inputCpf.addEventListener('keypress', () => {
        const inputLength = inputCpf.value.length

        if (inputLength == 3 || inputLength == 7) {
            inputCpf.value += '.'
        }
        else if(inputLength == 11){
            inputCpf.value += '-'
        }
    })

}