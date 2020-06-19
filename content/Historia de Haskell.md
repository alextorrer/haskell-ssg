---
title: Historia de Haskell
description: En los años 1980 se constituyó un comité cuyo objetivo era crear un lenguaje funcional que reuniera las características de los múltiples lenguajes funcionales de la época, el más notable Miranda, y resolviera la confusión creada por la proliferación de los mismos. Haskell, es un lenguaje de programación estandarizado multi-propósito, FUNCIONALMENTE PURO.
---

Lenguaje de programación Haskell. Es un lenguaje de programación puramente funcional, de propósito general. El nombre proviene del matemático y lógico estadounidense Haskell Curry.

## Justifiación de su creación
En 1987, existían compitiendo entre ellos más de una docena de lenguajes de programación puros funcionales no estrictos. Durante la conferencia sobre *Lenguajes de Programación Funcional y Arquitecturas de Ordenador* (FPCA 87) en Portland, Oregón, se mantuvo un encuentro durante el cual se alcanzó un fuerte consenso entre sus participantes para formar un comité que definiese un estándar abierto para tales lenguajes.
Esto se hizo con el propósito de

> Consolidar los lenguajes existentes en uno único que sirviera como base para la investigación futura en diseño de lenguajes.​

La primera versión de **Haskell** (*Haskell 1.0*) se definió en 1990. Los esfuerzos del comité resultaron en una serie de definiciones del lenguaje, que culminaron a finales de 1997 en **_Haskell 98_**, que se intentó fuera una versión del lenguaje:
- Mínima
- Estable
- Portable
junto con una biblioteca estándar asociada para la enseñanza, y como base de futuras extensiones.

El comité expresamente aprobó la creación de extensiones y variantes de Haskell 98 mediante la adición e incorporación de características experimentales.

En enero de 1999, el estándar del lenguaje Haskell 98 se publicó en *The Haskell 98 Report*. En enero de 2003, se publicó una versión revisada en *Haskell 98 Language and Libraries: The Revised Report*. A principios del 2006 comenzó el proceso de definición de un sucesor del estándar de Haskell 98, llamado informalmente **Haskell** (*Haskell Prime*). Este proceso intenta producir una revisión menor de Haskell 98. En 2010 se lanza **Haskell 2010**.

### Paradigma, dominio, área de aplicación
Haskell es puramente funcional que tiene como objetivo la utilización de funciones matemáticas puras sin efectos laterales y, por tanto, sin asignaciones destructivas.

El esquema del modelo funcional es similar al de una calculadora. Se establece una sesión interactiva entre sistema y usuario: el usuario introduce una expresión inicial y el sistema la evalúa mediante un proceso de reducción. En este proceso se utilizan las definiciones de función realizadas por el programador hasta obtener un valor no reducible.

El programador se encarga de definir un conjunto de funciones sin preocuparse de los métodos de evaluación que posteriormente utilice el sistema. Este modelo deja mayor libertad al sistema de evaluación para incorporar pasos intermedios de transformación de código y paralelización ya que las funciones no tienen efectos laterales y no dependen de una arquitectura concreta.

La importancia de la programación funcional no radica únicamente en no utilizar asignaciones destructivas. Por el contrario, este modelo promueve la utilización de una serie de características como las funciones de orden superior, los sistemas de inferencia de tipos, el polimorfismo, la evaluación perezosa y otras.

#### Ventajas y desventajas
Entre las ventajas de los lenguajes funcionales como lo es Haskell es que evalúa expresiones por lo que no tendrá errores con tipos de datos erróneos, otra de las ventajas es que se elimina la secuenciación, es decir que solo se preocupa por lo que el programa calcula y no cómo lo calcula, esto permite ser más flexible y más fácil de usar, aunque una de las desventajas en comparación de otros lenguajes es que no puedes decirle al ordenador paso a paso explícitamente cómo realizar una tarea que en otros lenguajes como por ejemplo Java sí podrías.
