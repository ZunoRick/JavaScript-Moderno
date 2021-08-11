//Declaración de Función (Function Declaration)
sumar();
function sumar() {
    console.log(2 + 2);
}

/*Diferencias entre la creación de funciones
La primer función puede ejecutarse incluso antes de ser declarada
La segunda función mostrará un error ya que se está mandando llamar antes de declararse y asignarse */

//Expresión de Función (Function Expression)
sumar2();
const sumar2 = function () {
    console.log(3 + 3);
}
