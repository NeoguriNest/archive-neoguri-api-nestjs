export class AuthUserDto {
    constructor(
        readonly token: string,
        readonly expiredAt: Date
    ) {
    }
}