import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { StringGeneratorOption } from "./StringGeneratorOption";
import { StringGeneratorInterface } from "./StringGeneratorInterface";

/**
 * Uuid Generator
 * @author owen
 */
@Injectable()
export class UuidGenerator implements StringGeneratorInterface {
    generate(option?: StringGeneratorOption): string {
        return randomUUID();
    }
}