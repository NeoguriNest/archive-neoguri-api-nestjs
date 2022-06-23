import { ResultMessage } from "../Application/Dto/ResultMessage";
import { Response } from "express";

export class CommonController {

    protected send(response: Response, resultMessage: ResultMessage) {

        response.status(resultMessage.statusCode).send(resultMessage);
    }

    protected redirect() {

    }

}
