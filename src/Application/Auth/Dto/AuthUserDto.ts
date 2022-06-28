import { Roles } from "../Value/Roles";

export class AuthUserDto {
    constructor(
        readonly userId: number,
        readonly loginId: string,
        readonly roles: Array<Roles>
    ) {
    }
}