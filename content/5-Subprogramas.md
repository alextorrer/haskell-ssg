---
title: Subprogramas
description: Se le llama subrutina a un segmento de código separado del bloque principal, el cual puede ser invocado en cualquier momento desde ésta u otra subrutina. Generalmente son especificadas por un nombre único, un tipo de dato de retorno, una lista de parámetros y el código de procesamiento.
---

 En la programación de computadoras, un **subprograma** o subrutina es una secuencia de instrucciones de programa que realiza una tarea específica empaquetado como una unidad. Esta unidad se puede utilizar en los programas siempre que sea esa particular tarea realizada.

Los **subprogramas** se comportan de la misma manera que un programa de ordenador que se utiliza como un paso en un programa más amplio u otro subprograma. Una *subrutina* es a menudo codificado de manera que se puede iniciar varias veces y en varios lugares durante una ejecución del programa, que incluye desde otros subprogramas, y luego rama de vuelta a la siguiente instrucción después de la llamada, una vez que la tarea de la subrutina se realiza. Si bien la idea de una subrutina fue inicialmente concebido por **_John Mauchly_** durante su trabajo en ENIAC , **_Maurice Wilkes , David Wheeler , y Stanley Gill_** generalmente se le atribuye la invención formal de este concepto, que ellos llamaron una *subrutina cerrada*, en contraste con una *subrutina abierta* o macro.

Las **subrutinas** son una potente programación de la herramienta, y la sintaxis de muchos lenguajes de programación incluye soporte para la escritura y el uso de ellos. El uso juicioso de subrutinas (por ejemplo, a través de la programación estructurada enfoque) a menudo reduce sustancialmente el coste de desarrollo y mantenimiento de un programa grande, al tiempo que aumenta su calidad y fiabilidad.

El contenido de una **subrutina** es su cuerpo, que es la pieza de código de programa que se ejecuta cuando el **subprograma** se llama o invoca.

La **subrutina** puede devolver un valor calculado a su llamador o valor de retorno, o proporcionar valores de resultado o parámetros de salida diferentes. De hecho, un uso común de subrutinas es implementar *funciones matemáticas*, en las que el propósito de la subrutina es puramente para *calcular uno o más resultados* cuyos valores están determinados en su totalidad por los argumentos pasados a la subrutina.

 En estricta programación funcional lenguajes como **Haskell**, subprogramas no pueden tener efectos secundarios, lo que significa que varios estados internos del programa no va a cambiar. Las funciones siempre devolverán el mismo resultado si se llama repetidamente con los mismos argumentos. Tales lenguajes normalmente solo admiten funciones, ya que las subrutinas que no devuelven un valor no tienen ningún uso a menos que puedan causar un efecto secundario.

 ## Sintaxis

Consideremos la siguiente definición de función que suma sus dos argumentos como ejemplo de la sintaxis:

```haskell
    add :: Integer -> Integer -> Integer
    add x y = x + y
 ```

Primero se establecen el tipo de datos que devolverá y los que se le pasarán como parmetros. Después se estable la acción a relizar con ellos.
A este tipo de ejemplo se le llama función parcializada (curried). (El origen del nombre curry proviene de la persona que popularizó el uso de la parcialización: Haskell Curry).
