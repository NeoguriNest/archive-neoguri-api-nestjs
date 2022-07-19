import { Global, Module } from '@nestjs/common';
import { RandomStringGenerator } from "../Application/Util/RandomStringGenerator";
import { UuidGenerator } from "../Application/Util/UuidGenerator";
import { EncryptUtil } from "../Util/EncryptUtil";

@Global()
@Module(
    {
        providers: [
            RandomStringGenerator,
            UuidGenerator,

            EncryptUtil
        ],
        exports: [ RandomStringGenerator, UuidGenerator, EncryptUtil ],
    }
)
export class GlobalModule {
}
