export class AuthenticationTokenDto {
    constructor(
        public accessToken: string | undefined,
        public refreshToken: string | undefined
    ) {
    }
}