// Função para exibir a seção selecionada via menu
function showContent(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
  }
  
  // Alternar tema claro/escuro com mudança de texto
  const themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    themeToggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "Modo Claro"
      : "Modo Escuro";
  });
  
  // Aula 1 - Atividade Interativa (Quiz)
  function iniciarQuiz() {
    // Exibe a primeira pergunta sobre UX e esconde a de UI
    document.getElementById("quiz-ux").classList.remove("hidden");
    document.getElementById("quiz-ui").classList.add("hidden");
  }
  
  function resposta(estado) {
    if (estado === "certa" || estado === "a") {
      alert("Resposta correta!");
      // Se a questão de UX foi respondida, mostra a de UI
      if (!document.getElementById("quiz-ux").classList.contains("hidden")) {
        document.getElementById("quiz-ui").classList.remove("hidden");
      }
    } else {
      alert("Resposta errada. Tente novamente!");
    }
  }
  
  // Aula 2 - Exercícios de JavaScript
  
  // 1. Calcular diferença
  function calcularDiferenca() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultadoElement = document.getElementById("resultadoDiferenca");
    if (!isNaN(num1) && !isNaN(num2)) {
        const diferenca = Math.abs(num1 - num2);
        resultadoElement.innerText = `Diferença: ${diferenca}`;
    } else {
        resultadoElement.innerText = "Por favor, insira números válidos.";
    }
}
  
  // 2. Verificar se um número é par
  function verificarParidade() {
    const numero = parseInt(document.getElementById("numPar").value);
    const resultadoElement = document.getElementById("resultadoParidade");
    if (!isNaN(numero)) {
        resultadoElement.innerText = numero % 2 === 0 ? "O número é par." : "O número é ímpar.";
    } else {
        resultadoElement.innerText = "Por favor, insira um número válido.";
    }
}
  
  // 3. Verificar se é múltiplo
  function verificarMultiplo() {
    const num1 = parseInt(document.getElementById("numMultiplo1").value);
    const num2 = parseInt(document.getElementById("numMultiplo2").value);
    const resultadoElement = document.getElementById("resultadoMultiplo");
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        resultadoElement.innerText = num1 % num2 === 0 ? `${num1} é múltiplo de ${num2}.` : `${num1} não é múltiplo de ${num2}.`;
    } else {
        resultadoElement.innerText = "Por favor, insira números válidos e diferentes de zero.";
    }
}
  
  // 4. Converter temperatura
  function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("tempCelsius").value);
    const resultadoElement = document.getElementById("resultadoTemperatura");
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        resultadoElement.innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F.`;
    } else {
        resultadoElement.innerText = "Por favor, insira um valor válido.";
    }
}

//5. Calcular área
function calcularArea() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoElement = document.getElementById("resultadoArea");

    if (!isNaN(base) && !isNaN(altura)) {
        const area = base * altura;
        resultadoElement.innerText = `A área do retângulo é: ${area} cm².`;
    } else {
        resultadoElement.innerText = "Por favor, insira valores válidos.";
    }
}  

//6. Verificar notas
function verificarNotas() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const resultadoElement = document.getElementById("resultadoNotas");

    if (!isNaN(nota1) && !isNaN(nota2)) {
        const media = (nota1 + nota2) / 2;
        const acimaMedia = media >= 7 ? "Acima da média." : "Abaixo da média.";
        const paridade1 = (nota1 % 2 === 0) ? "A primeira nota é par." : "A primeira nota é ímpar.";
        const paridade2 = (nota2 % 2 === 0) ? "A segunda nota é par." : "A segunda nota é ímpar.";

        resultadoElement.innerText = `Média: ${media}\n${acimaMedia}\n${paridade1}\n${paridade2}`;
    } else {
        resultadoElement.innerText = "Por favor, insira notas válidas.";
    }
}

//7. Calcular IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoElement = document.getElementById("resultadoIMC");

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = peso / (altura * altura);
        resultadoElement.innerText = `Seu IMC é: ${imc.toFixed(2)}`;
    } else {
        resultadoElement.innerText = "Por favor, insira valores válidos para peso e altura.";
    }
}

//8. Verificar ano bissexto
function verificarBissexto() {
    const ano = parseInt(document.getElementById("ano").value);
    const resultadoElement = document.getElementById("resultadoBissexto");

    if (!isNaN(ano)) {
        const bissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
        const mensagem = bissexto ? `${ano} é um ano bissexto.` : `${ano} não é um ano bissexto.`;
        resultadoElement.innerText = mensagem;
    } else {
        resultadoElement.innerText = "Por favor, insira um ano válido.";
    }
}

//9. Taxa de câmbio
function converterMoeda() {
    const taxa = parseFloat(document.getElementById('taxa').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const resultadoElement = document.getElementById('resultadoMoeda');

    if (!isNaN(taxa) && !isNaN(valor) && taxa > 0) {
        const valorConvertido = valor * taxa;
        resultadoElement.innerText = `O valor convertido é: R$${valorConvertido.toFixed(2)}`;
    } else {
        resultadoElement.innerText = "Por favor, insira valores válidos para a taxa de câmbio e o valor.";
    }
}

//10. Tabuada
function gerarTabuada() {
    const numero = parseInt(document.getElementById('numeroTabuada').value);
    const resultadoElement = document.getElementById('resultadoTabuada');

    if (!isNaN(numero) && numero >= 1 && numero <= 9) {
        let tabuada = '';
        for (let i = 1; i <= 10; i++) {
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
        resultadoElement.innerText = tabuada;
    } else {
        resultadoElement.innerText = "Por favor, insira um número válido de 1 a 9.";
    }
}

//11. Jogo
function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    let resultado;

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    document.getElementById('resultadoJogo').innerText = `Você escolheu: ${escolhaUsuario}. Computador escolheu: ${escolhaComputador}.`;
    document.getElementById('mensagemJogo').innerText = resultado;
}

//12. Fatorial
function calcularFatorial() {
    const numero = parseInt(document.getElementById('numeroFatorial').value);
    const resultadoElement = document.getElementById('resultadoFatorial');

    if (!isNaN(numero) && numero >= 0) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        resultadoElement.innerText = `O fatorial de ${numero} é: ${fatorial}`;
    } else {
        resultadoElement.innerText = "Por favor, insira um número válido.";
    }
}

//aula 3
//1. Calculadora
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero!";

function calcular(operacao) {
    const num1 = parseFloat(document.getElementById("calcNum1").value);
    const num2 = parseFloat(document.getElementById("calcNum2").value);
    const resultadoElement = document.getElementById("resultadoCalc");
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultadoElement.innerText = "Por favor, insira valores válidos.";
        return;
    }

    switch (operacao) {
        case '+':
            resultado = somar(num1, num2);
            break;
        case '-':
            resultado = subtrair(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operação inválida.";
    }

    resultadoElement.innerText = `Resultado: ${resultado}`;
}

//2. Inverter string
function inverterTexto() {
    const texto = document.getElementById("textoInverter").value;
    const resultadoElement = document.getElementById("resultadoTextoInvertido");

    if (!texto.trim()) {
        resultadoElement.innerText = "Por favor, digite um texto válido.";
        return;
    }

    const textoInvertido = texto.split("").reverse().join("");
    resultadoElement.innerText = `Texto invertido: ${textoInvertido}`;
}

//3. Nome
function separarLetras() {
    const nome = document.getElementById("nomeSeparar").value;
    const resultadoElement = document.getElementById("resultadoSeparador");

    if (!nome.trim()) {
        resultadoElement.innerText = "Por favor, digite um nome válido.";
        return;
    }

    const letrasSeparadas = nome.split("").join("\n");
    resultadoElement.innerText = letrasSeparadas;
}

//4. Carteira de motorista
function verificarIdade() {
    const idade = parseInt(document.getElementById("idadeCarteira").value);
    const resultadoElement = document.getElementById("resultadoIdade");

    if (isNaN(idade) || idade < 0) {
        resultadoElement.innerText = "Por favor, insira uma idade válida.";
        return;
    }

    const mensagem = idade >= 18 ? "Você pode tirar a carteira de motorista!" : "Você ainda não pode tirar a carteira de motorista";
    resultadoElement.innerText = mensagem;
}

//5. Ordernar números
function ordenarNumeros() {
    const num1 = parseFloat(document.getElementById("ordenarNum1").value);
    const num2 = parseFloat(document.getElementById("ordenarNum2").value);
    const num3 = parseFloat(document.getElementById("ordenarNum3").value);
    const resultadoElement = document.getElementById("resultadoOrdenacao");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultadoElement.innerText = "Por favor, insira números válidos.";
        return;
    }

    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    resultadoElement.innerText = `Ordem crescente: ${numeros.join(", ")}`;
}

//6. Converter horas para minutos
function converterHorasParaMinutos() {
    const horas = parseFloat(document.getElementById("horas").value);
    const resultadoElement = document.getElementById("resultadoHoras");

    if (!isNaN(horas) && horas >= 0) {
        const minutos = horas * 60;
        resultadoElement.innerText = `${horas} horas equivalem a ${minutos} minutos.`;
    } else {
        resultadoElement.innerText = "Por favor, insira um valor válido.";
    }
}

//7. Cédulas
function calcularCedulas() {
    let valor = parseInt(document.getElementById("valorCedulas").value);
    const resultadoElement = document.getElementById("resultadoCedulas");
    const cedulas = [200, 100, 50, 20, 10, 5, 1];

    if (isNaN(valor) || valor <= 0) {
        resultadoElement.innerHTML = "Por favor, insira um valor válido!";
        return;
    }

    let resultado = "";
    cedulas.forEach((cedula) => {
        const qtd = Math.floor(valor / cedula);
        if (qtd > 0) {
            resultado += `R$ ${cedula}: ${qtd} cédula(s)<br>`;
            valor %= cedula;
        }
    });

    resultadoElement.innerHTML = resultado;
}

//8. Raiz quadrada
function calcularRaiz() {
    const numero = parseFloat(document.getElementById("numeroRaiz").value);
    const resultadoElement = document.getElementById("resultadoRaiz");

    if (!isNaN(numero) && numero >= 0) {
        const raiz = Math.sqrt(numero).toFixed(2);
        resultadoElement.innerText = `A raiz quadrada de ${numero} é ${raiz}.`;
    } else {
        resultadoElement.innerText = "Por favor, insira um número válido.";
    }
}

//9. Formulário
function validarFormulario() {
    const nome = document.getElementById("nomeForm").value;
    const endereco = document.getElementById("enderecoForm").value;
    const telefone = document.getElementById("telefoneForm").value;
    const email = document.getElementById("emailForm").value;
    const resultadoElement = document.getElementById("resultadoForm");

    if (!nome || !endereco || !telefone || !email) {
        resultadoElement.innerText = "Por favor, preencha todos os campos.";
    } else {
        resultadoElement.innerText = "Formulário válido. Parabéns!";
    }
}

//10. Imposto de renda
function converterMoeda() {
    const taxa = parseFloat(document.getElementById("taxaCambio").value);
    const valor = parseFloat(document.getElementById("valorCambio").value);
    const resultadoElement = document.getElementById("resultadoCambio");

    if (!isNaN(taxa) && !isNaN(valor) && taxa > 0 && valor > 0) {
        const valorConvertido = valor * taxa;
        resultadoElement.innerText = `Valor convertido: R$ ${valorConvertido.toFixed(2)}`;
    } else {
        resultadoElement.innerText = "Por favor, insira valores válidos.";
    }
}

//11. Juros
function calcularJurosCompostos() {
    const capital = parseFloat(document.getElementById("capital").value);
    const taxa = parseFloat(document.getElementById("taxa").value);
    const tempo = parseInt(document.getElementById("tempo").value);
    const resultadoElement = document.getElementById("resultadoJuros");

    if (!isNaN(capital) && !isNaN(taxa) && !isNaN(tempo) && capital > 0 && taxa > 0 && tempo > 0) {
        const montante = capital * Math.pow(1 + taxa, tempo);
        resultadoElement.innerText = `Montante final: R$ ${montante.toFixed(2)}`;
    } else {
        resultadoElement.innerText = "Por favor, insira valores válidos.";
    }
}

//12. Juros compostos
function calcularParcela() {
    const valor = parseFloat(document.getElementById("valorFinanciado").value);
    const taxa = parseFloat(document.getElementById("taxaJuros").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const resultadoElement = document.getElementById("resultadoParcela");

    if (!isNaN(valor) && !isNaN(taxa) && !isNaN(parcelas) && valor > 0 && taxa > 0 && parcelas > 0) {
        const pmt = (valor * taxa) / (1 - Math.pow(1 + taxa, -parcelas));
        resultadoElement.innerText = `Valor da parcela: R$ ${pmt.toFixed(2)}`;
    } else {
        resultadoElement.innerText = "Por favor, insira valores válidos.";
    }
}  

//13.Simular financiamento
function calcularIR() {
    const salario = parseFloat(document.getElementById("salarioIR").value);
    const resultadoElement = document.getElementById("resultadoIR");

    if (!isNaN(salario) && salario > 0) {
        let imposto;

        if (salario <= 1903.98) {
            imposto = "Isento de Imposto de Renda.";
        } else if (salario <= 2826.65) {
            imposto = `Imposto: R$ ${(salario * 0.075 - 142.80).toFixed(2)}`;
        } else if (salario <= 3751.05) {
            imposto = `Imposto: R$ ${(salario * 0.15 - 354.80).toFixed(2)}`;
        } else if (salario <= 4664.68) {
            imposto = `Imposto: R$ ${(salario * 0.225 - 636.13).toFixed(2)}`;
        } else {
            imposto = `Imposto: R$ ${(salario * 0.275 - 869.36).toFixed(2)}`;
        }

        resultadoElement.innerText = imposto;
    } else {
        resultadoElement.innerText = "Por favor, insira um valor válido.";
    }
}

let numeros = [2, 5, 8, 10, 15];
document.getElementById("valoresOriginais").innerText = numeros.join(", ");

function dobrarValores() {
    const dobrados = numeros.map(num => num * 2);
    document.getElementById("resultadoDobrar").innerText = `Valores dobrados: ${dobrados.join(", ")}`;
}

let numerosMedia = [4, 8, 15, 16, 23, 42, 10, 5];
document.getElementById("valoresMedia").innerText = numerosMedia.join(", ");

function calcularMedia() {
    const soma = numerosMedia.reduce((acc, num) => acc + num, 0);
    const media = soma / numerosMedia.length;
    document.getElementById("resultadoMedia").innerText = `Média: ${media.toFixed(2)}`;
}

const containerIdades = document.getElementById("inputsIdades");
for (let i = 0; i < 20; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `idade${i}`;
    input.placeholder = `Pessoa ${i + 1}`;
    containerIdades.appendChild(input);
}

function calcularMediaIdades() {
    const idades = [];
    for (let i = 0; i < 20; i++) {
        const valor = parseInt(document.getElementById(`idade${i}`).value);
        if (!isNaN(valor)) {
            idades.push(valor);
        }
    }
    if (idades.length < 20) {
        alert("Por favor, preencha todas as idades.");
        return;
    }
    const soma = idades.reduce((acc, idade) => acc + idade, 0);
    const media = soma / idades.length;
    const acimaMedia = idades.filter(idade => idade > media);

    document.getElementById("mediaIdades").innerText = media.toFixed(2);
    document.getElementById("idadesAcima").innerText = acimaMedia.join(", ");
}

const containerNumeros = document.getElementById("inputsNumeros");
for (let i = 0; i < 10; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `numero${i}`;
    input.placeholder = `Número ${i + 1}`;
    containerNumeros.appendChild(input);
}

function verificarPares() {
    const numeros = [];
    const pares = [];
    for (let i = 0; i < 10; i++) {
        const valor = parseInt(document.getElementById(`numero${i}`).value);
        if (!isNaN(valor)) {
            numeros.push(valor);
            if (valor % 2 === 0) {
                pares.push(valor);
            }
        }
    }
    const resultado = pares.length > 0 
        ? `Números pares: ${pares.join(", ")}` 
        : "Todos os números são ímpares.";
    document.getElementById("resultadoPares").innerText = resultado;
}

const containerValidacao = document.getElementById("inputsValidacao");
for (let i = 0; i < 8; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `validacao${i}`;
    input.placeholder = `Número ${i + 1}`;
    containerValidacao.appendChild(input);
}

function validarNumeros() {
    const numeros = [];
    let mensagem = "";

    for (let i = 0; i < 8; i++) {
        const valor = parseInt(document.getElementById(`validacao${i}`).value);
        if (valor < 100 || valor > 200 || isNaN(valor)) {
            mensagem = "Insira apenas números entre 100 e 200.";
            break;
        }
        numeros.push(valor);
    }
    document.getElementById("resultadoValidacao").innerText = mensagem || `Números válidos: ${numeros.join(", ")}`;
}

const listaNomes = ["Geovanna", "Gabriel", "Ariane", "Joyce", "Nícolas", "Thifany", "Gabriela", "João", "Fernanda",];

function buscarNome() {
    const nomeDigitado = document.getElementById("nomeInput").value.trim();
    const resultado = document.getElementById("resultadoNome");

    if (nomeDigitado === "") {
        resultado.textContent = "Por favor, digite um nome válido.";
        resultado.style.color = "red";
        return;
    }

    const encontrado = listaNomes.indexOf(nomeDigitado);

    if (encontrado !== -1) {
        resultado.textContent = `O nome "${nomeDigitado}" foi encontrado na posição ${encontrado + 1} da lista.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Nome não encontrado na lista.";
        resultado.style.color = "red";
    }
}

