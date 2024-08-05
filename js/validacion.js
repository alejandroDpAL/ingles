function storeData() {
	const fullNameInput = document.getElementById("full_name");
	const fullName = fullNameInput.value;
	const trainingProgram = document.getElementById("training_program").value;
	const trainingCenter = document.getElementById("training_center").value;
	const email = document.getElementById("email").value;
	const cellphone = document.getElementById("cellphone").value;
	const testDate = document.getElementById("test_date").value;

	if (!fullName || !trainingProgram || !trainingCenter || !email || !cellphone || !testDate) {
		alert("Por favor llenar los campos requeridos");
		return;
	}

	// Guardar el nombre en el local storage
	let names = JSON.parse(localStorage.getItem("names")) || [];
	names.push(fullName);
	localStorage.setItem("names", JSON.stringify(names));
	localStorage.setItem("lastUpdated", new Date().getTime());

	// Guardar los demás datos en el local storage
	const userData = {
		fullName,
		trainingProgram,
		trainingCenter,
		email,
		cellphone,
		testDate
	};
	localStorage.setItem("userData", JSON.stringify(userData));

	// Reinicia el temporizador antes de redirigir
	localStorage.removeItem("contadorState");

	window.location.href = "./src/preguntas.html";
}

// Función para resetear nombres si han pasado dos horas
function resetNamesIfNeeded() {
	const lastUpdated = localStorage.getItem("lastUpdated");
	const now = new Date().getTime();
	const twoHours = 2 * 60 * 60 * 1000;

	if (lastUpdated && now - lastUpdated > twoHours) {
		localStorage.removeItem("names");
		localStorage.removeItem("lastUpdated");
	}
}

// Llamar a la función de reseteo al cargar la página
window.onload = function() {
	resetNamesIfNeeded();
};
