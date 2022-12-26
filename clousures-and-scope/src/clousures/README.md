# Clousures
permiten acceder al ambito de una funcion exterior desde una funcion interior, en js las clausuras se crean cada vez que una funcion es creada 
los clousures no son siempre utilizados.

tenemos un clusure siempre que una función cualquiera accede a una variable fuera de su contexto.

~~~js
const global = 0;

function myFunction() {
    const number = 1;
    console.log(global);

    function parent() { //función interna
        const inner = 2;
        console.log(number, global);

        function child() {
            console.log(inner, number, global);
        }
        return child();
    }
    return parent():
}

myFunction();
~~~