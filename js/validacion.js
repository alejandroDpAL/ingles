// validacion.js
function storeData() {
    const fullName = document.getElementById("full_name").value;
    const trainingProgram = document.getElementById("training_program").value;
    const trainingCenter = document.getElementById("training_center").value;
    const email = document.getElementById("email").value;
    const cellphone = document.getElementById("cellphone").value;
    const testDate = document.getElementById("test_date").value;

    if (
        !fullName ||
        !trainingProgram ||
        !trainingCenter ||
        !email ||
        !cellphone ||
        !testDate
    ) {
        alert("Por favor llenar los campos requeridos");
    } else {
        const userData = {
            fullName,
            trainingProgram,
            trainingCenter,
            email,
            cellphone,
            testDate,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        
        // Reinicia el temporizador antes de redirigir
        localStorage.removeItem("contadorState");

        window.location.href = "src/preguntas.html";
    }
}