let tentativasRestantes = 5;

function buscarNomeTentativa() {
    const nomeDigitado = document.getElementById("nomeInputTentativa").value.trim();
    const resultado = document.getElementById("resultadoTentativa");

    if (nomeDigitado === "") {
        resultado.textContent = "Por favor, digite um nome válido.";
        resultado.style.color = "red";
        return;
    }

    if (tentativasRestantes > 0) {
        const encontrado = listaNomes.indexOf(nomeDigitado);

        if (encontrado !== -1) {
            resultado.textContent = `O nome "${nomeDigitado}" foi encontrado na lista!`;
            resultado.style.color = "green";
        } else {
            tentativasRestantes--;
            document.getElementById("tentativas").textContent = tentativasRestantes;
            if (tentativasRestantes === 0) {
                resultado.textContent = "Todas as tentativas foram usadas. Nome não encontrado.";
                resultado.style.color = "red";
            } else {
                resultado.textContent = `Nome não encontrado! Você tem mais ${tentativasRestantes} tentativa(s).`;
                resultado.style.color = "orange";
            }
        }
    }
}

let vetorA = [];
let vetorB = [];

function adicionarAoVetorA() {
    const input = document.getElementById("inputVetorA");
    const valor = parseInt(input.value);

    if (!isNaN(valor) && vetorA.length < 6) {
        vetorA.push(valor);
        input.value = "";

        if (vetorA.length === 6) {
            vetorB = vetorA.map(num => num / 2);
            document.getElementById("resultadoVetorA").textContent = `Vetor A: ${vetorA.join(", ")}`;
            document.getElementById("resultadoVetorB").textContent = `Vetor B (metades): ${vetorB.join(", ")}`;
        }
    } else {
        alert("Por favor, insira um número válido ou verifique se o vetor já está completo.");
    }
}

