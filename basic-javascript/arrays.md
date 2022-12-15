# arrays
~~~js
var frutas = ["manzana", "Plátano", "fresa"]; // declaro un array
frutas.push("uvas"); // agrego un elemento al final del array, retorna la nueva longitud
frutas.pop(); // elimino el último elemento del array, retorna el elemento eliminado 
frutas.unshift("granadilla"); // agrego un elemento al inicio del array, retorna la nueva longitud
frutas.shift(); // elimina el primer elemento del array y lo retorna

frutas.indexOf("fresa") // retorna el indice del elemento descrito

// recorriendo un array
frutas.filter(f => {}) //filtra y returna un nuevo arreglo
frutas.map(f => {}) //convierte los objetos de un arreglo y los retorna en uno nuevo
frutas.find(f => {}) // encuentra el primer elemento que coincida con la condición
frutas.foreach(f => {}) // no retorna nada, solo me sirve para operar con cada objeto en el array
frutas.some(f => {}) // retorna true o false si encuentra o no un elemento en el array que cumpla con la condición


~~~