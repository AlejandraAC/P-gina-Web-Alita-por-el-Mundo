document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejarlo manualmente

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Inicio de sesión exitoso");
        // Aquí podrías redirigir a otra página o realizar alguna otra acción
    }
});
