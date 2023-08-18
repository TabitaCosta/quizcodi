// Questions that will be asked
const Questions = [{
	q: "1 - O que a sigla 'HTML'significa?",
	a: [{ text: "A) Hyper Text Markup Language", isCorrect: true },
	{ text: " B) High Tech Machine Learning", isCorrect: false },
	{ text: " C) Hyperlink and Text Markup Language", isCorrect: false },
	{ text: "D) Hyper Transfer Markup Language", isCorrect: false }
	]

},
{
	q: "2 - Qual propriedade CSS é usada para alterar a cor do texto?",
	a: [{ text: "A) text-color", isCorrect: false, isSelected: false },
	{ text: "B) font-color", isCorrect: false },
	{ text: "C) color", isCorrect: true },
	{ text: " D) text-style", isCorrect: false }
	]

},
{
	q: "3 - O que significa a sigla CSS ?",
	a: [{ text: "A) Cascading Style Sheets", isCorrect: true },
	{ text: "B) Creative Style System", isCorrect: false },
	{ text: "C) Computer Syntax Sheets", isCorrect: false },
	{ text: "D) Colorful Styling Structures", isCorrect: false }
	]

},{
	q: "4 - Qual palavra-chave é usada para declarar uma variável em JavaScript?",
	a: [{ text: "A) Variable", isCorrect: false },
	{ text: "B) v", isCorrect: false },
	{ text: "C) var", isCorrect: true },
	{ text: "let", isCorrect: false }
	]

},{
	q: "5 - Qual método é usado para adicionar um elemento a um array em JavaScript?",

	a: [{ text: "A) push()", isCorrect: true },
	{ text: "B) append()", isCorrect: false },
	{ text: "C) addToEnd()", isCorrect: false },
	{ text: "D) insert()", isCorrect: false }
	]

},{
	q: "6 - Qual framework CSS é amplamente usado para desenvolvimento responsivo e ágil?",
	a: [{ text: "A) Semantic UI", isCorrect: false },
	{ text: "B) Materialize", isCorrect: false },
	{ text: "C) Foundation", isCorrect: false },
	{ text: "D) Bootstrap", isCorrect: true }
	]

},{
	q: "7 - Qual classe do Bootstrap é usada para criar um botão estilizado?",
	a: [{ text: "A) .button", isCorrect: false },
	{ text: "B) .btn", isCorrect: true },
	{ text: "C) .link-button", isCorrect: false },
	{ text: "D) .btn-style", isCorrect: false }
	]

},{
	q: "8 - Qual biblioteca JavaScript é usada para construir interfaces de usuário no estilo componente?",
	a: [{ text: "A) Angular", isCorrect: false },
	{ text: "B) Vue.js", isCorrect: false },
	{ text: "C) React", isCorrect: true },
	{ text: "D) Ember.js", isCorrect: false }
	]

},{
	q: "9 - Em React, qual método é usado para atualizar o estado de um componente?",
	a: [{ text: "A) this.updateState()", isCorrect: false },
	{ text: "B) this.setState()", isCorrect: true },
	{ text: "C) this.modifyState()", isCorrect: false },
	{ text: "D) this.changeState()", isCorrect: false }
	]

},{
	q: "10 - Qual é a função do operador using em C#?",
	a: [{ text: "A) Definir uma nova classe", isCorrect: false },
	{ text: "B) Criar um novo objeto", isCorrect: true },
	{ text: "C) Importar namespaces", isCorrect: false },
	{ text: "D) Declarar uma variável	", isCorrect: false }
	]
}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	perc = score * 100 / 10
	totalScore.textContent = `Você acertou ${score} de ${Questions.length} questões, um percentual de ${Math.trunc(perc)}% . Venha conhecer os cursos da Codi, e desvendar o mundo da programação !!`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
