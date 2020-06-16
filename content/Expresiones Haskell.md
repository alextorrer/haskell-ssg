#Expresiones
En *Haskell* no son muy diferentes los operadores de otros lenguajes de programación de los que estamos acostumbrados a este nivel de nuestra carrera, pero sí cambian en unas mínimas partes, como por ejemplo el operador **diferente**, aquí tienes algunos ejemplos de los operadores que usa *Haskell*.

##Tipos de operadores

- igualdad ( = )
- suma ( + )
- resta ( - )
- multiplicación ( * )
- división ( / )
- mod ( % )
- concatenación ( ++ )
- and ( && )
- or ( || )
- comparación ( == )
- diferente ( /= )
- mayor ( > )
- menor ( < )
- mayor o igual ( => )
- menor o igual ( <= )
- negación ( not )

###Precedencia y asociatividad
En *Haskell* todo operador toma por defecto priodridad 9 y asociatividad izquierda.

A la hora de definir un operador podemos indicar su:
- prioridad (0 a 9; 10 es la prioridad máxima reservada para la aplicación de funciones)
- su asociatividad

*Infix*
- Para declarar el tipo de un operador hay que escribir el identificador entre paréntesis.
- En la parte izquierda de la definición del cuerpo del operador se puede usar notación infija (el operador aparece entre sus dos argumentos).

**infix** prioridad *identificador operador* (define un operador no asociativo).
**infixl** prioridad *identificador operador* (define un operador asociativo a la izquierda).
**infixr** prioridad *identificador operador* (define un operador asociativo a la derecha).

Ejemplo:

- infix 4 (~=)
- infixl 1 (>>)
- infixr 9 (!!)

####Ejemplos de sintaxis de operadores

Algunos ejemplos de los tipos expresiones simples son con Prelude (que viene siendo como un Prompt o una ejecución rápida).

  ``Prelude> 3 * 5``
  15
  ``Prelude> 4 ^ 2 - 1``
  15
  ``Prelude> (1 - 5)^(3 * 2 - 4)``
  16

  Las cadenas van entre "comillas dobles." Puede concatenarlas con ++.
  ``Prelude> "Hello"``
  "Hello"
  ``Prelude> "Hello" ++ ", Haskell"``
  "Hello, Haskell"

  Las funciones se llaman colocando los argumentos directamente después del nombre de la función. No hay paréntesis en la llamada a la función.
  ``Prelude> succ 5``
  6
  ``Prelude> truncate 6.59``
  6
  ``Prelude> round 6.59``
  7
  ``Prelude> sqrt 2``
  1.4142135623730951
  ``Prelude> not (5 < 3)``
  True
  ``Prelude> gcd 21 14``
  7
