# dd3_test_api

# Instalación
***
Resúmen para la instalación
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm start
```
Los servicios se están ejecutando en el localhost:4000.
La BD que se utilizó fue PostgreSQL V2.5

## Especificaiones de los endpoints
```
$ url base : /propiedades/
```
____________________

GET - getPropiedadesDsp : Se obtine las propiedades disponibles.

GET - getPropiedadesTipo : Se obtien las propiedades según su tipo.

GET - getPropiedadesHab : Se obtien las propiedades según la cantidad de habitaciones.

GET - getPropiedadesBa : Se obtien las propiedades según la cantidad de baños.

GET - getPropiedadesEst : Se obtien las propiedades según la cantidad de estacionamientos.

GET - getPropiedadesMt : Se obtien las propiedades según la cantidad de metros cuadrados que exista.

GET - getPropiedadesPre : Se ontienen las propiedades según un rango de precio.

GET - getPropiedadesPro : Se obtienen las porpiedades según su propietario.

____________________

POST - postPropiedades : Se agrega a la BD un nuevo inmueble asociado a su propietario

____________________

PUT - updatePropiedades : Se actualiza un campo determinado según sea necesario

____________________

DELETE - deletePropiedades : Se elimina una propiedad según su identificador.

DELETE - deletePropietario : Se elimina el propietario junto con sus propiedades asociadas a él.

____________________

OTROS:

La documentación fue generada con SWAGGER con el estandar OpenAPI 3.0.0.

En el directorio "Others/" se encuentra el archivo "dd3_test_propiedades.postman_collection.json" el cual es una colección de Postman para poder realizar los pruebas.

TEST

Los test que se llavaron a cabo para este API fueron test unitarios, con la ayuda de Jest.





