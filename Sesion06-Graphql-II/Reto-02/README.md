##### RETO 04
## VERIFICANDO PERMISOS EN LA AUTENTICACIÓN

### OBJETIVO
Permitir únicamente a usuarios autorizados acceder a ciertas mutaciones y queries del proyecto.

### REQUERIMIENTOS
1. Proyecto con GraphQL API. [Ejemplo 02](../Ejemplo-02).
2. Mongo 4 o superior. [Download](https://www.mongodb.com/download-center/community).

### DESARROLLO
Lo primero que debes conocer es que dentro del proyecto de Bedu Travels, actualmente solo tendremos estos tipos de usuarios:
- Administrador.
- Travel Agency.
- Viewers.

El reto consiste en que cumplas las siguientes reglas de autorización y permisos:
- Administrador: Puede crear y modificar usuarios y tours.
- Travel Agency: Puede crear y modificar tours.
- Viewers: Puede ver tours.

¿Comó lo harías?