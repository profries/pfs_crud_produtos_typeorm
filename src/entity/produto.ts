import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Produto extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column("real")
    preco!: number;
}