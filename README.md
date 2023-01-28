# report-spam

## Descripción

Sitio web desarrollado con Angular, para almacenar denuncias de spam.

## Screenshots

- Menú principal

![1](https://github.com/ngalicia/report-spam/raw/main/img/1.png)

- Listado de tipos

![2](https://github.com/ngalicia/report-spam/raw/main/img/2.png)

- Listado de contactos

![3](https://github.com/ngalicia/report-spam/raw/main/img/3.png)

- Crear denuncia

![4](https://github.com/ngalicia/report-spam/raw/main/img/4.png)

- Editar denuncia

![5](https://github.com/ngalicia/report-spam/raw/main/img/5.png)

- Listado de denuncias

![6](https://github.com/ngalicia/report-spam/raw/main/img/6.png)

- Eliminar denuncia

![7](https://github.com/ngalicia/report-spam/raw/main/img/7.png)

## Proyecto de frontend con Angular

Instalar Angular:

```bash
npm install -g @angular/cli@13.3.9
```

Crear un nuevo proyecto:

```bash
ng new report-spam --routing
```

Si falla la descarga de las librerias hay que estar intentando:

```bash
npm cache clean --force
npm install
```

Correr el servidor:

```bash
ng serve
```

Compilar el proyecto:

```bash
ng build
```

Instalar http-server:

```bash
npm install http-server@14.1.1 -g
```

Correr el proyecto compilado:

```bash
http-server dist/report-spam
```

Instalar las librerias para AdminLTE:

```bash
npm install admin-lte@3.2.0
```

Para agregar los imágenes, CSS, JS, hay que agregarlos desde el archivo angular.json, en assets, styles y scripts.

```json
    "assets": [
      "src/favicon.ico",
      "src/assets",
      {
        "glob": "**/*",
        "input": "./node_modules/admin-lte/dist/img",
        "output": "./assets/admin-lte/dist/img"
      }
    ],
    "styles": [
      "src/styles.css",
      "./node_modules/admin-lte/dist/css/adminlte.min.css",
      "./node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css"
    ],
    "scripts": [
      "./node_modules/admin-lte/plugins/jquery/jquery.min.js",
      "./node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js",
      "./node_modules/admin-lte/dist/js/adminlte.min.js"
    ]
```

Crear componente:

```bash
ng generate component components/tipo-list
ng generate component components/tipo-create
ng generate component components/tipo-details
```

Crear servicio:

```bash
ng generate service services/tipos
```

Crear interface:

```bash
ng generate interface models/Tipo
```

Crear las rutas:

En el archivo src/app/app-routing.modules.ts agregar las rutas de los componentes.

Hacer llamadas a API:

Para hacer llamadas a la API hay que importar en app.module.ts el http client module.

```js
import { HttpClientModule } from '@angular/common/http';

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ]
```

En el servicio hay que importar el http client.

```js
import { HttpClient } from '@angular/common/http'
```

Para el doble enlace de datos:

Agregar en el app.modules.ts FormsModule.

```js
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ]
```