let preenchendoA = true;
let vetorAltA = [];
let vetorAltB = [];
let vetorAltC = [];

function adicionarVetorAlternado() {
    const input = document.getElementById("inputVetorAlternado");
    const valor = parseInt(input.value);

    if (!isNaN(valor)) {
        if (preenchendoA && vetorAltA.length < 5) {
            vetorAltA.push(valor);
        } else if (!preenchendoA && vetorAltB.length < 5) {
            vetorAltB.push(valor);
        }

        input.value = "";

        if (vetorAltA.length === 5 && preenchendoA) {
            preenchendoA = false;
            alert("Agora preencha os 5 números do Vetor B.");
        }

        if (vetorAltA.length === 5 && vetorAltB.length === 5) {
            vetorAltC = [];
            for (let i = 0; i < 5; i++) {
                vetorAltC.push(vetorAltA[i], vetorAltB[i]);
            }

            exibirVetoresAlternados();
        }
    }
}

function exibirVetoresAlternados() {
    document.getElementById("resultadoAlternadoA").textContent = `Vetor A: ${vetorAltA.join(", ")}`;
    document.getElementById("resultadoAlternadoB").textContent = `Vetor B: ${vetorAltB.join(", ")}`;
    document.getElementById("resultadoAlternadoC").textContent = `Vetor C (Alternado): ${vetorAltC.join(", ")}`;
}

