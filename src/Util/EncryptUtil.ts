import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class EncryptUtil {

    readonly ROUNDS = 10;

    public encrypt(plainText: string): string {
        const utf8EncodedText: string = Buffer.from(plainText).toString('utf8');

        return bcrypt.hashSync(utf8EncodedText, this.ROUNDS);
    }

    public compare(plainText: string, encryptedText: string): boolean {
        return bcrypt.compareSync(plainText, encryptedText);
    }

}
