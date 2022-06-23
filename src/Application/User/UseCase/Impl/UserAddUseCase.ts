import { UserAddUseCaseInterface } from "../UserAddUseCaseInterface";
import { UserAddDto } from "../../Dto/UserAddDto";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { UserRepository } from "../../../../Persistence/Repository/UserRepository";
import { UserDtoBuilder } from "../../Dto/Builder/UserDtoBuilder";
import { UserDto } from "../../Dto/UserDto";

@Injectable()
export class UserAddUseCase implements UserAddUseCaseInterface {
    constructor(
        @Inject(UserRepository) private repository: UserRepository,
        @Inject(UserDtoBuilder) private dtoBuilder: UserDtoBuilder
    ) {
    }

    async execute(userAddDto: UserAddDto): Promise<UserDto> {
        try {
            const userEntity = await this.repository.create(userAddDto);

            return this.dtoBuilder.build(userEntity);
        } catch (e) {
            Logger.log(e.message);
            throw e;
        }
    }
}