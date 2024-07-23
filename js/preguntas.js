// Logica apra manejrar el tiempo del aprendiz
let segundos = 0;
let minutos = 0;
let horas = 0;
let tiempoInicio;

function iniciarContador() {
	tiempoInicio = setInterval(function () {
		segundos++;
		if (segundos === 60) {
			minutos++;
			segundos = 0;
		}
		if (minutos === 60) {
			horas++;
			minutos = 0;
		}
		document.getElementById("contador").textContent =
			(horas > 9 ? horas : "0" + horas) +
			":" +
			(minutos > 9 ? minutos : "0" + minutos) +
			":" +
			(segundos > 9 ? segundos : "0" + segundos);
		localStorage.setItem("contadorState", `${horas}:${minutos}:${segundos}`);
		if (minutos === 105) {
			clearInterval(tiempoInicio);
			alert("Tiempo agotado!");
		}
	}, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
	const savedState = localStorage.getItem("contadorState");
	if (savedState) {
		const [savedHoras, savedMinutos, savedSegundos] = savedState
			.split(":")
			.map(Number);
		horas = savedHoras;
		minutos = savedMinutos;
		segundos = savedSegundos;
		document.getElementById("contador").textContent =
			(horas > 9 ? horas : "0" + horas) +
			":" +
			(minutos > 9 ? minutos : "0" + minutos) +
			":" +
			(segundos > 9 ? segundos : "0" + segundos);
	}
	iniciarContador();
});

// Logica de el puntage de las preguntas
document.addEventListener("DOMContentLoaded", () => {
	const correctAnswers = {
		/* Parte cero */
		1: "are",
		2: "Can",
		3: "Where",
		4: "your",
		5: "has",
		6: "like",
		7: "Is there",
		8: "Would",
		9: "It's Betty's",
		10: "She doesn’t live here anymore.",
		11: "on",
		12: "fly",
		13: "can",
		14: "is she?",
		15: "went",
		16: "has",
		17: "any",
		18: "shelves",
		19: "Get up",
		20: "some",
		21: "must",
		22: "office",
		23: "May",
		24: "Where",
		25: "bathroom",
		26: "don't have",
		27: "well",
		28: "bigger",
		29: "since",
		30: "shouldn't",
		31: "she will go to Santa Marta.",
		32: "will have",
		33: "heavier",
		34: "Swimming",
		35: "‘re having",
		36: "If you want",
		37: "was doing",
		38: ["got", "had arrived"],
		39: "Sara: “If I won the lottery, I would travel around the world“.",
		40: "I will lose",
		41: "lasted",
		42: ["'s been writing", "'s written"],
		43: "too much studying",
		44: "didn’t manage",
		45: "had had - would have traveled",
		46: "had already been broken",
		47: "aren't I",
		48: "don't they",
		49: "dialed",
		50: "where",
		/* Parte uno */
		51: "I'm",
		52: "What",
		53: "name",
		54: "to meet",
		55: "It's",
		/* Parte dos */
		56: "G",
		57: "B",
		58: "E",
		59: "C",
		60: "F",
		/* Parte tres */
		61: "False",
		62: "False",
		63: "Not given",
		64: "Not given",
		65: "True",
		/* Parte cuatro */
		66: "Study every day",
		67: "Communicate with other people using English adequately.",
		68: "Aware",
		69: "Ask someone from your class for help or even check online resources.",
		70: "Getting Advice on Improving your English",
		/* Parte cinco */
		71: ["is","nationwide"],
		77: "foreign",
		73: "in",
		74: "its",
		75: "pray",
		76: "taken",
		77: "by",
		78: "tasty",
		79: "admiring",
		80: "have acquired",
		/* Parte seis */
		81: "Apprentices Tourists",
		82: "To cause someone to focus on something",
		83: "Later",
		84: "Practical Experiences in a Training Program at SENA",
		85: "The apprentices are grateful for what they have learned",
	};
	const submitButton = document.querySelector("button");
	submitButton.addEventListener("click", (event) => {
		event.preventDefault();
		let score = 0;
		let userAnswers = {};

		Object.keys(correctAnswers).forEach((questionNumber) => {
			const selectElement = document.querySelector(
				`#question${questionNumber}`
			);
			if (selectElement) {
				const answer = selectElement.value;
				userAnswers[questionNumber] = answer;
				if (answer === correctAnswers[questionNumber]) {
					score++;
				}
			}
		});

		// Guarda las respuestas y el puntaje en localStorage
		localStorage.setItem("score", score);
		localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

		// Redirige a la página de resultados
		window.location.href = "./resultado.html";
	});
});
/* hola aqui se actualiza las puntuaciones*/
function updateScore(value) {
	document.getElementById("score").innerText = value;
}

