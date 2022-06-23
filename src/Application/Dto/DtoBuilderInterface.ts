import { ObjectLiteral as Entity } from "typeorm";

export interface DtoBuilderInterface<S extends Entity, T> {
    build(source: S): T;
}