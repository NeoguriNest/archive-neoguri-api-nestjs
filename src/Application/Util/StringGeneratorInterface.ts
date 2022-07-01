import { StringGeneratorOption } from "./StringGeneratorOption";

export interface StringGeneratorInterface {
    generate(option?: StringGeneratorOption): string;
}