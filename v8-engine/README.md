# v8 engine
brendan eich es el creador de javascript despues de algunos intentos de dar dinamismo a la web con otros lenguajes como mocha y livescript, luego nace javascript en el mismop año 1995.
- 1995 microsoft hace ingenieria inversa para crear su propio lenguaje para su navegador y crea JScript solo para internet explorer
- 1997 nace ECMA para estandarizar los lenguajes de la web, marar un roadmap y así seguir con javascript como unico lenguaje para la web.
- 2008 nace V* engine para dar soporte a javascript en el navegador de forma aún más estandarizada .
- 2009 nace Node.js basado en V8 para poder utilizar javascript en el backend
- 2010 nacen frameworks para javascript tanto en back como en front
- 2015 aparece ES6 con nuevas funcionalidades, m´as moderno y robusto.

just in time compiler (JIT compiler)

V8 nace como el motor de javascript de google chrome porque los otros motores tenian muchos problemas al cargar los diferentes componentes de google maps. hoy en día es el motor mas robusto y estable y los demás navegadores se están migrando a este motor porque les brinda una mayor estabilidad.

## el engine
el motor interpreta y convierte a leguaje maquina los archivos de js


## memory heap
todo lo que no es un valor primitivo se almacena en el HEAP,
todo se llama desde el objeto global en un stack de tareas 

## garbage collection
javascript lo hace automáticamente limpiando las cosas que no están marcadas como en uso 
hace uso del algoritmo Mark & Sweep

## stack overflow\
cuando se hacen muchos llamados y se llena el callstack, chrome arregló eso, hay que tener cuidado con la recursión y los llamados 

## javascript runtime
es sincrono, hace una tarea a la vez. 
🌮 - call stack : el taquero (órdenes rápidas)
👨‍🍳 - web APIs : la cocina
🌯 - callback queue : las órdenes preparadas
💁‍♂️ - event loop : el mesero

## asincronia en js
