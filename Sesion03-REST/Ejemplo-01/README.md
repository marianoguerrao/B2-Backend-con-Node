# Ejercicio 1

Dentro de este ejercicio realizaremos un mini api totalmente en node.js

Requerimientos:

* Postman
* Sql

Pasos de instalación:

1. Descargar el programa de Postman desde la siguiente página https://www.getpostman.com/downloads/ . 

1. Con el archivo descargado dar doble click y seguir las instrucciones hasta que aparezca el icono de Postman en la barra de notificaciones.

1. Ejecuta el programa

## App in memory

### Instrucciones:

1. Crea una clase de usuario que funcionara como modelo, que contenga nombre, descripción(a que se dedica) y edad.
1. Crea un controlador que te permita poder instanciar esta clase a través de los headers de la petición.
1. Crea un array donde guardes todos estas nuevas instancias(usuarios).
1. Guarda a los usuarios.
1. Crea un controlador que te mande como respuesta el array de usuarios.
1. Exporta estos controladores a través de module.exports. 
1. Crea un router que al hacer una petición GET consuma el controlador que te manda el array de usuario y cuando haga un POST te cree un usuario nuevo.
1. Consume los controladores dentro de tu router.


