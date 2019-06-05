# Post Work

Felicidades por llegar a esta parte de la sesión, esta parte de la sesión es orientada hacia el intercambio de recursos de origen cruzado o CORS.

¿Que nos permite?

Cors nos permite que se puedan solicitar recursos a nuestra api en este caso.

## Qué significa habilitar el soporte de CORS

Cuando un navegador recibe una solicitud HTTP no simple, el protocolo CORS requiere que el navegador envíe una solicitud preliminar al servidor y espere la aprobación (o una solicitud de credenciales) desde el servidor antes de enviar la solicitud real. La solicitud preliminar aparece en la API como una solicitud HTTP que:

* Incluye un encabezado Origin.

* Utiliza el método OPTIONS.

* Incluye los siguientes encabezados:
    * Access-Control-Request-Method
    * Access-Control-Request-Headers

Para admitir CORS, por lo tanto, un recurso de API REST tiene que implementar un método OPTIONS que puede responder a la solicitud preliminar OPTIONS con al menos los siguientes encabezados de respuesta exigidos por el estándar Fetch:

* Access-Control-Allow-Methods

* Access-Control-Allow-Headers

* Access-Control-Allow-Origin

El modo en que habilita la compatibilidad con CORS depende del tipo de integración de la API.

Investiga como habilitar cors dentro de nuestra aplicación, dentro de estos recursos encontraras los recursos necesarios para habilitar cors.

* [Express](https://enable-cors.org/server_expressjs.html) 
* [Cors](https://www.npmjs.com/package/cors )
