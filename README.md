![BrightCoders Logo](img/logo-bc.png)

# Kata El Juego de la Vida
### Iteración 01 
![cover](img/cover.jpg)

## Pre-requisitos
- [Instalar y utilizar ESLint para mantener tu codigo consistente e identificar posibles problemas](https://eslint.org/)
- Agregar a tu editor el plugin prettier
- ¿Por qué utilizar ESLINT? lee [este artículo](https://developer.ibm.com/languages/javascript/articles/why-and-how-to-use-eslint-in-your-project/)

**NOTA:** En esta primer iteración, el objetivo no es terminar la implementación del algorimo sino practicar y experimentar.

## Requerimientos Funcionales
Addapted from [Coding Dojo](https://codingdojo.org)

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Kata is about calculating the next generation of Conway’s game of life, given any starting position. 

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calcuating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

### Clues
The input starting position could be a text file that looks like this:
```
Generation 1:
4 8
........
....*...
...**...
........
```
And the output could look like this:
```
Generation 2:
4 8
........
...**...
...**...
........
```
## Requerimientos no funcionales
  - Utilizar estilo de código definido por la comunidad (apoyarse en ESLint)
  - Mostrar la salida en consola

## Tecnologías
- Lenguaje de programación Javascript
- ESLINT
- Línea de comando / consola

## Entregable
- Código fuente en Github (en la rama master)

## Resources
- [Learn Javascript - Interactive tutorial](https://www.learn-js.org/)
- [Learn JavaScript (Step-By-Step)](https://learnjavascript.online/)
- [JavaScript Garden](https://bonsaiden.github.io/JavaScript-Garden/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [Try JavaScript](https://www.javascript.com/try)
- [JavaScript (ES2015+) Enlightenment](https://frontendmasters.com/books/javascript-enlightenment/)
- [JavaScript Fundamentals for ES6](https://www.pluralsight.com/courses/javascript-fundamentals-es6)