function loadUserName() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const fullName = userData ? userData.fullName : "Usuario";
    document.getElementById("usernameDisplay").innerText = fullName;
}


function loadResults() {
	const score = parseInt(localStorage.getItem("score"));
	const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));

	// Calcula el porcentaje basado en el número total de preguntas
	const totalQuestions = 85; // Número total de preguntas
	const percentageScore = score ? (score / totalQuestions) * 100 : 0;
	document.getElementById("score").innerText = Math.round(percentageScore);

	// Ajusta el valor del input range según el puntaje y lo deshabilita
	const scoreRangeInput = document.querySelector('input[type="range"]');
	if (scoreRangeInput) {
		scoreRangeInput.value = Math.round(percentageScore);
		scoreRangeInput.disabled = true; // Deshabilita el input para que no se pueda editar
	}

	const correctAnswers = {
		/* Parte cero */
		1: "are",
		2: "Can",
		3: "Where",
		4: "your",
		5: "has",
		6: "like",
		7: "Is there",
		8: "Would",
		9: "It's Betty's",
		10: "She doesn’t live here anymore.",
		11: "on",
		12: "fly",
		13: "can",
		14: "is she?",
		15: "went",
		16: "has",
		17: "any",
		18: "shelves",
		19: "Get up",
		20: "some",
		21: "must",
		22: "office",
		23: "May",
		24: "Where",
		25: "bathroom",
		26: "don't have",
		27: "well",
		28: "bigger",
		29: "since",
		30: "shouldn't",
		31: "she will go to Santa Marta.",
		32: "will have",
		33: "heavier",
		34: "Swimming",
		35: "‘re having",
		36: "If you want",
		37: "was doing",
		38: ["got", "had arrived"],
		39: "Sara: “If I won the lottery, I would travel around the world“.",
		40: "I will lose",
		41: "lasted",
		42: ["'s been writing", "'s written"],
		43: "too much studying",
		44: "didn’t manage",
		45: "had had - would have traveled",
		46: "had already been broken",
		47: "aren't I",
		48: "don't they",
		49: "dialed",
		50: "where",
		/* Parte uno */
		51: "I'm",
		52: "What",
		53: "name",
		54: "to meet",
		55: "It's",
		/* Parte dos */
		56: "G",
		57: "B",
		58: "E",
		59: "C",
		60: "F",
		/* Parte tres */
		61: "False",
		62: "False",
		63: "Not given",
		64: "Not given",
		65: "True",
		/* Parte cuatro */
		66: "Study every day",
		67: "Communicate with other people using English adequately.",
		68: "Aware",
		69: "Ask someone from your class for help or even check online resources.",
		70: "Getting Advice on Improving your English",
		/* Parte cinco */
		71: "nationwide",
		77: "foreign",
		73: "in",
		74: "its",
		75: "pray",
		76: "taken",
		77: "by",
		78: "tasty",
		79: "admiring",
		80: "have acquired",
		/* Parte seis */
		81: "Apprentices Tourists",
		82: "To cause someone to focus on something.",
		83: "Later",
		84: "Practical Experiences in a Training Program at SENA.",
		85: "The apprentices are grateful for what they have learned.",
	};

	const tbody = document.querySelector("tbody");
	tbody.innerHTML = "";
	Object.keys(correctAnswers).forEach((questionNumber) => {
		const userAnswer = userAnswers[questionNumber];
		const correctAnswer = correctAnswers[questionNumber];
		const row = document.createElement("tr");
		row.className = "bg-gray-900";

		const questionCell = document.createElement("td");
		questionCell.className = "border px-4 py-2";
		questionCell.innerText = questionNumber;

		const answerCell = document.createElement("td");
		answerCell.className = "border px-4 py-2 flex items-center";
		answerCell.innerHTML = `<p>Tu respuesta: ${userAnswer} `; /* - Correcta: ${correctAnswer}</p> */

		row.appendChild(questionCell);
		row.appendChild(answerCell);
		tbody.appendChild(row);
	});
}

window.onload = () => {
	loadUserName();
	loadResults();
};
