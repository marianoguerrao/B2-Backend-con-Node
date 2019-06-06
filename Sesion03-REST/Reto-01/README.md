# Reto 1

Dentro de este ejercicio realizaremos un mini api totalmente en node.js

### Instrucciones:

1. Crea una clase de tour que funcionara como modelo, que contenga type, pais, ruta.
1. Crea un controlador que te permita poder instanciar esta clase a través de los headers de la petición.
1. Crea un array donde guardes todos estas nuevas instancias(tours).
1. Guarda a los tours.
1. Crea un controlador que te mande como respuesta el array de tours.
1. Exporta estos controladores a través de module.exports. 
1. Crea un router que al hacer una petición GET consuma el controlador que te manda el array de tour y cuando haga un POST te cree un usuario nuevo.
1. Consume los controladores dentro de tu router.
