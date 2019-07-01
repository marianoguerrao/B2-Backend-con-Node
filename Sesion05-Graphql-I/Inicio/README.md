##### PREWORK
## INICIALIZACIÓN DE PROYECTO CON EXPRESS
### OBJETIVO
Generar un proyecto base con Express.

### REQUERIMIENTOS
1. Node.
2. Cualquier editor de tu preferencia.

### DESARROLLO
1. Generar un directorio de trabajo con nombre `graphql-module`.
```sh
$ mkdir graphql-module
```
2. Dentro del directorio creado anteriormente, generar un archivo llamado `package.json` para gestionar las dependencias de Node en el proyecto.
```sh
$ npm init -y
```
3. Modificar el archivo `package.json` y cambiar los valores para lograr el siguiente resultado.
```json
{
  "name": "graphql-module",
  "version": "0.1.0",
}
```
4. Instala las siguientes dependencias.
```sh
$ npm install --save dotenv express express-boom

$ npm install --save-dev babel-cli babel-core babel-loader babel-plugin-inline-import babel-polyfill babel-preset-es2015 babel-preset-stage-0 nodemon
```
**Nota:** Las dependencias de **Babel** son necesarias ya que estaremos trabajando con ES6.

5. Crea un archivo en `.babelrc` con la siguiente configuración.
```json
{
  "passPerPreset": true,
  "presets": ["es2015", "stage-0"],
  "plugins": [
    ["babel-plugin-inline-import", {
      "extensions": [
        ".gql",
        ".graphql"
      ]
    }]
  ]
}
```
**Nota:** Los **presets** son un conjunto de configuraciones que agregan caracteristicas especificas, de esta manera, podemos crear un conjunto de herramientas necesarias y utilizarlos dentro de nuestros proyectos sin necesidad de configurar nuevamente todo desde cero.

6. Crear un archivo `.env` y agregar las siguientes variables de entorno.
```
APP_PORT=8080
```
**Nota:** La variable de entorno `APP_PORT` nos permitirá el definir un puerto en donde será montado nuestro API, de esta forma, podemos darle flexibilidad a poder usar cualquier puerto de salida. También, nos permité evitar hacer modificaciones a nivel código ya que todo es controlado a nivel de entorno y esto cambia el comportamiento de nuestro proyecto.

7. Crear un directorio `src` y agregar un archivo `index.js`, donde configuraremos nuestro proyecto con Express.
```js
import 'dotenv/config';
import express from 'express';
import boom from 'express-boom';

const APP_PORT = process.env.APP_PORT || 8080;
const app = express();

// Using boom http-friendly messages
app.use(boom());

// Added middlewares for parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handler for root path
app.get('/', (req, res) => res.status(200).json({
  statusCode: 200,
  message: 'Welcome to Bedu Travels API'
}));

// Route handler for 404
app.get('*', (req, res) => res.boom.notFound());

app.listen(APP_PORT, () => {
  console.log(`API Service: Now running on port ${APP_PORT}`);
});
```

8. Agregar `scripts` a nuestro `package.json` para simplificar tareas de ejecución.
```json
"scripts": {
  "develop": "nodemon src/index.js"
}
```

9. Agregar el archivo de configuración `nodemon.json` para ejecución del proyecto.
```json
{
  "verbose": false,
  "ignore": ["node_modules"],
  "env": {
    "NODE_ENV": "development",
    "BABEL_DISABLE_CACHE": 1
  },
  "execMap": {
    "js": "babel-node"
  },
  "ext": ".js,.json,.graphql,.gql",
  "watch": "./src/**/*"
}
```
Cada uno de estos valores son parte de la configuración de `nodemon` los cuáles son:
 - **verbose**: Permite al programa el mostrar en pantalla cada evento que ocurra dentro de nuestro proyecto tales como errores, logs de información, mensajes de consola, etc.
 - **ignore**: Permite indicarle a la herramienta que directorio o archivos debe omitir en el evento de reinicio.
 - **env**: Permite agregar variables de entorno con las cuales se va a iniciar el proyecto.
 - **execMap**: Permite al desarrollador indicar con que herramienta se debe ejecutar basado en su extensión de archivo.
 - **ext**: Permite al desarrollador indicar que archivos debe estar observando para lanzar el reinicio y ejecutar los nuevos cambios.
 - **watch**: Permite indicar el directorio desde el cuál estará observando cambios en los archivos indicados en la configuración **ext**.


10. Si deseas subir tu ejemplo a GitHub no olvides agregar el archivo `.gitignore` a tu directorio raiz para omitir subir archivos innecesarios.
```
node_modules
.env
```

11. Si todo ha salido bien deberías tener la siguiente estructura dentro de tu proyecto.
```sh
graphql-module
├── .babelrc
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── src
│   └── index.js
└── package-lock.json
```

12. Ejecutamos nuestro proyecto utilizando el script que hemos agregado a nuestro `package.json`.
```sh
$ npm start develop
```

13. Una vez ejecutado, dirigete a `0.0.0.0:8080` o al puerto que hayas especificado dentro de tu archivo `.env` (Recuerda que la notación `0.0.0.0` hace referencia a `localhost`).

14. Si observas el siguiente mensaje al entrar a la dirección anterior, entonces haz finalizado el ejercicio.
```json
{
  "statusCode": 200,
  "message": "Welcome to Bedu Travels API"
}
```