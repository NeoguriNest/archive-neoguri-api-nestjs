import { ObjectLiteral as Entity } from "typeorm";
import { DtoBuilderInterface } from "./DtoBuilderInterface";

export class DtoBuilder<Source extends Entity, Target> implements DtoBuilderInterface<Source, Target> {

    constructor(protected callback: Function) {
    }

    public build(source: Source): Target {
        return this.callback(source);
    }
}