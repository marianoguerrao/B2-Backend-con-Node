##### EJEMPLO 01
## CONFIGURACIÓN DE GRAPHQL CON EXPRESS
### OBJETIVO
Configurar el servicio de GraphQL en una aplicación de Express.

### REQUERIMIENTOS
1. Proyecto Base con Express.

### DESARROLLO
1. Instalar dependencias necesarias para implementar GraphQL.
```sh
$ npm i --save graphql graphql-server-express graphql-tools
```

2. Crear dentro de `src` el directorio `schema` y agregar el archivo `schemaDefinition.graphql`.
```graphql
schema {
  query: Query
}
```

3. Crear dentro de `src/schema` el archivo `query.graphql`.
```graphql
type Query {
  status: String
}
```

4. Crear dentro de `src/schema` el archivo `index.js` para importar los GraphQL Queries.
```js
// Import schema definition
import SchemaDefinition from './schemaDefinition.graphql';

// Import Queries
import Query from './query.graphql';

export default [SchemaDefinition, Query];
```

5. Crear dentro de `src` el directorio `resolvers` y agregar el archivo `query.js` donde agregaremos la lógica de negocio de los GraphQL Queries.
```js
const Query = {
  status: () => 'Welcome to GraphQL', // Resolver para el Query status
};

export default Query;
```

6. Crear dentro de `src/resolvers` el archivo `index.js` donde exportaremos todos los Queries generados.
```js
import Query from './query';

const resolvers = {
  Query,
};

export default resolvers;
```

7. Ahora, dentro del archivo `src/index.js` vamos a configurar nuestro servidor GraphQL para eso, vamos a necesitar importar las dependencias de GraphQL.
```js
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
```

8. También, vamos a necesitar importar nuestro `schema` de GraphQL y los `resolvers`.
```js
import schema from './schema';
import resolvers from './resolvers';
```

9. A continuación, vamos a utilizar `makeExecutableSchema` para combinar nuestros `schemas` con los `resolvers`.
```js
const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
```
**Nota**: Esta función nos permite el definir los tipos, queries y mutations disponibles dentro de nuestro proyecto y los resolvers a responder a las peticiones solicitadas por el cliente.

10. Ya generado el `schema`, vamos a proceder a configurar la ruta donde podrá ser consumido el servicio de GraphQL.
```js
app.use('/graphql', graphqlExpress(req => ({
  schema: executableSchema,
  context: {},
})));
```
**Nota**: De preferencia, este código deberá estar entre las rutas `app.get('/', ...)` y `app.get('*', ...)`.

11. Ahora, vamos a configurar una herramienta que nos permitirá hacer las pruebas de consultas hacía nuestro API.
```js
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
```

12. Por ahora, la estructura debería mostrarse de la siguiente forma.
```
.
├── .babelrc
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── src
│   ├── index.js
│   ├── resolvers
│   │   ├── index.js
│   │   └── query.js
│   └── schema
│       ├── index.js
│       ├── query.graphql
│       └── schemaDefinition.graphql
└── package-lock.json
```

13. Para comprobar que todo funciona, vamos a ejecutar nuevamente nuestro proyecto.
```sh
$ npm start develop
```

14. Ahora, vamos a dirigirnos a `0.0.0.0:8080/graphql` o por el puerto que hayas especificado en tu `.env`. Deberías poder ver el siguiente mensaje.
```
GET query missing.
```

15. Una vez comprobamos que el servicio esta ejecutado, vamos a usar la herramienta GraphiQL para comprobar que nuestro API responda a una petición. Para eso, vamos a dirigirnos a `0.0.0.0:8080/graphiql`.

![GraphiQl](./screenshots/graphiql.png)

16. Introducimos la siguiente consulta al API en el editor de GraphiQL y ejecutamos dando clic en el botón de `play`.
```
{
  status
}
```

17. Si todo ha resultado como debería, obtendrás la siguiente respuesta por parte del API.

![GraphiQL Query](./screenshots/graphiql-query.png)