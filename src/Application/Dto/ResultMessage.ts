import { HttpStatus } from "@nestjs/common";

export class ResultMessage {

    constructor(
        readonly statusCode: HttpStatus,
        readonly data: any,
        readonly message?: string
    ) {
    }
}