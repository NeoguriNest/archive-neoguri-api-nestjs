import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { StringGeneratorOption } from "./StringGeneratorOption";
import { StringGeneratorInterface } from "./StringGeneratorInterface";

/**
 * RandomStringGenerator
 * @author owen
 */
@Injectable()
export class RandomStringGenerator implements StringGeneratorInterface {

    generate(option: StringGeneratorOption): string {
        /** set default values */
        if (option.withNumber === undefined) {
            option.withNumber = true;
        }
        let generatedString: string = '';

        while (generatedString.length < option.length) {

            const isString = (option.withNumber === false)
                || (Math.floor(Math.random() * 2) === 0);

            const rangeWeight = (isString) ? 26 : 10;
            const plusWeight = (isString) ? 97 : 48;

            const asciiCode = Math.floor(Math.random() * rangeWeight) + plusWeight;
            generatedString += String.fromCharCode(asciiCode);
        }

        return generatedString;
    }

}