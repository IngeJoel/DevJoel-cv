document.addEventListener("DOMContentLoaded", function() {
    // Mensaje de bienvenida dinámico
    const mensajeBienvenida = document.createElement("div");
    mensajeBienvenida.innerText = "🚀 Bienvenido a mi CV interactivo 🚀";
    mensajeBienvenida.style.position = "fixed";
    mensajeBienvenida.style.top = "20px";
    mensajeBienvenida.style.left = "50%";
    mensajeBienvenida.style.transform = "translateX(-50%)";
    mensajeBienvenida.style.background = "#007bff";
    mensajeBienvenida.style.color = "white";
    mensajeBienvenida.style.padding = "10px 20px";
    mensajeBienvenida.style.borderRadius = "5px";
    mensajeBienvenida.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    mensajeBienvenida.style.zIndex = "1000";
    document.body.appendChild(mensajeBienvenida);
    
    setTimeout(() => {
        mensajeBienvenida.style.opacity = "0";
        mensajeBienvenida.style.transition = "opacity 1s";
        setTimeout(() => mensajeBienvenida.remove(), 1000);
    }, 3000);

    // Cambiar color del header al hacer clic con efecto suave
    document.querySelector("header").addEventListener("click", function() {
        this.style.backgroundColor = this.style.backgroundColor === "rgb(0, 123, 255)" ? "#ff5722" : "#007bff";
        this.style.transition = "background-color 0.5s ease-in-out";
    });

    // Efecto de resaltar al pasar sobre las secciones con animación
    document.querySelectorAll("section").forEach(section => {
        section.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.02)";
            this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
            this.style.transition = "all 0.3s ease-in-out";
        });
        section.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    // Botón flotante para cambiar tema oscuro/claro
    const botonTema = document.createElement("button");
    botonTema.innerText = "🌙 Modo Oscuro";
    botonTema.style.position = "fixed";
    botonTema.style.bottom = "20px";
    botonTema.style.right = "20px";
    botonTema.style.background = "#007bff";
    botonTema.style.color = "white";
    botonTema.style.border = "none";
    botonTema.style.padding = "10px 15px";
    botonTema.style.borderRadius = "5px";
    botonTema.style.cursor = "pointer";
    botonTema.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(botonTema);

    let modoOscuro = false;
    botonTema.addEventListener("click", function() {
        modoOscuro = !modoOscuro;
        document.body.style.backgroundColor = modoOscuro ? "#222" : "#f4f4f4";
        document.body.style.color = modoOscuro ? "#fff" : "#333";
        botonTema.innerText = modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    });

    // Mensaje en consola con detalles del CV
    console.log("%cCurrículum desarrollado por [Bryan Dev]", "color: #007bff; font-size: 16px; font-weight: bold;");
});
