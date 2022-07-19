import { Inject, Injectable, Scope } from "@nestjs/common";
import { UserAddDto } from "../UserAddDto";
import { DtoBuilderInterface } from "../../../Dto/DtoBuilderInterface";
import { Gender } from "../../../../Domain/User/Enum/Gender";
import { EncryptUtil } from "../../../../Util/EncryptUtil";

export type UserAddApiRequestBody = {
    loginId: string,
    password: string,
    email: string,
    nickname: string,
    gender: Gender,
    birthdate: string,
    introductionText: string
}

@Injectable()
export class UserAddDtoBuilder implements DtoBuilderInterface<UserAddApiRequestBody, UserAddDto> {
    constructor(@Inject(EncryptUtil) protected encryptUtil: EncryptUtil) {
    }

    build(source: UserAddApiRequestBody): UserAddDto {
        return new UserAddDto(
            source.loginId,
            this.encryptUtil.encrypt(source.password),
            source.email,
            source.nickname,
            source.gender,
            source.birthdate,
            source.introductionText
        );
    }

}