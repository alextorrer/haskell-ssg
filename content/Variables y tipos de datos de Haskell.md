#Variables y tipos de datos
Al ser *Haskell* un lenguaje funcional puro, todos los cálculos se hacen a través de la evaluación de expresiones para producir valores. Todo valor tiene asociado un tipo de dato. Por ejemplo: el **entero** 5 o el **carácter** 'a'.

##Creación de identificadores
Un identificador comienza con una letra del alfabeto seguida opcionalmente, por un secuencia de caracteres, cada uno de los cuales es una letra, un dígito, un apóstrofe o un subrayado. Los indentificadores que representan funciones o variables deben comenzar por letra **minúscula** (comienzan con mayúsculas las funciones contructuras). Los siguientes son ejemplos de posibles identificadores:

- sum
- f
- f''
- intSum
- elemento_dos
- do'until'zero

Los siguientes identificadores son palabras reservadas y **no pueden utilizarse** como nombres de funciones o variables:

- case of
- where
- let in
- if then
- else
- data type
- infix
- infixl
- infixr
- primitive class instance

###Tipos de datos básicos
Bool (Valores lógicos), Sus valores son *True y False*.
Char (Caracteres), *ejemplos: 'a', 'B', '3', '+'*.
String (Cadena de caracteres), *ejemplos: "abc", "1 + 2 = 3"*.
Int (Enteros de precisión fija), *ejemplos: 123, -12*.
Integer (Enteros de precisión arbitraria), *ejemplos: 1267650600228229401496703205376*.
Float (Reales de precisión arbitraria), *ejemplos: 1.2, -23.45, 45e-7*.
Double (Reales de precisión doble), *ejemplos: 1.2, -23.45, 45e-7*.

####Forma de relacionar un tipo de dato a una variable
En cierto sentido, los tipos describen valores, y la asociación de un valor con su tipo se llama un tipificado (typing). Usando los ejemplos anteriores, podemos escribir "tipificaciones" como los siguientes:

  5 :: Integer
  'a' :: Char
  inc :: Integer -> Integer
  [1,2,3] :: [Integer]
  ('b',4) :: (Char,Integer)

El símbolo "::" puede leerse "tiene el tipo".

El sistema de tipificación estático de *Haskell* define formalmente la relación entre tipos y valores. Esta tipificación estática asegura que un programa Haskell está bien tipificado (type safe); es decir, que el programador no puede evaluar expresiones con tipos erróneos. Por ejemplo, no podemos sumar dos caracteres, ya que la expresión 'a'+'b' está mal tipificada. La ventaja principal del tipificación estática es bien conocida:
>todos los errores de tipificado son detectados durante la compilación.