const valoresIniciais = [1, 2, 3, 4, 5];
document.getElementById("valoresOriginaisDobro").textContent = valoresIniciais.join(", ");

function calcularDobro() {
    const valoresDobrados = valoresIniciais.map(valor => valor * 2);
    document.getElementById("resultadoDobro").textContent = `Dobro dos valores: ${valoresDobrados.join(", ")}`;
}

function gerarSequencia() {
    const inicio = parseInt(document.getElementById("numInicial").value);
    const fim = parseInt(document.getElementById("numFinal").value);
    const resultado = document.getElementById("resultadoSequencia");

    if (isNaN(inicio) || isNaN(fim) || inicio >= fim) {
        resultado.innerText = "Por favor, insira um intervalo válido (início menor que fim).";
        return;
    }

    const sequencia = [];
    for (let i = inicio; i <= fim; i++) {
        sequencia.push(i);
    }

    resultado.innerText = `Sequência: ${sequencia.join(", ")}`;
}

function somarPares() {
    const inicio = parseInt(document.getElementById("inicioPares").value);
    const fim = parseInt(document.getElementById("fimPares").value);
    const resultado = document.getElementById("resultadoSomaPares");

    if (isNaN(inicio) || isNaN(fim) || inicio >= fim) {
        resultado.innerText = "Por favor, insira um intervalo válido (início menor que fim).";
        return;
    }

    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) soma += i;
    }

    resultado.innerText = `A soma dos números pares entre ${inicio} e ${fim} é: ${soma}.`;
}

function ordenarDecrescente() {
    const numeros = document.getElementById("numerosParaOrdenar").value.split(",").map(Number);
    const resultado = document.getElementById("resultadoOrdenacaoDecrescente");

    if (numeros.some(isNaN)) {
        resultado.innerText = "Por favor, insira apenas números válidos separados por vírgulas.";
        return;
    }

    const ordenados = numeros.sort((a, b) => b - a);
    resultado.innerText = `Números em ordem decrescente: ${ordenados.join(", ")}`;
}

function contarVogais() {
    const texto = document.getElementById("textoVogais").value.toLowerCase();
    const vogais = texto.match(/[aeiou]/g) || [];
    const resultado = document.getElementById("resultadoVogais");

    resultado.innerText = `O texto contém ${vogais.length} vogal(is): ${vogais.join(", ")}`;
}