// TIPOS DE FUNCIONES Y CALLBACKS
// Clase 4 - Unidad 2 (JavaScript)
// Nota: los nombres de personas usados en los ejemplos son genéricos,
// no corresponden a compañeros reales de la cursada.

// ============================================================
// TIPOS DE FUNCIONES SEGÚN PARÁMETROS Y RETORNO
// ============================================================

// Recibe parámetros - No retorna valor
function separador() {
  console.log("------------------------------------------------------------");
}

function saludar(nombre) {
  console.log("Bienvenido a JavaScript: " + nombre);
}

// Recibe parámetros - Retorna valor
function saludarConRetorno(nombre) {
  return "Bienvenido a JavaScript: " + nombre;
}

// No recibe parámetros - No retorna valor
function saludarAClase() {
  console.log("Bienvenido a la mejor clase después de Frontend");
}

// No recibe parámetros - Retorna valor
function saludarAClaseApurada() {
  return "Están apurados, pero cuando aceleremos no les va a gustar tanto :O";
}

// --- Ejecución ---

saludar("Juan");

let retornoSaludar = saludarConRetorno("Ana");
console.log(retornoSaludar);

saludarAClase("un valor");
// El argumento "un valor" se pasa igual, pero se descarta: la función
// no declaró ningún parámetro para recibirlo. No genera error.

console.log(saludarAClaseApurada()); // ejecuta la función y muestra lo que retorna
console.log(saludarAClaseApurada);   // muestra la definición de la función, no la ejecuta

// ============================================================
// FORMAS DE DEFINIR UNA FUNCIÓN: DECLARACIÓN, EXPRESIÓN, ANÓNIMA, ARROW
// ============================================================

// --- DECLARACIÓN ---
function saludarAlumno(nombre) {
  console.log("Bienvenido a JavaScript: " + nombre);
}
saludarAlumno("Bruno");
separador();

// --- EXPRESIÓN ---
// Se guarda una función (con nombre interno) dentro de una constante.
const bienvenida = function darBienvenida(nombre) {
  // console.log("Bienvenido " + nombre + " a la mejor materia después de Front, Backend"); // Concatenación clásica
  console.log(`Bienvenido ${nombre} a la mejor materia después de Front, Backend`); // Template literal
};

// darBienvenida("Diego"); // ❌ Error: el nombre interno "darBienvenida" no es una referencia
//                          // utilizable desde afuera, solo existe la referencia "bienvenida".
bienvenida("Diego");
bienvenida("Elena");
bienvenida("Franco");
bienvenida("Ana");
separador();
separador();

// --- ANÓNIMA o LAMBDA ---
// Igual que la expresión anterior, pero sin nombre interno (porque ese
// nombre nunca se puede usar para invocar, no tiene sentido ponerlo).
const bienvenidaAMateria = function (nombre, apellido) {
  // console.log("Bienvenido " + nombre + " " + apellido + " a la mejor materia después de Front, Backend"); // Concatenación clásica
  console.log(`Bienvenido ${nombre} ${apellido} a la mejor materia después de Front, Backend`);
};
bienvenidaAMateria("Ana", "Gómez");
separador();

// --- ARROW ---
const suma = (num1, num2) => {
  return num1 + num2;
};
separador();

console.log("saludarAlumno es:", typeof saludarAlumno); // 'function'
separador();
console.log("suma es:", typeof suma); // 'function' (aunque sea una arrow, sigue siendo una función)

let resultadoSuma = suma(2, 3);
console.log(`El resultado de la suma es: ${resultadoSuma}`); // 5

let nuevoResultado = 2 - 3;
console.log("El resultado de la resta es:" + nuevoResultado); // -1

separador();

// ============================================================
// undefined vs null, y == vs ===
// ============================================================

let miNumero;
console.log(miNumero);                          // undefined
console.log(typeof miNumero);                    // 'undefined'
console.log(typeof miNumero === "undefined");    // true

let miOtroNumero = null;
console.log(miOtroNumero);                       // null
console.log(typeof miOtroNumero);                // 'object' (rareza histórica de JS)

console.log(miOtroNumero == miNumero);           // true  → mismo contenido (vacío), sin importar el tipo
console.log(miOtroNumero === miNumero);          // false → mismo contenido, pero distinto tipo ('object' vs 'undefined')

separador();

// ============================================================
// CALLBACKS
// ============================================================

// calculadora recibe dos números y una función (callback) que decide
// qué operación hacer con ellos.
const calculadora = (num1, num2, callback) => {
  return callback(num1, num2);
};

// OJO con la diferencia entre estas dos formas de pasar argumentos:
let resultadoCalculadora = calculadora(2, suma(2, 3), suma);
console.log(resultadoCalculadora); // 7
// Acá "suma(2,3)" SÍ tiene paréntesis: se ejecuta inmediatamente y se
// pasa su resultado (5) como segundo argumento normal (un número).
// El tercer argumento, "suma" SIN paréntesis, es el que se pasa como
// callback — recién se ejecuta adentro de calculadora.
// Entonces: calculadora(2, 5, suma) → suma(2, 5) → 7

separador();

// El callback también se puede escribir directamente en el lugar del
// argumento, sin nombrarlo ni guardarlo antes en una constante:
console.log(
  calculadora(10, 5, (num1, num2) => {
    return num1 - num2;
  })
); // 5

const resta = (num1, num2) => {
  return num1 - num2;
};
console.log(calculadora(10, 5, resta)); // 5 (mismo resultado, pasando la función ya declarada)

separador();

console.log(
  calculadora(10, 5, (num1, num2) => {
    return num1 * num2;
  })
); // 50
