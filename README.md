Oracle Next Education
Programador: Jose Luis Lara
Proyecto: Amigo Secreto

Descripción del proyecto
Este proyecto consiste en un sistema para realizar un sorteo de nombres, simulando el juego del Amigo Secreto.

El usuario ingresa los nombres en un campo de texto con id="amigo".
En este proyecto, la cantidad máxima de nombres está limitada a 10.

Funcionamiento
1. Agregar nombres
Cada vez que se presiona el botón button-add, que está vinculado a la función agregarAmigo(), se realiza lo siguiente:

El nombre ingresado se agrega al arreglo listaDeAmigos[].

Automáticamente se muestra en la pantalla dentro de un <ul> con id="listaAmigos".

Validaciones dentro de agregarAmigo():
Campo vacío: si el campo con id="amigo" (ligado a la variable nombreAmigo) está vacío, se mostrará un mensaje de error mediante alert.

Nombre duplicado: si el nombre ya existe en la lista, se mostrará un mensaje de error mediante alert.

Límite máximo: si ya hay 10 nombres, se mostrará un mensaje indicando que todos los espacios para el sorteo están ocupados.

2. Realizar el sorteo
Cuando se presiona el botón button-draw, que está vinculado a la función sortearAmigo(), ocurre lo siguiente:

Se verifica que listaDeAmigos[] no esté vacío.

Si está vacío, se muestra un alert avisando que no hay nombres para sortear.

Si hay nombres:

Se genera un número aleatorio mediante Math.random() (entre 0 y 0.999).

Este número se multiplica por la cantidad de elementos del arreglo.

Se utiliza Math.floor() para redondear hacia abajo y obtener un número entero que sirva como índice.

Se obtiene el nombre correspondiente al índice generado en listaDeAmigos[] y se almacena en la variable nombreGanador.

3. Mostrar el resultado
Para mostrar el ganador:

Se llama a la función asignarTexto(), que utiliza el DOM para buscar el <p> en el HTML.

Esta función escribe el mensaje:
"El ganador es <nombreGanador>"
directamente en el párrafo.

Notas técnicas
DOM: El modelo de objetos del documento se utiliza para buscar elementos (querySelector) y modificar su contenido (textContent).

Funciones clave:

agregarAmigo() → valida y agrega nombres a la lista.

listadoEnPantalla() → actualiza visualmente la lista en el <ul>.

sortearAmigo() → elige un ganador aleatorio.

asignarTexto() → escribe el resultado en el HTML.