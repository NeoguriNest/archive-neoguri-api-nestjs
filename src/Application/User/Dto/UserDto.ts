import { UserStatus } from "../../../Domain/User/Enum/UserStatus";
import { Gender } from "../../../Domain/User/Enum/Gender";

export class UserDto {

    constructor(
        readonly userId: number,
        readonly loginId: string,
        readonly email: string,
        readonly nickname: string,
        readonly gender: Gender,
        readonly birthdate: string,
        readonly status: UserStatus,
        readonly introductionText: string,
        readonly createdAt: Date,
        readonly updatedAt: Date
    ) {
    }

}