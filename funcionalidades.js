/*Variables manipuladas*/
let botonIdioma = document.getElementById("botonIdioma")
let idiomaSeleccionado = document.getElementById("idiomaSeleccionado")
let acercade = document.getElementById("acercade")
let habilidades = document.getElementById("habilidades")
let proyectos = document.getElementById("proyectos")
let presentacion = document.getElementById("presentacion")
let descripcion1 = document.getElementById("descripcion1")
let conocer = document.getElementById("conocer")
let descripcion2 = document.getElementById("descripcion2")
let misHabilidades = document.getElementById("misHabilidades")
let proDesarrollados = document.getElementById("proDesarrollados")
let proyecto1 = document.getElementById("proyecto1")
let proyecto2 = document.getElementById("proyecto2")
let proyecto3 = document.getElementById("proyecto3")
let proyecto4 = document.getElementById("proyecto4")
let proyecto5 = document.getElementById("proyecto5")
let proyecto6 = document.getElementById("proyecto6")
let descripcion3 = document.getElementById("descripcion3")
let derechosAutor = document.getElementById("derechosAutor")
let iconosGithub = document.getElementsByClassName("bi bi-github")
let iconoEnlace = document.getElementsByClassName("bi bi-globe")


/*Cambio de idioma*/

botonIdioma.addEventListener("change", function () {
    if (botonIdioma.checked) {
        idiomaSeleccionado.textContent = "English"
        acercade.textContent = "About Me"
        habilidades.textContent = "Skills"
        proyectos.textContent = "Projects"
        presentacion.textContent = "Hello, I am Rheyjach Arrieta"
        descripcion1.textContent = "Industrial Engineer oriented towards IT, programming, and data analysis"
        conocer.textContent = "Get to know me"
        descripcion2.textContent = "I am passionate about developing technological solutions and data analysis. I consider myself curious, self-taught, and always eager to learn when faced with new challenges. My focus is on creating both desktop and web applications, always aiming to optimize processes and enhance the user experience. Additionally, I am motivated by data analysis to make informed decisions and create value in innovative projects. I value teamwork and continuous professional growth"
        misHabilidades.textContent = "My Skills"
        proDesarrollados.textContent = "Developed Projects"
        proyecto1.textContent = "EarthVision is a web app that allows users to explore NASA satellite images of cities, using APIs to show the Earth from space"
        proyecto2.textContent = "ClimaExpress is a web app that allows users to obtain updated weather information for any city through APIs"
        proyecto3.textContent = "FinanzApp is a desktop application that allows users to record income and expenses. Additionally, it provides visual analysis to manage personal finances"
        proyecto4.textContent = "InventarioPro is a desktop application that allows users to add and remove products from inventory. It also tracks the balance of registered products"
        proyecto5.textContent = "LockSafe is a desktop application that allows users to generate and securely store passwords, making it easy to recover them based on the corresponding application"
        proyecto6.textContent = "A data analysis project focused on identifying trends and key points in a retail chain, using analysis tools, data visualization, and statistical methods"
        descripcion3.textContent = "I learn and create every day"
        derechosAutor.textContent = "© Created by Rheyjach Arrieta - 2025"

        for (let i = 0; i < iconosGithub.length; i++) {
            iconosGithub[i].title = 'Repository';
        }
        for (let i = 0; i < iconoEnlace.length; i++) {
            iconoEnlace[i].title = 'Link';
        }
    }
    else {
        idiomaSeleccionado.textContent = "Español"
        acercade.textContent = "Sobre mi"
        habilidades.textContent = "Habilidades"
        proyectos.textContent = "Proyectos"
        presentacion.textContent = "Hola, soy Rheyjach Arrieta"
        descripcion1.textContent = "Ingeniero Industrial orientado al mundo IT, programación y análisis de datos"
        conocer.textContent = "Conóceme"
        descripcion2.textContent = "Soy una persona apasionada por el desarrollo de soluciones tecnológicas y el análisis de datos. Me considero curioso, autodidacta y siempre dispuesto a aprender frente a nuevos desafíos. Mi enfoque se centra en la creación de aplicaciones tanto para escritorio como web, buscando siempre optimizar procesos y mejorar la experiencia del usuario. Además, me motiva el análisis de datos para tomar decisiones informadas y generar valor en proyectos innovadores. Valoro la colaboración en equipo y el constante crecimiento profesional"
        misHabilidades.textContent = "Mis habilidades"
        proDesarrollados.textContent = "Proyectos desarrollados"
        proyecto1.textContent = "EarthVision es una app web que permite explorar imágenes satelitales de la NASA por ciudades, usando APIs para mostrar la Tierra desde el espacio"
        proyecto2.textContent = "ClimaExpress es una app web que permite a los usuarios obtener información actualizada sobre el clima de cualquier ciudad mediante APIs"
        proyecto3.textContent = "FinanzApp es una aplicación de escritorio que permite registrar ingresos y egresos. Además, proporciona un análisis visual para gestionar las finanzas personales"
        proyecto4.textContent = "InventarioPro es una aplicación de escritorio que permite ingresar y retirar productos del inventario. También realiza un seguimiento del balance de los productos registrados"
        proyecto5.textContent = "LockSafe es una aplicación de escritorio que permite generar y almacenar contraseñas de forma segura, facilitando su recuperación según la aplicación correspondiente"
        proyecto6.textContent = "Proyecto de análisis de datos enfocado en identificar tendencias y puntos clave en una cadena de tiendas, utilizando herramientas de análisis, visualización de datos y métodos estadísticos"
        descripcion3.textContent = "Aprendo y creo cada día"
        derechosAutor.textContent = "© Creado por Rheyjach Arrieta - 2025"
        
        for (let i = 0; i < iconosGithub.length; i++) {
            iconosGithub[i].title = 'Repositorio';
        }
        for (let i = 0; i < iconoEnlace.length; i++) {
            iconoEnlace[i].title = 'Enlace';
        }
    }
})




