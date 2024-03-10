/** Define as variáveis para guardar os operandos e a operação atual */
let currentOperand = ''; // Guarda o operando atual
let currentOperation = null; // Guarda a operação atual
let previousOperand = ''; // Guarda o operando anterior

/** Seleciona o elemento de tela onde os números são exibidos */
const screen = document.getElementById('screen');

/** Função para adicionar um número ao operando atual */
function appendNumber(number) {
    if (currentOperand === '0' || currentOperand === '-0') { // Verifica se o operando atual é zero
        currentOperand = number; // Se for, substitui pelo número pressionado
    } else {
        currentOperand += number; // Se não for zero, adiciona o número pressionado ao final do operando atual
    }
    updateScreen(); // Atualiza a tela
}

/** Função para adicionar um ponto decimal ao operando atual */
function appendDecimal(decimal) {
    if (!currentOperand.includes(decimal)) { // Verifica se o operando atual já possui um ponto decimal
        currentOperand += decimal; // Se não possuir, adiciona o ponto decimal ao final do operando atual
    }
    updateScreen(); // Atualiza a tela
}

/** Função para definir a operação a ser realizada */
function setOperation(operation) {
    if (currentOperand !== '') { // Verifica se há um operando atual
        currentOperation = operation; // Define a operação atual
        previousOperand = currentOperand; // Armazena o operando atual como operando anterior
        currentOperand = ''; // Limpa o operando atual
        updateScreen(); // Atualiza a tela
    }
}

/** Função para calcular o resultado da operação */
function calculate() {
    let result; // Variável para guardar o resultado da operação
    const prev = parseFloat(previousOperand); // Converte o operando anterior para um número de ponto flutuante
    const current = parseFloat(currentOperand); // Converte o operando atual para um número de ponto flutuante
    if (isNaN(prev) || isNaN(current)) return; // Verifica se os operandos são números válidos
    switch (currentOperation) { // Realiza a operação com base na operação atual
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString(); // Converte o resultado para uma string e armazena como operando atual
    currentOperation = null; // Limpa a operação atual
    previousOperand = ''; // Limpa o operando anterior
    updateScreen(); // Atualiza a tela com o resultado
}

/** Função para limpar a tela */
function clearScreen() {
    currentOperand = ''; // Limpa o operando atual
    currentOperation = null; // Limpa a operação atual
    previousOperand = ''; // Limpa o operando anterior
    updateScreen(); // Atualiza a tela
}

/** Função para calcular a raiz quadrada do operando atual */
function calculateSqrt() {
    const current = parseFloat(currentOperand); // Converte o operando atual para um número de ponto flutuante
    if (isNaN(current)) return; // Verifica se o operando é um número válido
    currentOperand = Math.sqrt(current).toString(); // Calcula a raiz quadrada e converte para uma string
    updateScreen(); // Atualiza a tela com o resultado
}

/** Função para atualizar a tela com o operando atual */
function updateScreen() {
    screen.innerText = currentOperand === '' ? '0' : currentOperand; // Exibe o operando atual na tela, se estiver vazio, exibe 0
}
