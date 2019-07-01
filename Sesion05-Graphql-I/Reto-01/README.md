##### RETO 01
## AGREGAR TOURS CON GRAPHQL
### OBJETIVO
Crear una mutación que permita agregar nuevos tours en la aplicación.

### REQUERIMIENTOS
1. Proyecto con GraphQL API. [Ejemplo 02](../Ejemplo-02).
2. Mongo 4 o superior. [Download](https://www.mongodb.com/download-center/community).

### DESARROLLO
1. Para lograr el objetivo del reto, primero tendrás que agregar el modelo correspondiente a `Tours` en la cuál un tour posee atributos específicos para organizar su información y además, podrá almacenar un conjunto de ubicaciones (como especie de itinerario) donde podrás indicar los lugares a visitar en el tour. También, un `Tour` puede tener diferentes opciones salir de visita, esto lo podemos considerar como `Departures`, que son aquellas salidas ya programadas en el tour. A continuación se encuentran los datos que debe contener el módelo de `Tour`, `Itinerary` y `Departure`.
```
-------------------------------------------------------------
| Tour              | Itinerary          | Departure        |
-------------------------------------------------------------
| Title             | Title              | StartDate        |
| Description       | Time               | EndDate          |
| Duration (in days)| SleepingMode       | Price            |
| Availability      | Description        | Seats            |
| Difficulty        | Latitude           |                  |
| StartLocation     | Longitude          |                  |
| EndLocation       |                    |                  |
| Operator          |                    |                  |
| TypeTour          |                    |                  |
| Likes             |                    |                  |
| Itinerary         |                    |                  |
-------------------------------------------------------------
```
**Nota:** Recuerda, los `Tours` pueden tener muchos `Lugares a visitar (Itinerary)` y muchas `Salidas (Departures)`.

2. Una vez definidos los modelos, hay que definir la mutación en el schema de GraphQL.

3. Generar la lógica para creación de `Tours` en el archivo `src/resolvers/mutation.js`.

4. Verificar en la base de datos el resultado.