import { AuthUserDto } from "./AuthUserDto";

export class LoginDto {
    constructor(
        readonly token: string,
        readonly tokenExpiredAt: Date,
        readonly refreshToken: string,
        readonly refreshTokenExpiredAt: Date,
        readonly authUser: AuthUserDto
    ) {
    }
}