import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Propiedades {
  @PrimaryGeneratedColumn() 
  id!: number;

  @Column()
  habitaciones!: string;

  @Column()
  bannos!: number;

  @Column()
  estacionamientos!: number;

  @Column()
  metros_cuadrados!: number;

  @Column()
  precio!: number;

  @Column()
  img!: string;

  @Column()
  tipo_propiedad!: number;

  @Column()
  propietario!: number;

  @Column()
  disponible!: number;

}