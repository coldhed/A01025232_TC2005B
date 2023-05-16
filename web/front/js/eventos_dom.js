
// Agregar un evento "mousemove" al documento
document.addEventListener("mousemove", actualizarPosicionMouse);

// Función para actualizar la posición del mouse
function actualizarPosicionMouse(evento) {
    // Obtener las coordenadas x e y del mouse en el documento
    const posicionX = evento.pageX;
    const posicionY = evento.pageY;

    // Obtener referencia al elemento con id "mousePosition"
    const mousePositionElement = document.getElementById("mousePosition");

    // Actualizar el contenido del elemento con la posición del mouse
    mousePositionElement.textContent = `Posición del mouse: X=${posicionX}, Y=${posicionY}`;
}



// Obtener referencia al formulario y al botón de envío
const form = document.getElementById("form1");
const submitButton = document.getElementById("form1-submit");

// Agregar un evento "click" al botón de envío
submitButton.addEventListener("click", obtenerNombreCompleto);

// Función para obtener el nombre completo y agregarlo después del botón
function obtenerNombreCompleto(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de las cajas de texto
  const firstName = document.getElementById("form-fname").value;
  const lastName = document.getElementById("form-lname").value;

  // Crear un nuevo elemento para mostrar el nombre completo
  const fullName = document.getElementById("form1-fullName");
  fullName.textContent = "Nombre completo: " + firstName + " " + lastName;
}



// Obtener referencia a la tabla y a los botones
const table = document.getElementById("sampleTable");
const insertRowButton = document.getElementById("btn-insert-r");
const insertColumnButton = document.getElementById("btn-insert-c");

// Contadores de filas y columnas
let rowCount = 2; // Inicialmente hay 2 filas en la tabla (excluyendo la fila de encabezado)
let columnCount = 2; // Inicialmente hay 2 columnas en la tabla

// Agregar un evento "click" al botón para insertar una fila
insertRowButton.addEventListener("click", insertarFila);

// Función para insertar una nueva fila en la tabla
function insertarFila() {
  // Crear un nuevo elemento "tr"
  const newRow = document.createElement("tr");

  // Recorrer las columnas y crear las celdas para la nueva fila
  for (let i = 0; i < columnCount; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Row ${rowCount + 1} column ${i + 1}`;
    newRow.appendChild(newCell);
  }

  // Incrementar el contador de filas
  rowCount++;

  // Agregar la nueva fila al final de la tabla
  table.appendChild(newRow);
}

// Agregar un evento "click" al botón para insertar una columna
insertColumnButton.addEventListener("click", insertarColumna);

// Función para insertar una nueva columna en la tabla
function insertarColumna() {
  // Obtener todas las filas existentes en la tabla
  const rows = table.getElementsByTagName("tr");

  // Recorrer las filas y agregar una nueva celda en cada una
  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Row ${i + 1} column ${columnCount + 1}`;

    // Insertar la nueva celda al final de cada fila
    rows[i].appendChild(newCell);
  }

  // Incrementar el contador de columnas
  columnCount++;
}



// Obtener referencia a los elementos del formulario y a la tabla
const rowIndexInput = document.getElementById("rowIndex");
const colIndexInput = document.getElementById("colIndex");
const newValueInput = document.getElementById("newValue");
const changeButton = document.getElementById("btn-change");
const table2 = document.getElementById("myTable");

// Agregar un evento "click" al botón de cambio
changeButton.addEventListener("click", cambiarContenidoCelda);

// Función para cambiar el contenido de una celda de la tabla
function cambiarContenidoCelda() {
  // Obtener los valores proporcionados por el usuario
  const rowIndex = parseInt(rowIndexInput.value);
  const colIndex = parseInt(colIndexInput.value);
  const newValue = newValueInput.value;

  // Validar que los índices sean numéricos y estén dentro de los límites de la tabla
  if (isNaN(rowIndex) || isNaN(colIndex) || rowIndex < 1 || colIndex < 1) {
    alert("Por favor, ingresa valores numéricos válidos para la posición de fila y columna.");
    return;
  }

  const rows = table2.rows;

  // Verificar si los índices están dentro del rango de filas y columnas existentes
  if (rowIndex > rows.length || colIndex > rows[0].cells.length) {
    alert("La posición de fila y columna especificada está fuera de los límites de la tabla.");
    return;
  }

  // Obtener la celda correspondiente a los índices proporcionados
  const cell = rows[rowIndex - 1].cells[colIndex - 1];

  // Cambiar el contenido de la celda con el nuevo valor proporcionado
  cell.textContent = newValue;
}





// Obtener referencia a los elementos del formulario y al select
const colorSelect = document.getElementById("colorSelect");
const addColorButton = document.getElementById("btn-add-color");
const removeColorButton = document.getElementById("btn-rmv-color");

// Agregar un evento "click" al botón de agregar color
addColorButton.addEventListener("click", agregarColor);

// Función para agregar un color a la lista de opciones
function agregarColor() {
  const selectedColors = obtenerColoresSeleccionados();
  const availableColors = obtenerColoresDisponibles(selectedColors);

  // Verificar si hay colores disponibles para agregar
  if (availableColors.length === 0) {
    alert("No hay más colores disponibles para agregar.");
    return;
  }

  // Obtener un color aleatorio de los colores disponibles
  const randomColor = obtenerColorAleatorio(availableColors);

  // Crear un nuevo elemento "option"
  const newColorOption = document.createElement("option");
  newColorOption.textContent = randomColor;

  // Agregar el nuevo elemento al select
  colorSelect.appendChild(newColorOption);
}

// Agregar un evento "click" al botón de remover color
removeColorButton.addEventListener("click", removerColor);

// Función para remover el color seleccionado de la lista de opciones
function removerColor() {
  // Obtener el índice del color seleccionado
  const selectedIndex = colorSelect.selectedIndex;

  // Verificar si se seleccionó un color
  if (selectedIndex !== -1) {
    // Remover el elemento seleccionado del select
    colorSelect.remove(selectedIndex);
  }
}

// Función para obtener los colores seleccionados en el select
function obtenerColoresSeleccionados() {
  const selectedColors = [];
  const options = colorSelect.options;

  for (let i = 0; i < options.length; i++) {
    selectedColors.push(options[i].textContent);
  }

  return selectedColors;
}

// Función para obtener los colores disponibles para agregar
function obtenerColoresDisponibles(selectedColors) {
  const allColors = ["Red", "Green", "White", "Black", "Yellow", "Orange", "Pink"];
  const availableColors = [];

  for (let i = 0; i < allColors.length; i++) {
    const color = allColors[i];

    if (!selectedColors.includes(color)) {
      availableColors.push(color);
    }
  }

  return availableColors;
}

// Función para obtener un color aleatorio de un array de colores
function obtenerColorAleatorio(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}





// Obtener referencia a la imagen
const imagenGato = document.getElementById("imagenGato");

// Agregar un evento "mouseenter" a la imagen
imagenGato.addEventListener("mouseenter", generarNuevaImagen);

// Función para generar una nueva imagen con tamaño aleatorio
function generarNuevaImagen() {
  // Generar números aleatorios para el width y height
  const width = generarNumeroAleatorio(300, 600);
  const height = generarNumeroAleatorio(300, 600);

  // Crear el URL de la nueva imagen con los tamaños aleatorios
  const nuevaImagenSrc = `http://placekitten.com/${width}/${height}`;

  // Reemplazar el src de la imagen con el nuevo URL
  imagenGato.src = nuevaImagenSrc;
}

// Función para generar un número aleatorio en un rango dado
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
