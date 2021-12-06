import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import {Propiedades} from '../entity/Propiedades';

const entityName = Propiedades;

export const postPropiedades = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = getRepository(entityName).create(req.body)
    const result = await getRepository(entityName).save(propiedades);
    return res.json(result);
}

export const updatePropiedades = async (req: Request, res: Response): Promise<Response> => {
    const propiedad = await getRepository(entityName).findOne(req.params.id);
    if (propiedad){
        getRepository(entityName).merge(propiedad, req.body);
        const result = await getRepository(entityName).save(propiedad);
        return res.json(result);
    }else{
        return res.status(400).json({status: 400 , message: "Bad request no se puede actualizar la propiedad."});
    }
}

export const deletePropiedades = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).delete(req.params.id)
    return res.json(propiedades);
}

export const deletePropietario = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).createQueryBuilder("deletePropietario")
    .delete()
    .from("propiedades")
    .where("propietario = :id",{id: req.params.id})
    .execute();
    return res.json(propiedades);
}

export const getPropiedadesDsp = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).find();
    return res.json(propiedades);
}

export const getPropiedadesTipo = async (req: Request, res: Response): Promise<Response> => {
    const value = parseInt(req.params.value);
    if (value == 0 || value == 1 || value == 2 ) {
        const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesTipo")
            .where("propiedadesTipo.tipo_propiedad = :value",{value:req.params.value})
            .getMany();
        return res.json(propiedades);    
    } else {
        return res.status(400).json({status: 400 , message: "Bad request tipos de propiedades 0 || 1 || 2 "});  
    }
}

export const getPropiedadesHab = async (req: Request, res: Response): Promise<Response> =>{

    const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesHab")
        .where("propiedadesHab.habitaciones = :value",{value:req.params.value})
        .getMany();
    if (propiedades.length != 0) {
        return res.json(propiedades);
    }else {
        return res.status(400).json({status: 400 , message: "Bad request no existen propiedades con esa cantidad de habitaciones "}); 
    }
}

export const getPropiedadesBa = async (req: Request, res:Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesBa")
        .where("propiedadesBa.bannos = :value",{value:req.params.value})
        .getMany();
    if (propiedades.length != 0) {
        return res.json(propiedades);
    }else {
        return res.status(400).json({status: 400 , message: "Bad request no existen propiedades con esa cantidad de baños "});  
    }
}

export const getPropiedadesEst = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesEst")
        .where("propiedadesEst.estacionamientos = :value",{value:req.params.value})
        .getMany();
    if (propiedades.length != 0) {
        return res.json(propiedades);
    }else {
        return res.status(400).json({status: 400 , message: "Bad request no existen propiedades con esa cantidad de estacionamientos "});  
    }
}

export const getPropiedadesMt = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesMt")
        .where("propiedadesMt.metros_cuadrados = :value",{value:req.params.value})
        .getMany();
    if (propiedades.length != 0) {
        return res.json(propiedades);
    }else {
        return res.status(400).json({status: 400 , message: "Bad request no existen propiedades con esa cantidad de metros cuadrados "});
    }
}
export const getPropiedadesPre = async (req: Request, res:Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesPre")
       .where(
        "propiedadesPre.precio between :a and :b",    
        {a: req.params.a, b: req.params.b})
        .getMany();
    if (propiedades.length != 0) {
        return res.json(propiedades);
    }else {
        return res.status(400).json({status: 400 , message: "Bad request no existen propiedades en ese rango de precio "});
    }
}

export const getPropiedadesPro = async (req: Request, res: Response): Promise<Response> => {
    const propiedades = await getRepository(entityName).createQueryBuilder("propiedadesPro")
        .where("propiedadesPro.propietario = :value",{value:req.params.value})
        .getMany();
    if (propiedades.length != 0) {
        return res.json(propiedades);
    }else {
        return res.status(400).json({status: 400 , message: "Bad request no existen inmuebles asociados a ese propietario "});
    }
}
