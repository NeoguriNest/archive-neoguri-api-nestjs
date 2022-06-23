import { DtoBuilderInterface } from "../../../Dto/DtoBuilderInterface";
import { UserDto } from "../UserDto";
import { UserEntity } from "../../../../Domain/User/Entity/UserEntity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserDtoBuilder implements DtoBuilderInterface<UserEntity, UserDto> {

    build(entity: UserEntity): UserDto {

        return new UserDto(
            entity.userId,
            entity.loginId,
            entity.email,
            entity.nickname,
            entity.gender,
            entity.birthdate,
            entity.status,
            entity.introductionText,
            entity.createdAt,
            entity.updatedAt
        );
    }
}