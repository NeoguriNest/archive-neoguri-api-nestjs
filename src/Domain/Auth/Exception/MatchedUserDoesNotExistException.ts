import { RuntimeException } from "../../Exception/RuntimeException";

export class MatchedUserDoesNotExistException extends RuntimeException {
    constructor(stack?: string) {
        super(
            "아이디 또는 패스워드에 해당하는 유저가 없습니다.",
            "UserDoesNotExistException",
            stack
        );
    }
}
