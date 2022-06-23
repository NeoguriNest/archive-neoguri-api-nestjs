import { AuthUserDto } from "./AuthUserDto";

export class LoginDto {
    constructor(
        readonly token: string,
        readonly authUser: AuthUserDto,
        readonly expiredAt: Date
    ) {
    }
}