import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import propiedadesRouter from './routes/propiedades.routes';
import swaggerUi from "swagger-ui-express";
import path from 'path';



const  app = express();

// db connection
createConnection();

// midlewares
app.use(morgan('dev'));
app.use(express.json());

// propiedades routes
app.use(propiedadesRouter);
app.use(express.static('docs'));


//documentation
app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname,'./docs/index.html'))
  })


//server
app.listen(4000);
console.log('Server on port',4000);


module.exports =  app;