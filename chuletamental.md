💻 Chuleta Mental — Git + JS + HTML/CSS
1️⃣ Git & GitHub

Estados de Git:

Working Directory → archivos en tu carpeta

Staging Area → git add, listos para commit

Repository → git commit, snapshots locales

Flujo básico:

git init
git add .
git commit -m "mensaje"
git remote add origin <url>
git push -u origin main
git pull
git fetch

Ramas y merges:

Fast Forward: no hay cambios en la rama destino

Recursive merge: combina cambios de varias ramas

Conflictos → resolver manualmente, luego git add + commit

GitHub:

Repos públicos/privados

Fork → copia de un repo

Pull Request → integrar cambios a main

2️⃣ JavaScript — Modelo Mental (crítico)
🔑 Tipos de datos

Primitivos → copiados por valor: number, string, boolean, null, undefined

Objetos → copiados por referencia: object, array, function

🔑 Arrays

Métodos mutables: push, pop, shift, unshift, sort

Métodos inmutables: map, filter, toSorted, slice, concat

🔑 Objetos y copias

= → referencia

{ ...obj } → copia superficial (shallow copy)

structuredClone(obj) → copia profunda (deep copy)

🔑 Funciones

Declaración clásica: function f() {}

Expresiones / Arrow: const f = () => {}

Callback → función pasada como parámetro

HOF (Higher Order Function) → recibe o devuelve funciones

🔑 Asincronía

Promesas → representan valor futuro

async/await → hace que una función devuelva promesa

Manejo de errores: try/catch

fetch → devuelve promesa, XHR antiguo

3️⃣ HTML — Lo esencial

Estructura básica:

<!DOCTYPE html>
<html>
  <head>
    <title>Título</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <header></header>
    <main></main>
    <footer></footer>
  </body>
</html>

Secciones: section, article, nav, aside

Etiquetas text-level: p, span, strong, em

Enlaces: a href=""

Formularios: inputs, select, textarea, validaciones nativas

Accesibilidad: alt en imágenes, labels, semantic tags

Validación HTML: usar lighthouse o w3c validator

4️⃣ CSS — Resumen práctico

Selectores: básicos (p, .class, #id) y combinadores (>, )

Cascada: orden de importancia → inline > id > class > tag

Unidades: px, em, rem, %, vh, vw

Box model: content + padding + border + margin

Layouts:

Tradicional: float, inline-block

Flexbox: display:flex, justify-content, align-items

Grid: display:grid, grid-template-columns, auto-fit, auto-fill

Responsive Web Design (RWD):

Media queries: @media (max-width: 768px) { … }

Mobile first vs Desktop first

Pseudo-clases y pseudo-elementos: :hover, :focus, ::before, ::after

Variables: --color-primary: #fff; var(--color-primary)

Animaciones y transiciones: transition, transform, animation, scroll animations

5️⃣ JS en la Web — DOM & Eventos

Acceso al DOM:

document.getElementById → directo

document.querySelector → selectores CSS

document.querySelectorAll → lista de nodos

Modificación:

.textContent, .innerHTML, .setAttribute

.insertAdjacentHTML → no sobrescribe, inserta

Eventos:

.addEventListener('click', callback)

Eventos comunes: click, change, submit, input

Propagación: bubbling vs capturing

Componentes funcionales:

Reutilizar HTML con template strings

element.insertAdjacentHTML para montar componentes

Props = atributos que pasan datos al componente

Enrutamiento SPA:

history.pushState() → cambiar URL sin recargar

popstate → detectar back/forward