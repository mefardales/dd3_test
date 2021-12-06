import {Router} from 'express'
import {deletePropietario, deletePropiedades, updatePropiedades, postPropiedades, getPropiedadesDsp, getPropiedadesTipo, getPropiedadesHab, getPropiedadesBa, getPropiedadesEst, getPropiedadesMt, getPropiedadesPre, getPropiedadesPro} from '../controllers/propiedades.controllers'
const propiedadesRouter = Router()

//GET
propiedadesRouter.get('/propiedades/',getPropiedadesDsp);
propiedadesRouter.get('/propiedades/tp/:value',getPropiedadesTipo);
propiedadesRouter.get('/propiedades/hab/:value',getPropiedadesHab);
propiedadesRouter.get('/propiedades/ba/:value',getPropiedadesBa);
propiedadesRouter.get('/propiedades/est/:value',getPropiedadesEst);
propiedadesRouter.get('/propiedades/mt/:value',getPropiedadesMt);
propiedadesRouter.get('/propiedades/pre/:a&:b',getPropiedadesPre);
propiedadesRouter.get('/propiedades/pro/:value',getPropiedadesPro);
//POST
propiedadesRouter.post('/propiedades/nv/',postPropiedades);
//PUT
propiedadesRouter.put('/propiedades/upd/:id',updatePropiedades);
//DELETE
propiedadesRouter.delete('/propiedades/:id',deletePropiedades);
propiedadesRouter.delete('/propiedades/pr/:id',deletePropietario);

export default propiedadesRouter;