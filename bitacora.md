# Bitácora de clases — Backend

Registro breve de cada clase, en el orden real en que se dieron. Sin fechas de calendario (quedan en el historial de commits). Nivel de detalle técnico: ver `conceptos.md`.

- **Clase 01 — Git Init:** Presentación de la materia y del programa. Instalación de programas (VS Code, Node.js, Git). Introducción a los Sistemas de Control de Versiones: qué son, tipos (locales, centralizados, distribuidos) y ejemplos. Introducción a Git y sus conceptos clave (repositorio, ramas, HEAD, origin), áreas de trabajo, estados de los archivos y comandos básicos. Introducción a GitFlow y a `.gitignore`.

- **Clase 02:** Repaso de la clase anterior (working directory, staging, repositorio local/remoto, fetch vs. pull, .gitignore, GitFlow). Generación y registro de claves SSH en GitHub. Demostración práctica en consola: `git init`, creación de ramas (`main`, `develop`, `uat`), diferencia entre merge, squash y rebase. Creación de un repositorio remoto en GitHub, clonado por SSH, gestión de colaboradores. Manejo de archivos: `git add`, `git status`, `git restore`, `git stash`. Configuración de reglas de protección de ramas y Pull Requests en GitHub. Introducción a la extensión Git Graph de VS Code.

  **Logística y evaluación de la cursada** *(no es contenido técnico del temario, es dinámica de la materia)*
  - **Proyecto integrador (grupal):** cada integrante tiene que generar sus propias ramas, commits y subidas — no vale que una sola persona centralice todo el trabajo del grupo. El profesor va a revisar el historial de commits de cada rama para evaluar la participación individual dentro del trabajo grupal, así que la prolijidad en los commits (mensajes claros, no subir archivos innecesarios) también cuenta para la evaluación.
  - **Entregas:** los repositorios de entrega tienen que estar en público (no hace falta agregar al profesor como colaborador) y se comparte el link — así se puede acceder y revisar sin gestionar permisos.
  - **Consultas entre clases:** el grupo de Telegram de la cursada es el canal recomendado para dudas fuera del horario de clase.

- **Clase 03:** Resolución de dudas de Git (diferencias entre `git stash pop/apply/drop/clear`, resolución de conflictos de merge en consola y VS Code, `git merge --abort`, creación de Pull Requests con reviewer y etiquetas). Cierre de Unidad 1 e inicio de **Unidad 2 (JavaScript):** tipos de lenguajes de programación, scripting, EcmaScript y motores de JS, TypeScript, variables (`var`/`let`/`const`), tipado dinámico, tipos de datos, condicionales, objetos y tipos de funciones (declaración, expresión, anónima, arrow, parámetro vs. argumento).

  **Logística de la cursada:** el viernes hay clase sincrónica compartida con la comisión de Frontend, como repaso de JavaScript para quienes cursan ambas materias.

- **Clase 04:** Repaso en profundidad de tipos de función (declaración, expresión, anónima/lambda, arrow) con ejemplos en vivo. Template literals (backticks). Operadores de comparación `==` vs `===`, y la diferencia entre `null` y `undefined` (incluyendo la rareza de `typeof null`). Introducción práctica a callbacks con una función calculadora que recibe distintas operaciones como argumento.