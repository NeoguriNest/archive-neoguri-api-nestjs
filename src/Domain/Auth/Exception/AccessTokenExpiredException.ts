import { RuntimeException } from "../../Exception/RuntimeException";

export class AccessTokenExpiredException extends RuntimeException {
    constructor(stack?: string) {
        super(
            "만료된 액세스 토큰입니다.",
            "AccessTokenExpiredException",
            stack
        );
    }
}
