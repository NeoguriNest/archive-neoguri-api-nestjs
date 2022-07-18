import { RuntimeException } from "../../Exception/RuntimeException";

export class MatchedUserDoesNotExistException extends RuntimeException {
    constructor(stack?: string) {
        super(
            "아이디 또는 패스워드가 일치하지 않습니다.",
            "UserDoesNotExistException",
            stack
        );
    }
}
