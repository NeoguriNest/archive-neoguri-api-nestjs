import { Global, Module } from '@nestjs/common';
import { RandomStringGenerator } from "../Application/Util/RandomStringGenerator";
import { UuidGenerator } from "../Application/Util/UuidGenerator";

@Global()
@Module(
    {
        providers: [
            RandomStringGenerator, UuidGenerator
        ],
        exports: [ RandomStringGenerator, UuidGenerator ],
    }
)
export class GlobalModule {
}
