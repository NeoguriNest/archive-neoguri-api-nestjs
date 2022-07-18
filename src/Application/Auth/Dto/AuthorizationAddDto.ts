export class AuthorizationAddDto {

    constructor(
        readonly userId,
        readonly loginId,
        readonly accessToken,
        readonly accessTokenExpiredAt,
        readonly refreshToken,
        readonly refreshTokenExpiredAt
    ) {
    }
}