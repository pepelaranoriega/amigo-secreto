Challenge Amigo Secreto

- Tecnologías utilizadas
    HTML5
    CSS3
    JavaScript

- Funcionalidades
    Agregar nombres:
    Se ingresan en un campo de texto.
    Si está vacío, muestra una alerta.
    Si el nombre ya existe, no se añade.

    Visualización dinámica:
    Los nombres se muestran en una lista en pantalla.

    Límite de participantes:
    Máximo de 10 nombres en la lista.

    Sorteo aleatorio:
    El sistema elige un ganador al azar.
    Muestra el nombre en un parrafo del HTML.

- Descripción:
Este proyecto es una aplicación sencilla en JavaScript, HTML y CSS que permite:
    Agregar nombres de amigos a una lista.
    Mostrar en pantalla todos los amigos agregados.
    Seleccionar al azar un amigo como ganador del sorteo.

Es ideal para practicar manipulación del DOM, manejo de arrays y lógica básica de programación en JavaScript.

- Funcionalidades:
    Agregar amigos
    El usuario escribe un nombre en el campo de texto.
    Si el campo está vacío, se muestra una alerta solicitando un nombre válido.
    Se permite un máximo de 10 amigos en la lista.
    No se permiten nombres duplicados.

Después de agregar un nombre, el campo de entrada se limpia automáticamente.

- Visualizar lista
    Los nombres ingresados se muestran en un listado <ul> dentro de la página.
    El listado se actualiza cada vez que se agrega un nombre.

- Realizar sorteo
    Al presionar el botón "Sortear Amigo", el sistema selecciona un nombre al azar de la lista.
    Muestra el nombre ganador en un <p> del HTML.
    Si la lista está vacía, se muestra un mensaje indicando que no hay nombres para sortear.


📂 Estructura del proyecto
pgsql
Copiar
Editar
📦 amigo-secreto
 ┣ 📂 .idea
 ┃ ┣ amigo-secreto.iml
 ┃ ┣ misc
 ┃ ┣ modules
 ┃ ┣ vcs
 ┃ ┗ workspace
 ┣ 📂 assets
 ┃ ┣ amigo-secreto.png
 ┃ ┗ play_circle_outline.png
 ┣ 📜 app.js
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┗ 📜 README.md

Autor
José Luis Lara Noriega
Proyecto creado como práctica para reforzar conceptos básicos de JavaScript y manipulación del DOM.