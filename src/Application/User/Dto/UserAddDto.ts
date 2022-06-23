import { Gender } from "../../../Domain/User/Enum/Gender";

export class UserAddDto {
    constructor(
        readonly loginId: string,
        readonly password: string,
        readonly email: string,
        readonly nickname: string,
        readonly gender: Gender,
        readonly birthdate: string,
        readonly introductionText: string
    ) {
    }

}