const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de alto nível.",
            "Um banco de dados popular.",
            "Um sistema operacional para dispositivos móveis.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "variable x;",
            "var x;",
            "let x;",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de loop.",
            "Um bloco de código que pode ser chamado e executado.",
            "Um tipo de operador lógico.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para imprimir uma mensagem no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "echo()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado que armazena apenas um valor.",
            "Uma estrutura de dados que armazena vários valores.",
            "Um tipo de função.",
        ],
        correta: 1
    },
    {
        pergunta: "Como você comenta um único linha em JavaScript?",
        respostas: [
            "// Comentário",
            "<!-- Comentário -->",
            "/* Comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Atribuição de valor.",
            "Comparação estrita.",
            "Concatenação de strings.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é NaN em JavaScript?",
        respostas: [
            "Um valor que representa 'não encontrado'.",
            "Um tipo de dado numérico.",
            "Um valor especial que indica que uma operação matemática falhou.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um loop 'for' em JavaScript?",
        respostas: [
            "Um tipo de condicional.",
            "Um tipo de função.",
            "Uma estrutura de controle que repete um bloco de código um número específico de vezes.",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)

            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)


    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)

}

