// Função para adicionar um número para realizar a operação.
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

// Função para limpar a tela.
function clean() {
    document.getElementById('resultado').innerHTML = ''
}

// Função para apagar número da tela
function back() {
    var resultado = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

// Função aonde realiza a operação escolhida na calculadora!
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    // Alguns tratamentos de erros!
    if (resultado.length > 15) {
        alert('Não podemos calcular esse número!')
        document.getElementById('resultado').innerHTML = ''
    }
    else {
        if (resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado)
        }
        else {
            alert('Nada para calcular!')
        }
    }
}