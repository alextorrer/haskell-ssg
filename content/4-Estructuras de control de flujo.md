---
title: Estructuras de control de flujo
description: En los lenguajes de programación, las estructuras de control permiten modificar el flujo de ejecución de las instrucciones de un programa. Se puede ejecutar un grupo u otro de sentencias de acuerdo a una condición (if-then-else). Ejecutar un grupo u otro de sentencias de acuerdo al valor de una variable (switch-case).
---

En *Haskell* contamos con dos formas de estructura condicional y no contamos con ninguna estructura de repetición, sin embargo, contamos con una alternativa.



## Condicional
La primera forma de estructura condicional es por búsqueda de *patrones* en los argumentos de la función:

  ```haskell
  undostres :: Int -> String
  undostres 1 = "uno"
  undostres 2 = "dos"
  undostres 3 = "tres"
  undostres x = "otro"
  
  main = do
      print(undostres 2)

  >>dos
  ```


Esto funciona igual que un "case" o "switch"en otros lenguajes. Los patroness son los números que aparecen como argumentos **1, 2, 3, x**. El argumento de la función se compara por igualdad **=** con cada uno de los "patrones". Si el argumento es igual a algún patrón, ejecuta y retorna lo que aparece en esa línea después del **=**. Si no es igual a ningún patrón determinado (**1, 2, 3**) ejecuta y retorna lo que aparece con patrón **x**.

La segunda forma de estructura condicional se basa en utilizar "guardas", representadas por el símbolo **|**:

  ```haskell
  positivoNegativo :: Int -> String 
  positivoNegativo :: a
            | a > 0    = "positivo"
            | a < 0    = "negativo"
            | otherwise = "neutro"
  
  main = do  
     print( positivoNegativo 2 )

  >>positivo
  ```


En las líneas 3 y 4 podemos ver cómo se definen 2 resultados para la función **positivoNegativo** basándose en condiciones. Los resultados son aquellos que están después del símbolo **=**. Las condiciones se encuentran previamente en cada línea, entre el símbolo **|** y el **=**. La palabra clave **otherwise** sirve para marcar lo que la función debe devolver en caso de que no se cumpla ninguna de las otras condiciones de las guardas previas.



## Repetición
Como mencionamos al principio de esta sección, no contamos con estructuras de control, pero contamos con una alternativa más naturalmente cercana al lenguaje funcional: *la recursión*:

  ```haskell
  acumular :: [Int] -> Int
  acumular [] = 0
  acumular (x:xs) = x + acumular
  
  main = do
     print( acumular [5,6,7] )
  ```

En la línea 2 se define el caso base: cuando se presenta una lista vacía, retorna **0**.

En la línea 3 se puede ver la llamada recursiva. Esta línea se ejecuta solamente cuando el parámetro es distinto a una lista vacía, o sea, cuando el parámetro contiene una lista con al menos un elemento. El formato **(x:xs)** siginifica que en la variable **x** se guarde la cabeza de la lista que está siendo pasada como argumento, y en la variable **xs** el resto de la lista (la cola). Esto quiere decir que para la primer llamada a la función **acumular** con **[5,6,7]**, **x** vale **5** (un **Int**) y **xs** vale **[6,7]** (una lista). Entonces se ejecuta **x + acumular xs** con esos valores, siendo así **5 + acumular [6,7]**. Se llamará a recursión hasta que **xs** sea igual a una lista vacía **[]** con lo que se llega al caso base.
