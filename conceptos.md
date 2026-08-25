# Backend — Biblioteca de Conceptos

Apuntes de referencia de la materia **Desarrollo de Sistemas Web - BackEnd**, IFTS N°11. Profesor: Zammataro Gustavo.

> Este archivo se organiza por concepto, no por orden cronológico de clases. El orden real en que se dio cada tema queda registrado en `bitacora.md` y en el historial de commits.

## Índice

- [Backend — Biblioteca de Conceptos](#backend--biblioteca-de-conceptos)
  - [Índice](#índice)
  - [Unidad 1 — Repositorios: Administración de proyectos y código](#unidad-1--repositorios-administración-de-proyectos-y-código)
    - [1. Sistemas de Control de Versiones (VCS)](#1-sistemas-de-control-de-versiones-vcs)
      - [1.1 ¿Qué es un VCS?](#11-qué-es-un-vcs)
      - [1.2 Tipos de sistemas de control de versiones](#12-tipos-de-sistemas-de-control-de-versiones)
      - [1.3 Ejemplos de VCS y repositorios online](#13-ejemplos-de-vcs-y-repositorios-online)
    - [2. Git](#2-git)
      - [2.1 ¿Qué es Git?](#21-qué-es-git)
      - [2.2 Conceptos clave](#22-conceptos-clave)
      - [2.3 Áreas de trabajo y flujo local](#23-áreas-de-trabajo-y-flujo-local)
      - [2.4 Estados de los archivos](#24-estados-de-los-archivos)
      - [2.5 Configuración inicial de Git](#25-configuración-inicial-de-git)
      - [2.6 Comandos de consola / sistema operativo (no son de Git)](#26-comandos-de-consola--sistema-operativo-no-son-de-git)
    - [3. Comandos de Git](#3-comandos-de-git)
      - [3.1 Tabla general de comandos](#31-tabla-general-de-comandos)
      - [3.2 git init / git clone](#32-git-init--git-clone)
      - [3.3 git add / git status](#33-git-add--git-status)
      - [3.4 git commit / git push / git pull / git fetch](#34-git-commit--git-push--git-pull--git-fetch)
      - [3.5 git restore](#35-git-restore)
      - [3.6 git stash](#36-git-stash)
      - [3.7 git branch, git checkout y git switch](#37-git-branch-git-checkout-y-git-switch)
      - [3.8 git merge, squash y rebase](#38-git-merge-squash-y-rebase)
      - [3.9 Resolución de conflictos de merge](#39-resolución-de-conflictos-de-merge)
    - [4. Flujo de trabajo completo (Git Workflow)](#4-flujo-de-trabajo-completo-git-workflow)
    - [5. .gitignore](#5-gitignore)
    - [6. GitFlow](#6-gitflow)
    - [7. Repositorios remotos y SSH](#7-repositorios-remotos-y-ssh)
      - [7.1 ¿Por qué SSH y no usuario/contraseña?](#71-por-qué-ssh-y-no-usuariocontraseña)
      - [7.2 Generar una clave SSH](#72-generar-una-clave-ssh)
      - [7.3 Cargar la clave pública en GitHub](#73-cargar-la-clave-pública-en-github)
      - [7.4 Clonar un repositorio con SSH y el error más común](#74-clonar-un-repositorio-con-ssh-y-el-error-más-común)
      - [7.5 Crear un repositorio remoto en GitHub](#75-crear-un-repositorio-remoto-en-github)
      - [7.6 Colaboradores](#76-colaboradores)
    - [8. Seguridad y reglas de protección de ramas (GitHub)](#8-seguridad-y-reglas-de-protección-de-ramas-github)
      - [8.1 Pull Request (PR / MR)](#81-pull-request-pr--mr)
      - [8.2 Branch protection rules](#82-branch-protection-rules)
      - [8.3 Eliminación automática de ramas al mergear](#83-eliminación-automática-de-ramas-al-mergear)
    - [9. Herramientas complementarias](#9-herramientas-complementarias)
      - [9.1 Git Graph (extensión de VS Code)](#91-git-graph-extensión-de-vs-code)
    - [10. Programas utilizados en la materia](#10-programas-utilizados-en-la-materia)
  - [Ejemplo práctico — Sesión de consola: SSH, ramas y stash](#ejemplo-práctico--sesión-de-consola-ssh-ramas-y-stash)
  - [Unidad 2 — JavaScript](#unidad-2--javascript)
    - [11. Tipos de lenguajes de programación](#11-tipos-de-lenguajes-de-programación)
    - [12. Scripts y lenguajes de scripting](#12-scripts-y-lenguajes-de-scripting)
    - [13. EcmaScript y motores de JavaScript](#13-ecmascript-y-motores-de-javascript)
    - [14. ¿Y TypeScript?](#14-y-typescript)
    - [15. Sintaxis básica de uso frecuente](#15-sintaxis-básica-de-uso-frecuente)
    - [16. Variables en JavaScript](#16-variables-en-javascript)
    - [17. Tipos de datos](#17-tipos-de-datos)
    - [18. Condicionales](#18-condicionales)
    - [19. Objetos](#19-objetos)
    - [20. Funciones](#20-funciones)
      - [20.1 Formas de definir una función](#201-formas-de-definir-una-función)
      - [20.2 Parámetro vs. argumento](#202-parámetro-vs-argumento)
      - [20.3 Funciones como objetos y callbacks (introducción)](#203-funciones-como-objetos-y-callbacks-introducción)
  - [Ejemplo práctico — Tipos de funciones en JavaScript](#ejemplo-práctico--tipos-de-funciones-en-javascript)

---

## Unidad 1 — Repositorios: Administración de proyectos y código

### 1. Sistemas de Control de Versiones (VCS)

#### 1.1 ¿Qué es un VCS?

Un sistema de control de versiones (**VCS**, *Version Control System*) es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que se puedan recuperar versiones específicas más adelante.

En otras palabras: permite viajar a versiones pasadas de un archivo y volver al presente — una especie de "máquina del tiempo" para el código.

**El problema que resuelve:** antes de usar un VCS, es común terminar con archivos como este por no tener una forma ordenada de versionar el trabajo:

```
Trabajo_Final.docx
Trabajo_Final_1.docx
Trabajo_Final_2.docx
Trabajo_Final_3.docx
Trabajo_Final_Final.docx
Trabajo_Final_Final_EsteEsElQueVa.docx
Trabajo_Final_Final_ParaEntregar.docx
Trabajo_Final_Final_ParaEntregar.pdf
```

Un VCS reemplaza este método manual por un historial real de versiones, con la posibilidad de volver a cualquier punto anterior sin duplicar archivos.

#### 1.2 Tipos de sistemas de control de versiones

**Sistemas locales:** el historial de versiones se guarda únicamente en la computadora local. No hay forma de colaborar con otras personas sin copiar archivos manualmente.

```
Local Computer
┌───────────────────────────────┐
│  File ── Version Database     │
│           ├── Version 1       │
│           ├── Version 2       │
│           └── Version 3       │
└───────────────────────────────┘
```

**Sistemas centralizados:** existe un único servidor central que guarda todo el historial de versiones. Cada persona tiene una copia de trabajo, pero el historial "real" vive solo en el servidor. Si el servidor cae, se pierde el acceso al historial.

```
Computer A                     Central VCS Server
┌──────────┐                  ┌───────────────────┐
│  File    │◄─────────────────│  Version Database  │
└──────────┘                  │   ├── Version 1     │
                               │   ├── Version 2     │
Computer B                     │   └── Version 3     │
┌──────────┐                  │                     │
│  File    │◄─────────────────┘                     │
└──────────┘                                        │
                                                     │
                                └────────────────────┘
```

**Sistemas distribuidos (el modelo de Git):** cada persona que clona el repositorio tiene una copia completa del historial de versiones en su propia máquina, no solo del archivo. Esto permite trabajar sin conexión y sincronizar los cambios con un servidor remoto cuando se necesite.

```
                    Server Computer
                 ┌────────────────────┐
                 │  Version Database   │
                 │   V1 ─ V2 ─ V3       │
                 └─────────┬──────────┘
                     ▲             ▲
                     │             │
       Computer A    │             │   Computer B
   ┌─────────────────┴──┐    ┌─────┴─────────────┐
   │ File                │    │ File               │
   │ Version Database    │◄──►│ Version Database   │
   │  V1 ─ V2 ─ V3        │    │  V1 ─ V2 ─ V3       │
   └─────────────────────┘    └────────────────────┘
```

#### 1.3 Ejemplos de VCS y repositorios online

- **VCS distribuidos/centralizados:** Git, Subversion (SVN), Mercurial, CVS, TFS (Team Foundation Server).
- **Plataformas de repositorios online** (hosting de repos + colaboración): GitHub, GitLab, Bitbucket.

> Un detalle a tener claro: **Git** es el sistema de control de versiones en sí; **GitHub** (o GitLab, Bitbucket) es un servicio online que aloja repositorios Git y agrega funcionalidades de colaboración (Pull Requests, gestión de colaboradores, reglas de seguridad, etc.).

---

### 2. Git

#### 2.1 ¿Qué es Git?

Git es un sistema de control de versiones **distribuido**, creado por **Linus Torvalds** y lanzado en 2005.

Entre sus características principales:
- Sistema distribuido (cada clon tiene el historial completo).
- Confirmaciones de cambios (commits).
- Ramificaciones (branches) y fusiones (merges).
- Comparación con versiones anteriores.
- Seguridad e integridad de los archivos (cada commit se identifica con un hash único).

#### 2.2 Conceptos clave

**Repositorio:** conjunto de confirmaciones (commits), ramas y etiquetas que identifican esas confirmaciones. Es todo proyecto que está siendo rastreado por Git. Permite guardar versiones del código a las que se puede volver cuando se necesite.

**Ramas (branches):** son las diferentes bifurcaciones que se van creando dentro de un repositorio. La rama principal suele llamarse `main` (antes era más común `master`). Sobre las ramas se puede:
- Crear
- Fusionar (mergear)
- Subir al repositorio remoto
- Eliminar

**HEAD:** es la forma en que Git hace referencia a la instantánea (snapshot) actual — es decir, "dónde estoy parado" dentro del historial. El HEAD se actualiza para apuntar a la rama o el commit especificado. Cuando HEAD apunta directamente a un commit puntual en vez de a una rama, se dice que está en estado **"detached HEAD"**.

```
        HEAD
         │
         ▼
       master
         │
         ▼
C0 ── C1 ── C2 ── C3 ── C4
```
*HEAD apunta a la rama `master`, y `master` apunta al último commit (`C4`).*

**Origin:** es el nombre predeterminado que recibe el repositorio remoto principal contra el que se trabaja. Cuando se clona un repositorio por primera vez desde cualquier sistema remoto, el nombre que se le da a ese repositorio remoto es `origin`. Es solo un alias — se podría renombrar, pero por convención casi nadie lo hace.

#### 2.3 Áreas de trabajo y flujo local

Git organiza el trabajo en tres áreas locales, más el repositorio remoto:

```
Working Directory        Staging Area          .git directory        Remote Repository
   (archivos que        (área de preparación    (Repositorio local:    (GitHub, GitLab,
   estás editando)        antes del commit)       historial real)        Bitbucket, etc.)

┌────────────┐  git add  ┌────────────┐ git commit ┌────────────┐  git push  ┌────────────┐
│   working  │ ────────► │  staging   │ ─────────► │    local   │ ─────────► │   remote   │
│  directory │           │    area    │            │ repository │            │    repo    │
└────────────┘ ◄──────── └────────────┘            └────────────┘ ◄───────── └────────────┘
     git checkout / restore                                            git pull / git fetch
```

Resumen del flujo:
1. Modificás archivos → quedan en el **working directory**.
2. `git add` → mueve esos cambios al **staging area** (zona de preparación).
3. `git commit` → toma una "foto" (instantánea) de lo que está en staging y la guarda en el **repositorio local**.
4. `git push` → sube esos commits del repositorio local al **repositorio remoto**.
5. `git pull` / `git fetch` → traen cambios del repositorio remoto hacia el repositorio y/o working directory local.

#### 2.4 Estados de los archivos

Cada archivo dentro de un repositorio Git pasa por distintos estados:

```
Untracked ──add the file──► Staged
    ▲                          │
    │                     commit
 remove                        │
  the file                     ▼
    │                     Unmodified
    │                          │
    └──── edit the file ───────┤
                                ▼
                            Modified ──stage the file──► Staged
```

- **Untracked:** el archivo existe en el working directory pero Git todavía no lo está rastreando (recién creado, nunca se hizo `git add`).
- **Unmodified:** el archivo ya está siendo rastreado y no tiene cambios respecto al último commit.
- **Modified:** el archivo está siendo rastreado y tiene cambios sin confirmar.
- **Staged:** el archivo tiene cambios que ya pasaron por `git add` y están listos para el próximo `git commit`.

#### 2.5 Configuración inicial de Git

La primera vez que se instala Git hay que configurar el usuario y el mail con los que va a identificar los commits (esta información queda asociada a cada commit que se haga):

```bash
git config --global user.name "Nombre y Apellido"
git config --global user.email "miemail@ejemplo.com"

git config --list   # Lista todas las configuraciones actuales
```

También se puede consultar o cambiar cuál es la rama por defecto que Git crea al inicializar un repositorio (históricamente era `master`, hoy la convención más usada es `main`):

```bash
git config --global --get init.defaultBranch   # Consulta la rama por defecto
git config --global init.defaultBranch main    # La cambia a "main"
```

#### 2.6 Comandos de consola / sistema operativo (no son de Git)

Antes de la tabla de comandos de Git, vale la pena aclarar un grupo de comandos que **no son de Git** — son comandos de la terminal (shell/bash) para moverse por el sistema de archivos. Se usan todo el tiempo junto con Git, pero son de un nivel distinto: le hablan al sistema operativo, no al repositorio.

| Comando | Nombre completo / significado | Qué hace |
|---|---|---|
| `cd` | ***c**hange **d**irectory* (cambiar directorio) | Cambia de carpeta actual. Ej: `cd .ssh` entra a la carpeta `.ssh`. |
| `cd ~` | — | Te mueve directamente a la carpeta *home* del usuario (`~` es un atajo que representa esa ruta). |
| `ls` | ***l**i**s**t* (listar) | Lista el contenido (archivos y carpetas) de la carpeta en la que estás parado. |
| `ls -a` | *list **a**ll* (listar todo) | Igual que `ls`, pero incluyendo los archivos y carpetas **ocultos** (los que empiezan con `.`, como `.ssh` o `.git`). |
| `mkdir` | ***m**a**k**e **dir**ectory* (crear directorio) | Crea una carpeta nueva. Ej: `mkdir .ssh` crea la carpeta `.ssh`. |
| `cat` | ***cat**enate* (concatenar) | Muestra el contenido de un archivo de texto plano directamente en la consola, sin abrir un editor. |
| `pwd` | *print **w**orking **d**irectory* (imprimir directorio actual) | Muestra la ruta completa de la carpeta en la que estás parado en este momento. |

> ⚠️ Aclaración importante porque se presta a confusión: **`cd` no crea nada** — solo te mueve entre carpetas que ya existen. La que **crea** una carpeta nueva es `mkdir`. Por eso el flujo típico es: `mkdir carpeta` (la creás) → `cd carpeta` (entrás a ella).

Atajos de consola ya mencionados en la sección 9, que también aplican acá: **Tab** autocompleta nombres de comandos, archivos y ramas; **Ctrl + L** limpia la pantalla de la consola; las flechas ↑ / ↓ navegan por el historial de comandos ya escritos.

---

### 3. Comandos de Git

#### 3.1 Tabla general de comandos

| Comando | Acción |
|---|---|
| `init` | Inicializa un nuevo repositorio de Git |
| `clone` | Descarga una copia de un repositorio remoto |
| `status` | Muestra el estado del directorio de trabajo (working directory) |
| `add` | Mueve los cambios del working directory al staging area |
| `commit` | Confirma los cambios: captura una instantánea de lo que está en staging |
| `push` | Sube los cambios del repositorio local al repositorio remoto |
| `pull` | Descarga cambios del repositorio remoto y los fusiona al repositorio local (equivale a `fetch` + `merge`) |
| `fetch` | Baja los cambios de la rama remota indicada y los coloca en una "rama espejo" local (sin fusionarlos), para poder revisarlos antes de hacer merge |
| `revert` | Revierte a un estado anterior inmediato, deshaciendo cambios del historial de confirmaciones |
| `reset` | Restablece el estado actual a un estado específico anterior |
| `branch` | Crea, lista o elimina ramas |
| `checkout` | Cambia de rama (uso histórico; también sirve para otras cosas) |
| `switch` | Cambia de rama — comando más moderno y específico que `checkout` |
| `merge` | Fusiona ramas |
| `log` | Muestra el historial de commits |
| `stash` | Guarda cambios de forma temporal sin commitearlos |
| `diff` | Muestra diferencias entre archivos o versiones |
| `config` | Configura Git a nivel usuario o proyecto |
| `restore` | Descarta cambios del working directory o los saca del staging area |

#### 3.2 git init / git clone

```bash
git init                # Inicializa un repositorio Git nuevo en la carpeta actual
git clone <url>          # Clona (descarga) un repositorio remoto existente
```

`git init` crea una carpeta oculta `.git` dentro del directorio — ahí es donde vive todo el historial del repositorio. Para verla en el explorador de Windows hay que habilitar "elementos ocultos" en el menú Vista.

#### 3.3 git add / git status

```bash
git add archivo.txt      # Agrega un archivo puntual al staging area
git add .                # Agrega TODOS los archivos modificados/nuevos al staging area
git status                # Muestra el estado actual: qué está modificado, en staging, etc.
```

`git status` no solo informa el estado — también sugiere, en su propia salida, qué comando conviene usar a continuación (por ejemplo, si hay que hacer `add` o `restore`). Es una buena práctica prestarle atención al mensaje en vez de tipear comandos de memoria.

Con `git add .` hay que tener cuidado: agrega todos los archivos nuevos o modificados de una sola vez. Si se agregó algo por error, se puede sacar del staging con `git restore --staged`.

#### 3.4 git commit / git push / git pull / git fetch

```bash
git commit -m "mensaje del commit"    # Confirma lo que está en staging
git push                               # Sube los commits locales al remoto
git push --set-upstream origin <rama>  # Primer push de una rama nueva: vincula la rama local con su versión remota
git pull                               # Trae cambios del remoto y los fusiona automáticamente
git fetch                              # Trae cambios del remoto SIN fusionarlos automáticamente
```

**`git pull` vs `git fetch`:** `git pull` en realidad ejecuta dos comandos en uno: primero un `git fetch` (trae las instantáneas nuevas del remoto y actualiza el repositorio local) y después un `merge` automático contra la rama en la que estás parado. Si no se quiere que los cambios remotos se fusionen automáticamente con el trabajo local, conviene usar `git fetch` y revisar antes de mergear manualmente.

Cuando se crea una rama nueva localmente y se quiere subir por primera vez, Git pide vincularla explícitamente con el remoto:

```bash
git push --set-upstream origin develop
```

Esto crea la rama en el remoto y deja la rama local "trackeada" contra `origin/develop`, de modo que los siguientes `push`/`pull` ya no necesitan repetir esa opción.

#### 3.5 git restore

```bash
git restore <archivo>                  # Descarta cambios del working directory (vuelve al último commit)
git restore --staged <archivo>         # Saca un archivo del staging area (sin perder los cambios, solo lo "des-preparás")
git restore --staged <a1> <a2> <a3>    # Se pueden sacar varios archivos en un mismo comando
```

Es el comando que reemplaza casos de uso que antes se resolvían (de forma menos clara) con `git checkout`. Si por error se agregó un archivo al staging con `git add .`, no hace falta borrar la carpeta y clonar todo de nuevo — alcanza con `git restore --staged nombre_del_archivo`.

> Nota práctica: si el nombre del archivo tiene espacios, hay que ponerlo entre comillas: `git restore --staged "nombre con espacios.txt"`.

#### 3.6 git stash

`git stash` sirve para **guardar temporalmente cambios que todavía no están listos para comitear**, sin perderlos, para poder cambiar de rama (u otra tarea) con el working directory limpio. Es como una "estantería" o pila (stack) de cambios pendientes, a la que se puede volver más tarde.

Caso de uso típico: estás trabajando en la rama `develop`, tenés cambios sin commitear, y necesitás moverte a otra rama (`uat`, por ejemplo) para revisar algo. Si esos cambios no están commiteados, Git puede arrastrarlos al cambiar de rama y "ensuciar" el working directory de la otra rama. `git stash` evita eso.

```bash
git stash               # Guarda los cambios actuales del working directory en la "estantería"
git stash push           # Es el mismo comando anterior, forma explícita
git stash list            # Lista todos los stashes guardados (stash@{0}, stash@{1}, ...)
git stash pop             # Aplica el último stash guardado Y lo elimina de la lista
```

```
Working Directory                    Stash (pila de cambios)
┌──────────────────┐   git stash    ┌───────────────────────┐
│  cambios sin      │ ─────────────►│ stash@{0}  (el último)  │
│  commitear        │                │ stash@{1}               │
└──────────────────┘                │ stash@{2}  (el más viejo)│
       ▲                             └───────────────────────┘
       │         git stash pop
       └──────── (trae stash@{0} y lo borra de la pila) ───────
```

Puntos importantes:
- El stash es **del repositorio**, no de una rama en particular: se puede guardar un cambio parado en `develop` y recuperarlo estando parado en otra rama.
- `stash@{0}` siempre es el más reciente; cada nuevo `stash` corre a los anteriores un número más abajo en la pila.
- Si el archivo todavía está en estado *untracked* (nunca se le hizo `git add`), `git stash` puede no detectarlo — primero hay que agregarlo al staging con `git add` para que el stash lo tome.

**Diferencia entre `pop`, `apply`, `drop` y `clear`:**

Una buena forma de pensarlo (analogía usada en clase): el stash es como una estantería de la que sacás un documento para trabajar.

| Comando | Qué hace | Analogía |
|---|---|---|
| `git stash pop` | Aplica el stash **y lo borra** de la pila. | Sacás el original de la estantería — la estantería se queda vacía en ese lugar. |
| `git stash apply` | Aplica el stash pero **lo deja también en la pila** (no lo borra). | Sacás una fotocopia y la dejás en la mesa — el original sigue en la estantería. |
| `git stash drop` | Elimina **un stash puntual** de la pila, sin aplicarlo. | Tirás un documento puntual de la estantería. |
| `git stash clear` | Elimina **todos** los stashes de una — no se puede deshacer. | Vaciás toda la estantería. Usar con mucho cuidado. |

```bash
git stash apply           # Aplica el último stash, pero lo mantiene en la lista
git stash apply stash@{2} # Aplica un stash puntual (no el último) por su índice
git stash drop stash@{1}  # Elimina un stash puntual sin aplicarlo
git stash clear           # Elimina TODOS los stashes — irreversible
```

**Comportamiento ante conflictos:** si al hacer `git stash pop` los cambios guardados chocan con cambios que llegaron mientras tanto a la rama (por ejemplo, después de un `git pull` alguien más modificó las mismas líneas), Git **no borra el stash automáticamente** — avisa que hubo conflicto y deja el stash guardado "por las dudas", para no perder ese respaldo hasta que el conflicto se resuelva a mano. Recién ahí conviene borrarlo manualmente si ya no hace falta.

Se puede hacer todo esto también desde una interfaz gráfica (por ejemplo, clic derecho sobre un stash en Git Graph → *Drop*), que además suele pedir una confirmación antes de borrar.

#### 3.7 git branch, git checkout y git switch

```bash
git branch                    # Lista las ramas locales (la actual aparece marcada, ej. con *)
git branch <nombre>           # Crea una rama nueva sin moverse a ella
git checkout <rama>           # Cambia el HEAD a la rama indicada
git checkout -b <rama>        # Crea una rama nueva Y se mueve a ella en un solo paso
git switch <rama>             # Forma moderna de cambiar de rama (reemplaza a checkout para este uso)
git switch -c <rama>          # Forma moderna de crear + cambiar a una rama nueva
```

`git checkout` históricamente servía para varias tareas distintas a la vez (cambiar de rama, descartar cambios de archivos, etc.), lo cual generaba confusión. A partir de **Git 2.23**, se introdujeron dos comandos nuevos para separar responsabilidades de forma más clara:
- `git switch` → específicamente para cambiar o crear ramas.
- `git restore` → específicamente para descartar cambios en archivos o sacarlos del staging.

`git checkout` sigue funcionando y es válido conocerlo (es más "histórico" y todavía muy usado), pero para trabajo nuevo se recomienda `switch` y `restore` por ser más explícitos sobre qué hace cada uno.

#### 3.8 git merge, squash y rebase

Son tres estrategias distintas para unir el historial de dos ramas (por ejemplo, cuando termina el trabajo en una feature branch y hay que incorporarlo a `develop`):

- **Merge:** une el historial de ambas ramas manteniendo todos los commits individuales, en paralelo. Es la estrategia más simple y la recomendada para empezar a trabajar con Git.
- **Squash:** combina (aplasta) todos los commits de la rama que se está fusionando en **uno solo**, antes de unirlo con la rama destino. Sirve para mantener un historial más limpio cuando no importa ver cada commit intermedio de una feature.
- **Rebase:** reescribe el historial: en vez de unificar los commits en uno nuevo, toma los commits de la rama y los "reaplica" sobre la otra rama, generándoles identificadores nuevos.

```
MERGE                          SQUASH                         REBASE
main:  A─B────────M            main: A─B──────S                main: A─B──C1'─C2'─C3'
            \     /            (C1+C2+C3                             (mismos cambios,
feature:      C1─C2─C3          se combinan en S)                     nuevos hashes)
```

> ⚠️ **Rebase reescribe el historial.** Si se está trabajando en equipo y alguien ya tiene clonada la rama sobre la que se hace rebase, esa reescritura puede generar conflictos graves para el resto — porque los commits "viejos" y los "reescritos" no coinciden. Si se usa rebase en equipo, hay que avisar antes a todos los que están trabajando sobre esa rama (en muchos casos, lo más simple es que vuelvan a clonar el repo para evitar conflictos).

**Recomendación para empezar:** usar `merge`. Es la estrategia más simple y menos riesgosa. Recién cuando se tiene soltura con Git conviene animarse a usar `rebase`, y siempre avisando al equipo.

#### 3.9 Resolución de conflictos de merge

Un **conflicto** ocurre cuando dos ramas modificaron **la misma línea del mismo archivo** de forma distinta, y Git no puede decidir por sí solo cuál versión priorizar al fusionarlas. Si dos ramas tocan archivos distintos, o líneas distintas del mismo archivo, Git generalmente resuelve el merge automáticamente sin pedir intervención.

**Paso previo obligatorio:** antes de poder hacer un merge, el working directory tiene que estar limpio (sin cambios pendientes sin commitear). Si hay cambios pendientes, Git rechaza el merge directamente con un error — no llega siquiera a evaluar si hay conflicto o no. Hay que resolver eso primero (con un `commit` o un `git stash`) antes de reintentar el merge.

**Cuando sí hay conflicto real:**

```
main:     ...──C7 (modificó línea X de archivo.js)
                    \
feature:             C8 (modificó la misma línea X de archivo.js)
```

1. Al intentar `git merge feature`, Git detiene el proceso y marca el/los archivo(s) en conflicto.
2. En VS Code, el archivo aparece con un ícono de advertencia (⚠️), y **dentro** del archivo Git inserta marcadores especiales delimitando ambas versiones en conflicto (la propia y la entrante).
3. VS Code ofrece botones visuales sobre cada bloque en conflicto:
   - **Aceptar cambios actuales** (*current*): mantiene la versión que ya tenías vos.
   - **Aceptar cambios entrantes** (*incoming*): toma la versión que viene de la otra rama.
   - **Aceptar ambos cambios**: combina las dos versiones, una después de la otra.
   - **Comparar cambios**: muestra ambas versiones lado a lado para decidir con más detalle.
4. Una vez resuelto el contenido del archivo, hay que agregarlo al staging (`git add`) para marcarlo como "conflicto resuelto".
5. Se completa el merge con un commit (a veces Git ya deja armado el mensaje del merge, solo hay que confirmarlo).

También se puede resolver íntegramente por consola: Git va guiando con mensajes explícitos sobre qué archivos están en conflicto y qué falta hacer. La recomendación práctica es usar la consola para operaciones simples (clonar, traer ramas) y una interfaz visual como VS Code cuando hay que resolver conflictos en varios archivos a la vez — ahí ayuda mucho más ver el conflicto resaltado.

**Si te arrepentís en medio de la resolución** y preferís cancelar todo el intento de merge para volver al estado anterior (sin conflicto), el comando estándar de Git para esto es:

```bash
git merge --abort
```

**Recomendaciones para reducir conflictos en equipo:**
- Cada persona debería trabajar sobre **su propia rama** (una rama por feature/ficha), evitando que dos personas trabajen a la vez sobre la misma rama.
- Si dos personas sí trabajan sobre el mismo archivo en ramas distintas, la probabilidad de conflicto al fusionar aumenta — es esperable y no significa que algo esté mal, simplemente hay que resolverlo a mano.
- Ningún error de Git es irreversible: si un merge sale mal o genera conflictos inesperados, siempre hay una forma de deshacerlo o cancelarlo (`git merge --abort`, `git reset`, etc.) — no hace falta borrar y volver a clonar todo el repositorio salvo en casos extremos.

---

### 4. Flujo de trabajo completo (Git Workflow)

Uniendo working directory, staging, repositorio local y remoto en una sola secuencia:

```
Working Directory   Staging Area    Local Repository    Remote Repository
      │                  │                  │                    │
      │─ git add ───────►│                  │                    │
      │                  │─ git commit ────►│                    │
      │                  │                  │─ git push ────────►│
      │                  │                  │◄─── git pull ──────│
      │◄────────────── git checkout / switch ──────────────────  │
```

Secuencia típica de un commit completo, con los comandos exactos:

```bash
git add <archivos>              # working directory  → staging area
git commit -m "mensaje"         # staging area        → local repository
git push origin <rama>          # local repository    → remote repository
git pull                        # remote repository   → local + working directory
```

---

### 5. .gitignore

`.gitignore` es un archivo de texto plano que le indica a Git qué archivos y carpetas de un proyecto **debe ignorar** (no rastrear ni subir al repositorio). Se coloca normalmente en la raíz del proyecto.

Sintaxis básica:
- `*` se usa para encontrar coincidencias (comodín).
- `/` se usa para referirse a rutas relacionadas con la ubicación del propio archivo `.gitignore`.
- `#` se usa para agregar comentarios dentro del archivo.

Ejemplo:

```gitignore
# Ignorar archivos del sistema de Mac
.DS_store

# Ignorar carpeta node_modules
node_modules

# Ignorar todos los archivos de texto
*.txt

# Ignorar archivos relacionados con claves de una API
.env

# Ignorar archivos de configuración SASS
.sass-cache
```

Casos de uso típicos: dependencias descargadas (`node_modules`), archivos de configuración con credenciales (`.env`), archivos temporales o de caché del sistema operativo.

**Importante:** el archivo `.gitignore` en sí mismo **también hay que subirlo** (pushearlo) al repositorio remoto — no queda excluido por sí solo, es un archivo más del proyecto que define qué ignora Git a partir de ahí.

GitHub ofrece plantillas de `.gitignore` preconfiguradas según el tipo de proyecto (Node, Android, etc.) al momento de crear un repositorio nuevo, con las exclusiones típicas ya cargadas.

---

### 6. GitFlow

**GitFlow** es una forma de trabajo en equipo basada en Git, que organiza el desarrollo mediante la creación de distintas ramas con propósitos definidos. Ayuda a mantener consistencia y facilita despliegues entre distintos entornos de forma ordenada.

Estructura típica:

```
main (o master)  ── rama de producción, código estable
   │
develop          ── rama de integración, donde se junta el trabajo de todos
   │
   ├── feature/login       ── rama para una funcionalidad puntual
   ├── feature/carrito     ── rama para otra funcionalidad
   └── uat                 ── rama opcional para pruebas de aceptación de usuario
```

- `main` (o `master`): rama principal, generalmente refleja el estado estable/en producción del proyecto.
- `develop`: rama de integración donde se van uniendo las distintas features antes de pasar a producción.
- `feature/<nombre-de-la-tarea>`: una rama por cada funcionalidad o ticket en el que se está trabajando, creada a partir de `develop`.
- `uat` (*User Acceptance Testing*): rama opcional usada en algunos flujos para pruebas antes de pasar a producción.

Flujo de trabajo recomendado: cada persona crea su propia feature branch a partir de `develop`, trabaja ahí, sube sus propios commits, y una vez terminada la tarea la fusiona (generalmente vía Pull Request) contra `develop`. No se recomienda que una sola persona centralice todas las subidas del equipo — cada integrante debe generar sus propias ramas y sus propios commits, entre otras cosas porque permite revisar después, mirando el historial, qué trabajó cada uno.

---

### 7. Repositorios remotos y SSH

#### 7.1 ¿Por qué SSH y no usuario/contraseña?

Desde hace algunos años, GitHub no permite conectarse directamente a un repositorio remoto usando usuario y contraseña. En su lugar, requiere autenticación mediante una **clave SSH**.

Una clave SSH es una credencial de acceso al protocolo SSH (*Secure Shell*): un protocolo de red seguro, autenticado y cifrado, pensado para la comunicación remota entre máquinas en una red abierta (no segura por defecto). Se usa para transferencia remota de archivos, gestión de red y acceso remoto a sistemas operativos — Git lo aprovecha específicamente para autenticar la conexión con el repositorio remoto.

El mecanismo se basa en un **par de claves** (pública + privada) para establecer una conexión cifrada entre ambas partes. La forma más clara de pensarlo es con la analogía del candado y la llave: la clave **pública** funciona como un candado que le das a la otra parte (GitHub) para que pueda cifrar los datos que te envía; la clave **privada** es la llave que abre ese candado, y **se queda únicamente con vos**, en un lugar seguro.

- **Clave pública** (`archivo.pub`): es la que se comparte con GitHub. No representa un riesgo si se conoce.
- **Clave privada** (sin extensión `.pub`): se queda únicamente en la computadora local. **Nunca se comparte con nadie**. Se puede proteger además con una contraseña (passphrase) opcional al momento de generarla.

Cada persona del equipo genera su propia clave y la registra en su propia cuenta de GitHub — no se comparte una clave entre compañeros.

#### 7.2 Generar una clave SSH

Requisitos previos: tener instalada la consola de Git (Git Bash) y contar con una cuenta en GitHub.

Paso a paso:

```bash
# 1. Abrir Git Bash (clic derecho en el escritorio o en una carpeta → "Open Git Bash here")

# 2. Ir a la carpeta raíz del usuario
cd ~

# 3. Verificar si ya existe la carpeta .ssh
ls -a

# 4. Si NO aparece la carpeta .ssh en el listado, crearla
mkdir .ssh

# 5. Entrar a la carpeta .ssh
cd .ssh

# 6. Generar el par de claves
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
```

En el paso 6, reemplazar `"tu_email@ejemplo.com"` por el mail asociado a la cuenta de GitHub.

**Desglose del comando `ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"`:**

| Parte | Qué es | Qué significa |
|---|---|---|
| `ssh-keygen` | El programa | Genera pares de claves (pública + privada) para autenticación SSH. |
| `-t ed25519` | Opción **t**ype (tipo/algoritmo) | Indica **qué algoritmo criptográfico** usar para generar el par de claves. `ed25519` es el nombre de ese algoritmo — una curva elíptica (*Edwards-curve Digital Signature Algorithm*) moderna, rápida y considerada muy segura. Es la que recomienda GitHub hoy en día por sobre alternativas más viejas como `rsa`. |
| `-C "tu_email@ejemplo.com"` | Opción **C**omment (comentario) | Agrega una **etiqueta descriptiva** a la clave pública generada, para poder identificar a simple vista de quién es o para qué cuenta se creó. Es solo informativo — **no participa del cifrado**, es como un nombre de archivo pegado al final de la clave. Por convención se usa el mail de la cuenta de GitHub, pero podría ser cualquier texto (por ejemplo, el nombre de la compu). |

En criollo: *"Generame un par de claves usando el algoritmo ed25519, y etiquetalas con este mail para que después sepa de quién son."*

El comando pide dos cosas, en este orden:
1. Un **nombre identificativo** para el archivo de la clave (por ejemplo, `gz_notebook`). Ese nombre solo sirve para identificar el archivo dentro de la carpeta `.ssh` — conviene recordarlo porque se vuelve a usar más adelante.
2. Una **passphrase** opcional para proteger la clave. No es obligatoria: si se prefiere no ponerla, se deja en blanco y se presiona "Enter" dos veces.

Si todo salió bien, la consola muestra un dibujo ASCII (*randomart*) de la huella de la clave, y quedan generados dos archivos dentro de `.ssh` — por ejemplo `gz_notebook` (clave **privada**) y `gz_notebook.pub` (clave **pública**).

Para ver el contenido de la clave pública y copiarlo:

```bash
cat gz_notebook.pub
```

`cat` es un comando que muestra el contenido de un archivo de texto plano directamente en la consola, sin necesidad de abrirlo con un editor.

> ⚠️ **Atención con esto:** al usar `cat`, hay que agregar siempre el `.pub` al final del nombre. Si se omite, el comando abre el contenido de la clave **privada** — que por ningún motivo se debe exponer o compartir.

El contenido que se muestra en consola empieza con `ssh-` y termina con el mail usado al generarla — ese es el texto completo que hay que copiar y pegar en GitHub.

#### 7.3 Cargar la clave pública en GitHub

1. Estar registrado y logueado en GitHub.
2. Clic en el ícono de perfil (esquina superior derecha) → **Settings**.
3. En el menú lateral izquierdo → **SSH and GPG keys**.
4. **New SSH key** → se abre un formulario con dos campos:
   - **Title:** un nombre para identificar la clave dentro de la plataforma (por ejemplo, el nombre de la computadora).
   - **Key:** pegar ahí el contenido completo de la clave pública copiado con `cat`.
5. **Add SSH key**.

Si el contenido pegado está incompleto o corrupto, GitHub va a rechazarlo con un error del tipo *"Key is invalid. You must supply a key in OpenSSH public key format"* — en ese caso hay que repetir el `cat` y verificar que se copió la clave entera, sin cortes.

Se puede tener más de una clave SSH cargada en la misma cuenta (por ejemplo, una por cada computadora que se use), y también se pueden usar claves distintas para cuentas de GitHub distintas.

#### 7.4 Clonar un repositorio con SSH y el error más común

**Aclaración importante:** clonar con SSH solo funciona para un repositorio **propio**, o uno al que te hayan agregado como colaborador (es decir, donde tengas permiso para subir información). Si el repositorio es público pero no es tuyo ni sos colaborador — por ejemplo, uno que te compartieron o que encontraste en internet — hay que clonarlo con la opción **HTTPS**, no con SSH.

Para clonar con SSH: en el repositorio, botón **Code** → pestaña **SSH** → copiar la URL que empieza con `git@github.com:...`.

```bash
git clone git@github.com:usuario/repositorio.git
```

**Error típico al primer intento:**

```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

Este error aparece aunque la clave pública ya esté cargada en GitHub, porque falta un paso: la clave todavía no fue agregada al **ssh-agent** local, que es el proceso encargado de gestionar la conexión con la clave SSH en tu computadora.

La solución es iniciar el agente y agregarle la clave privada:

```bash
# Inicia el agente SSH (devuelve un número de proceso, ej. "Agent pid 1352")
eval "$(ssh-agent -s)"

# Agrega la clave privada al agente (reemplazar por el nombre real de la clave)
ssh-add ~/.ssh/gz_notebook
```

Si la clave se generó con passphrase, `ssh-add` la va a pedir en este paso. Si aparece el mensaje `Identity added: ...`, la clave quedó agregada correctamente al agente. A partir de ahí, `git clone` con la URL SSH ya debería funcionar sin problemas.

#### 7.5 Crear un repositorio remoto en GitHub

Al crear un repositorio nuevo desde GitHub, las opciones principales son:

- **Owner** y **nombre del repositorio**.
- **Visibilidad:**
  - *Público*: cualquiera puede verlo. Es la opción que se usa para entregas de trabajos prácticos, de forma que quien corrige pueda acceder sin necesidad de ser agregado como colaborador.
  - *Privado*: solo lo ven quienes tengan permiso explícito.
- **Agregar `.gitignore`:** GitHub ofrece plantillas según tecnología (Node, Android, etc.) con las exclusiones típicas ya preconfiguradas.
- **Licencia** (opcional): define bajo qué términos se puede usar/reutilizar el código.

#### 7.6 Colaboradores

Para que otra persona pueda hacer `push` a un repositorio, primero hay que agregarla como colaboradora:

**Settings del repositorio → Collaborators → Add people** (buscar por nombre de usuario o mail de GitHub).

La persona invitada recibe un mail de invitación que debe aceptar. Una vez aceptada, tiene permiso para trabajar sobre el proyecto — pero igual necesita tener su propia clave SSH configurada en su cuenta para poder clonar y pushear.

> Importante: la configuración de la clave SSH es **por cuenta de usuario**, no por repositorio — una vez configurada, sirve para todos los repos a los que esa cuenta tenga acceso. Las reglas de seguridad (branch protection, PRs, etc.), en cambio, se configuran **por repositorio**.

**Fuentes del tutorial de SSH:**
- [Generating a new SSH key and adding it to the ssh-agent — GitHub Docs](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Git SSH tutorial — Atlassian](https://www.atlassian.com/git/tutorials/git-ssh)

---

### 8. Seguridad y reglas de protección de ramas (GitHub)

#### 8.1 Pull Request (PR / MR)

Un **Pull Request** (PR) — también llamado **Merge Request** (MR) en otras plataformas como GitLab — es una solicitud de incorporación de cambios: se indica desde qué rama y hacia qué rama se quiere fusionar el trabajo. A diferencia de un merge local, el PR no fusiona el código automáticamente al crearse — abre un espacio de revisión donde el equipo puede comentar, pedir cambios y aprobar antes de que el merge efectivamente se concrete.

**Creación práctica de un PR en GitHub**, con las opciones más usadas al armarlo:
- **Reviewer:** se le puede asignar a una o más personas del equipo para que revisen específicamente ese PR antes de aprobarlo.
- **Etiquetas (labels):** por ejemplo, una etiqueta `feature` para indicar que el PR corresponde a una funcionalidad nueva (también existen convenciones como `bug`, `docs`, `hotfix`, etc., aunque no vienen predefinidas — las crea cada equipo según su necesidad).
- **Asignado (assignee):** quién es responsable de ese PR — generalmente quien lo abrió se asigna a sí mismo.
- **Project:** se puede vincular el PR a un tablero de proyecto de GitHub, si el equipo usa esa función para seguimiento.

Una vez creado, el PR queda en estado **abierto**, mostrando qué archivos modifica, quién lo abrió, la etiqueta asignada y a quién está asignado. A partir de ahí, el equipo puede seguir comentando o subiendo más commits a esa misma rama (que se van a reflejar automáticamente en el PR) hasta que se apruebe y se mergee.

#### 8.2 Branch protection rules

Desde **Settings → Branches → Add rule** en GitHub, se pueden configurar reglas de protección sobre ramas específicas (por ejemplo, `main`). Algunas de las más relevantes:

- **Impedir push directo** a la rama protegida: obliga a que todo cambio pase por un Pull Request, en vez de poder mergear localmente y pushear directo.
- **Requerir revisores (reviewers):** se puede exigir una cantidad mínima de aprobaciones (por ejemplo, 2 personas) antes de habilitar el merge del PR.
- **Requerir aprobación de usuarios específicos:** por ejemplo, exigir que un integrante senior del equipo apruebe sí o sí, además de las aprobaciones generales — aunque ya se hayan juntado las aprobaciones mínimas de otros, si falta la de esa persona en particular, el botón de merge queda bloqueado.
- **Requerir nueva aprobación tras nuevos pushes:** si alguien sigue subiendo cambios a un PR después de haber sido aprobado, se le puede exigir que ese PR vuelva a ser aprobado antes de poder mergearlo — para evitar que se cuelen cambios no revisados después de la aprobación.
- **Restringir quién puede mergear.**
- **Patrones de nombre de rama:** se pueden definir reglas que apliquen solo a ramas que cumplan cierto patrón (por ejemplo, que empiecen con `release/`).

Estas reglas se configuran por repositorio y pueden limitarse a una rama puntual o aplicarse por patrón de nombre.

#### 8.3 Eliminación automática de ramas al mergear

GitHub ofrece una opción (en **Settings**, en la parte general del repositorio) para que, al cerrar un Pull Request mergeado, la rama de origen se elimine automáticamente del repositorio remoto.

Esto evita acumular ramas "basura": en un proyecto real, cada feature branch que se mergea y no se borra queda dando vueltas en el historial de ramas del remoto, dificultando la lectura del estado del proyecto con el tiempo. Al activar esta opción, la eliminación es automática **en el remoto** — la copia local de esa rama, si existía, sigue estando en la máquina de quien la creó hasta que se borre manualmente ahí.

---

### 9. Herramientas complementarias

#### 9.1 Git Graph (extensión de VS Code)

**Git Graph** es una extensión de Visual Studio Code que muestra de forma gráfica el árbol de commits y ramas de un repositorio: quién hizo cada commit, cuándo, en qué rama, y permite ejecutar acciones de Git (crear rama, cambiar de rama, etc.) desde la interfaz en vez de la consola.

Permite filtrar la visualización — por ejemplo, ver solo los commits de una rama puntual, o solo ramas locales vs. remotas.

> Recomendación de seguridad general al instalar cualquier extensión de VS Code: revisar la cantidad de descargas, las reseñas/calificaciones y la fecha de la última actualización antes de instalarla, ya que una extensión tiene acceso a los archivos del proyecto y del sistema.

> Recomendación pedagógica del profesor: aprender primero a manejar Git por consola (Git Bash) antes de apoyarse en interfaces gráficas, porque la consola devuelve mensajes y sugerencias explícitas sobre qué comando conviene usar en cada situación — leerlos ayuda a entender qué está pasando en vez de memorizar botones.

Atajos útiles de consola mencionados:
- **Tab:** autocompleta comandos y nombres de archivo/rama.
- **Ctrl + L:** limpia la consola.
- **Flecha arriba / abajo:** navega por el historial de comandos ya escritos.

---

### 10. Programas utilizados en la materia

- **[Visual Studio Code](https://code.visualstudio.com/Download)** — editor de código.
- **[Node.js](https://nodejs.org/en/download/)** — entorno de ejecución de JavaScript del lado del servidor.
- **[Git](https://git-scm.com/download)** — sistema de control de versiones.

---

## Ejemplo práctico — Sesión de consola: SSH, ramas y stash

Secuencia de comandos demostrada en clase, desde la generación de la clave SSH hasta el flujo completo de trabajo con ramas y `stash`. Sirve como referencia rápida del orden real en que se encadenan los comandos vistos arriba.

```bash
# 1. Generar clave SSH y cargarla en GitHub (una sola vez por computadora)
mkdir ~/.ssh
cd ~/.ssh
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
cat ~/.ssh/mi_notebook_2026.pub          # copiar el resultado en GitHub → Settings → SSH and GPG keys

# 2. Activar el agente SSH y agregar la clave privada
eval $(ssh-agent -s)
ssh-add ~/.ssh/mi_notebook_2026

# 3. Clonar el repositorio ya creado en GitHub
git clone git@github.com:usuario/practica_git_2026.git
cd practica_git_2026

# 4. Configurar usuario para los commits (si no está configurado globalmente)
git config --list

# 5. Crear ramas de trabajo a partir de main
git branch                 # main
git checkout -b uat
git checkout main
git checkout -b develop
git branch                 # develop, main, uat

# 6. Primer push de cada rama nueva (vincula con el remoto)
git push --set-upstream origin develop
git checkout uat
git push --set-upstream origin uat

# 7. Trabajar en develop: crear archivos, agregarlos y commitearlos
git checkout develop
git add .
git status
git commit -m "primer commit de prueba"
git push

# 8. Ejemplo de uso de stash para cambiar de rama sin perder cambios pendientes
git status                 # hay cambios sin commitear en develop
git add archivo_nuevo.txt  # stash necesita que el archivo esté trackeado (al menos en staging)
git stash                  # guarda los cambios pendientes
git checkout uat           # ahora sí, cambio de rama con el working directory limpio
git checkout develop       # vuelvo a develop
git stash list              # veo los stashes guardados: stash@{0}
git stash pop                # recupero los cambios guardados
```

**Conceptos nuevos que aplica este ejemplo:** generación y registro de clave SSH, clonado por SSH, creación y push inicial de ramas (`--set-upstream`), y uso de `git stash` para preservar cambios sin commitear al cambiar de rama.

---

## Unidad 2 — JavaScript

### 11. Tipos de lenguajes de programación

Los lenguajes de programación se clasifican, según cómo se ejecuta su código, en tres grandes tipos:

```
                    TIPOS DE LENGUAJES
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                   ▼
   COMPILADO          INTERMEDIO           INTERPRETADO
        │                  │                   │
El código se        Se compila el         Requiere un
compila (traduce)   código fuente a       intérprete: un
a código máquina,   un lenguaje           programa que lee
generando binarios  intermedio, que       las instrucciones
que lee directa-    se ejecuta sobre      en tiempo real y
mente el sistema    una máquina           las va ejecutando,
operativo.          virtual.              línea por línea.
```

- **Compilados:** C, C++, Rust, Go. El código se traduce por completo a lenguaje máquina antes de ejecutarse.
- **Intermedios:** Java, Kotlin, C#. Se compilan a un lenguaje intermedio (bytecode) que corre sobre una máquina virtual (por ejemplo, la JVM para Java).
- **Interpretados:** Ruby, Perl, PHP, Bash, Python, JavaScript, R. No se compilan de antemano — un intérprete traduce y ejecuta las instrucciones directamente desde el código fuente, en el momento.

Para que la máquina entienda un lenguaje interpretado, el código igual tiene que pasar por algún proceso de traducción — solo que ese proceso ocurre en tiempo de ejecución (interpretación) en vez de antes (compilación). Un término relacionado es **transpilar**: traducir de un lenguaje de alto nivel a **otro lenguaje de alto nivel** (a diferencia de compilar, que traduce de alto nivel a bajo nivel). El ejemplo típico es TypeScript, que se transpila a JavaScript.

### 12. Scripts y lenguajes de scripting

**¿Qué es un script?** Un conjunto de instrucciones que se ejecutan en un ambiente de tiempo de ejecución — como una receta que indica paso a paso, y secuencialmente, lo que hay que hacer. Normalmente los scripts son interpretados: las instrucciones se leen y ejecutan una por una, en tiempo real, línea por línea.

**Lenguaje de scripting:** es un lenguaje interpretado que se traduce a lenguaje de máquina recién cuando se ejecuta, a través de un programa llamado **intérprete**. Los comandos se interpretan directamente desde el código fuente, por lo tanto no hace falta compilación previa. *Los lenguajes de scripting son lenguajes de programación* — no son una categoría aparte, sino un subtipo de los interpretados.

**Características de los lenguajes de scripting:**
- **Declaración de variables:** usan tipado dinámico — se pueden declarar variables de forma más flexible, sin especificar el tipo de antemano.
- **Lado servidor vs. lado cliente:** un mismo script puede ejecutarse tanto en un servidor web como en el navegador del usuario.
- **Memoria:** la gestión de memoria la maneja automáticamente el intérprete (no hay que reservarla/liberarla manualmente).
- **Multiplataforma:** se integran bien con distintos sistemas, siempre que el sistema tenga disponible el intérprete correspondiente.

| Ventajas | Desventajas |
|---|---|
| Más flexibles | Ejecución más lenta comparado con un programa compilado |
| Variables dinámicas | El código fuente queda visible (no se compila a binario) |
| Tamaño de código fuente más chico | Necesita un intérprete disponible para correr |
| Portable/multiplataforma (si hay intérprete) | Los errores se detectan recién en tiempo de ejecución |

### 13. EcmaScript y motores de JavaScript

**Ecma International** es una organización que crea estándares para tecnologías. **ECMA-262** es la especificación que define un lenguaje de scripting de propósito general — "262" es simplemente el número de referencia asignado a ese estándar. ECMAScript establece las reglas, detalles y directrices que un lenguaje de scripting debe seguir para considerarse conforme a ese estándar.

**JavaScript** es un lenguaje de programación multiparadigma y dinámico (soporta programación orientada a objetos, imperativa y declarativa/funcional) que además es un lenguaje de scripting de propósito general que se ajusta a la especificación ECMAScript.

**Motor de JavaScript** (*JavaScript engine*): es el programa/intérprete que entiende y ejecuta código JavaScript. Cada navegador (y Node.js) trae el suyo:

| Motor | Dónde se usa |
|---|---|
| **V8** | Chrome y Node.js |
| **SpiderMonkey** | Firefox |
| **Chakra** | Edge (versiones históricas) |
| **JavaScriptCore** | Safari |

Cuando ECMAScript agrega especificaciones nuevas al estándar, cada motor tiene que actualizarse para poder interpretarlas — por eso hay mantenimiento constante de estos motores por parte de cada navegador.

Dentro de un motor de JavaScript hay, como mínimo, dos piezas fundamentales: un **intérprete** (que ejecuta el código) y un **parser** (que analiza y traduce la sintaxis antes de ejecutarla), además de otros componentes internos (como el recolector de basura o *garbage collector*, que libera memoria automáticamente).

### 14. ¿Y TypeScript?

**TypeScript** es un superconjunto de JavaScript con tipado, que se **transpila** a JavaScript simple (no se ejecuta directamente — primero se traduce). Ofrece clases, módulos e interfaces adicionales para ayudar a construir componentes más robustos, y permite detectar errores de tipos antes de ejecutar el código (algo que JavaScript puro, al ser de tipado dinámico, no hace).

Visual Studio Code entiende la sintaxis de TypeScript, pero **no incluye el compilador** (`tsc`) por defecto — hay que instalarlo aparte (global o dentro del proyecto) para poder transpilar el código fuente `.ts` a `.js`.

### 15. Sintaxis básica de uso frecuente

Antes de entrar en variables y funciones, una referencia rápida de elementos de sintaxis que van a aparecer todo el tiempo en el código de la materia, para no asumir que ya se conocen:

| Elemento | Qué es / qué hace | Ejemplo |
|---|---|---|
| `console.log(valor)` | Escribe (imprime) un valor por la consola del navegador o de Node.js. Es la forma más básica de "ver" qué está pasando en el código mientras se ejecuta — no le muestra nada al usuario final de una página, es una herramienta de depuración para quien programa. | `console.log("Hola");` → imprime `Hola` |
| `typeof valor` | Operador que devuelve, como texto, el tipo de dato de lo que se le pase (`"number"`, `"string"`, `"boolean"`, `"function"`, `"object"`, `"undefined"`, etc.). Se usa mucho para inspeccionar o depurar qué tipo tiene una variable en un momento dado. | `typeof "hola"` → `'string'` |
| `//` | Comentario de una sola línea. Todo lo que sigue después de `//` en esa línea, Git y el motor de JS lo ignoran al ejecutar — sirve para dejar notas en el código. | `// esto es un comentario` |
| `/* ... */` | Comentario de varias líneas (todo lo que quede entre `/*` y `*/`). | `/* esto  también es un comentario */` |
| `;` | Separa instrucciones (el "punto y final" de una línea de código). En JavaScript es opcional en la mayoría de los casos, pero se usa por convención y prolijidad. | `let x = 5;` |
| `+` (entre strings) | El operador `+` entre dos textos (`string`) los **concatena** (los une en uno solo) en vez de sumarlos matemáticamente. | `"Hola " + "mundo"` → `'Hola mundo'` |
| `{ }` | Delimitan un **bloque de código** — el cuerpo de una función, de un `if`, de un objeto, etc. Todo lo que está entre llaves pertenece a ese bloque. | `if (true) { /* bloque */ }` |
| `( )` | Después de un nombre de función, indican que se está **ejecutando/invocando** esa función (y ahí adentro van los argumentos, si los recibe). Sin paréntesis, el nombre solo hace referencia a la función en sí, sin ejecutarla. | `saludar()` ejecuta; `saludar` no ejecuta |

### 16. Variables en JavaScript

Una **variable** es un espacio en memoria donde se puede guardar un dato; a ese espacio se le asigna un nombre, y se puede guardar cualquier tipo de información que el programa necesite.

```
Variable
Name → num
Value → 5
```

Existen tres formas de declarar variables en JavaScript:

| Palabra clave | Se puede reasignar | Alcance (scope) |
|---|---|---|
| `var` | Sí | De función (*function scope*) — histórica, hoy se evita salvo casos puntuales |
| `let` | Sí | De bloque (*block scope*) — la recomendada por defecto |
| `const` | No (el valor es inalterable) | De bloque (*block scope*) |

**Sintaxis:** `TipoDeVariable Nombre = Valor;`

```javascript
let edad = 17;                          // Número
const pi = 3.14;                        // Número
const nombre = "José María";            // Texto (string)
let fecha = "09/07/1816";               // Texto (string)
let me_gusta_programar = true;          // Booleano
```

**Diferencia de alcance entre `var` y `let`:** es uno de los motivos por los que hoy se prefiere `let` (y `const`) por sobre `var`.

```javascript
function miFuncion() {
  console.log(miVar);       // con var: undefined (no da error) | con let: error (no está definida todavía)
  if (true) {
    var miVar = "Hola mundo";   // con var: la variable "escapa" del bloque if
    // let miVar = "Hola mundo"; // con let: la variable queda encerrada dentro del bloque if
  }
  console.log(miVar);       // con var: "Hola mundo" (la ve, aunque se declaró dentro del if)
                             // con let: error, fuera del bloque {} no existe
}
```

Con `var`, la variable queda "visible" para toda la función aunque se haya declarado dentro de un bloque `if` — esto puede generar comportamientos confusos. Con `let`, la variable solo existe dentro del bloque `{ }` donde se declaró (*block scope*), que es un comportamiento más predecible. Por eso la recomendación general es: **usar siempre `let` (o `const`), y reservar `var` solo para casos puntuales donde sea estrictamente necesario ese comportamiento distinto.**

**Tipado dinámico y débil:** JavaScript permite declarar variables sin fijar su tipo de antemano, y ese tipo puede **cambiar a lo largo de la ejecución** del programa (por eso es *dinámico*). Además es *débilmente tipado*: no exige que los tipos coincidan estrictamente en muchas operaciones (por ejemplo, permite sumar un número y un texto sin lanzar error, concatenándolos). Esto le da flexibilidad, a costa de que ciertos errores de tipo solo aparezcan en tiempo de ejecución en vez de detectarse antes (algo que TypeScript busca mitigar).

### 17. Tipos de datos

| Tipo de dato | Descripción | Ejemplo básico |
|---|---|---|
| `Number` | Valor numérico (enteros, decimales, etc.) | `42` |
| `BigInt` | Valor numérico grande, fuera del rango seguro de `Number` | `1234567890123456789n` |
| `String` | Cadena de texto | `'hola'` |
| `Boolean` | Valor booleano (verdadero/falso) | `true` |
| `undefined` | Variable declarada pero sin valor asignado | `undefined` |
| `Function` | Una función guardada en una variable | `function() {}` |
| `Symbol` | Valor único e irrepetible | `Symbol(1)` |
| `Object` | Estructura de datos más compleja (ver sección 18) | `{}` |

### 18. Condicionales

```javascript
if (<primera condición>) {
  // código que se ejecuta si <primera condición> se cumple
} else if (<segunda condición>) {
  // código si <primera condición> NO se cumple, pero <segunda condición> sí
} else if (<tercera condición>) {
  // código si las dos anteriores NO se cumplen, pero <tercera condición> sí
} else {
  // código si ninguna condición se cumple
}
```

**Operador ternario:** es el único operador de JavaScript con **tres operandos**. Se usa frecuentemente como atajo para un `if` simple:

```
condición ? expr1 : expr2
```

Si `condición` es `true`, la expresión completa devuelve el valor de `expr1`; si es `false`, devuelve el valor de `expr2`.

```javascript
"La Cuota es de: " + (isMember ? "$2.00" : "$10.00");

let stop = false;
let age = 16;
age > 18 ? console.log("puede ingresar") : (stop = true);
```

### 19. Objetos

Además de las variables simples, JavaScript provee los **objetos** (`Object`): una estructura que permite reunir varios valores relacionados dentro de una misma variable. Los objetos tienen **propiedades**, que definen sus características.

```javascript
let miAuto = {
  marca: "DeLorean",
  modelo: 1980,
  color: "gris",
  timeMachine: "true"
};
```

### 20. Funciones

#### 20.1 Formas de definir una función

| Forma | Sintaxis | Descripción |
|---|---|---|
| **Declaración** | `function nombre(p1, p2...) { }` | La forma clásica: usa la palabra reservada `function` seguida de un nombre. |
| **Expresión** | `var nombre = function(p1, p2...) { }` | Se guarda una función (con o sin nombre) dentro de una variable. |
| **Constructor de función** | `new Function(p1, p2..., code)` | Crea una función mediante el constructor de objeto `Function` (uso poco frecuente en la práctica). |

```javascript
// Declaración
function saludar() {
  return "Hola";
}
saludar();        // 'Hola'
typeof saludar;    // 'function'

// Función por expresión
const saludo = function saludar() {
  return "Hola";
};
saludo();          // 'Hola'

// Función anónima (lambda): una expresión de función sin nombre
const saludoLambda = function () {
  return "Hola";
};
saludoLambda;       // f() { return 'Hola'; }  → esto es la función en sí
saludoLambda();     // 'Hola'                  → esto es EJECUTAR la función

// Función flecha (arrow): forma más compacta de escribir una función anónima
const func = () => {
  return "Función flecha.";
};
```

**`typeof` sobre una función vs. invocarla:** una confusión común es la diferencia entre nombrar una función y ejecutarla.
```javascript
typeof saludoLambda    // 'function'  → estoy preguntando por el tipo de la variable en sí (la función)
typeof saludoLambda()  // 'string'    → los paréntesis EJECUTAN la función, y typeof evalúa lo que ESA ejecución retorna
```

#### 20.2 Parámetro vs. argumento

Son dos conceptos que suelen confundirse:
- **Parámetro:** es el nombre que se define **al momento de declarar** la función — es un "placeholder" para el valor que va a recibir.
- **Argumento:** es el valor real que se pasa **al momento de invocar/ejecutar** la función.

```javascript
function saludar(nombre, materia) {   // nombre y materia son PARÁMETROS
  console.log("Hola " + nombre + ", bienvenido a " + materia);
}

saludar("Gustavo", "Backend");         // "Gustavo" y "Backend" son ARGUMENTOS
```

Los parámetros, al momento de ejecutarse la función, se comportan como variables locales dentro de ella, que toman el valor de los argumentos recibidos.

#### 20.3 Funciones como objetos y callbacks (introducción)

En JavaScript, **las funciones son objetos**. Esto tiene una consecuencia importante: se pueden guardar en variables o constantes, y también se pueden **pasar como argumento a otra función**.

Una función que recibe otra función como argumento (o que retorna una función) se conoce como **callback** (retrollamada). Es uno de los conceptos centrales de JavaScript — se va a retomar con más profundidad más adelante, al ver sincronía y asincronía.

```javascript
// fB = Función B
const fB = function () {
  console.log("Función B ejecutada.");
};

// fA = Función A, que recibe una función como parámetro (callback)
const fA = function (callback) {
  callback();   // invoca la función que le pasaron por parámetro
};

fA(fB);   // fA ejecuta internamente a fB → "Función B ejecutada."
```

Combinando "recibe o no parámetros" con "retorna o no valor", una función puede ser de 4 combinaciones posibles: sin parámetros y sin retorno, sin parámetros y con retorno, con parámetros y sin retorno, con parámetros y con retorno — las cuatro son válidas y se usan según lo que se necesite en cada caso.

> Nota de la cátedra: entender bien las callbacks es una base importante para el resto de la materia (asincronía, promesas, etc. se van a apoyar en este concepto).

---

## Ejemplo práctico — Tipos de funciones en JavaScript

Código completo trabajado en clase, con las cuatro combinaciones de funciones (con/sin parámetros, con/sin retorno) y su forma de invocación:

```javascript
// TIPOS DE FUNCIONES

// --- DECLARACIÓN ---

// Recibe parámetros - No retorna valor
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

// --- EJECUCIÓN ---

saludar("Joaquin");                                  // imprime directo, no guarda nada

let retornoSaludar = saludarConRetorno("Debora");     // guarda el string retornado en una variable
console.log(retornoSaludar);

saludarAClase("un valor");                            // el argumento se ignora: la función no declaró parámetros

console.log(saludarAClaseApurada());                  // ejecuta la función y muestra lo que retorna
console.log(saludarAClaseApurada);                    // muestra la función en sí (su definición), no la ejecuta
```

**Correcciones respecto al original tomado en clase:**
- `saludarAClase("un valor")`: el argumento `"un valor"` se pasa pero la función no lo usa, porque se declaró sin parámetros — no genera un error, simplemente ese valor se descarta. Vale la pena notarlo porque es una fuente común de confusión (JavaScript no obliga a que la cantidad de argumentos coincida con la de parámetros).
- Se agregó el comentario explícito en el último `console.log(saludarAClaseApurada)` (sin paréntesis) para remarcar la diferencia con la línea anterior — ver sección 20.1, `typeof` sobre una función vs. invocarla.

**Conceptos nuevos que aplica este ejemplo:** los 4 tipos de función según reciban parámetros y/o retornen valor, diferencia entre definir e invocar una función, y qué pasa cuando se le pasan argumentos de más a una función que no los declaró.