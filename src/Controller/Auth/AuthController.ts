import { Controller, HttpStatus, Inject, Logger, Post, Req, Res } from '@nestjs/common';
import { UserAddUseCase } from "../../Application/User/UseCase/Impl/UserAddUseCase";
import { Request, Response } from "express";
import { UserAddApiRequestBody, UserAddDtoBuilder } from "../../Application/User/Dto/Builder/UserAddDtoBuilder";
import { UserDto } from "../../Application/User/Dto/UserDto";
import { CommonController } from "../CommonController";
import { ResultMessage } from "../../Application/Dto/ResultMessage";
import { UserDuplicatedException } from "../../Domain/User/Exception/UserDuplicatedException";
import { DtoBuilderInterface } from "../../Application/Dto/DtoBuilderInterface";
import { UserAddDto } from "../../Application/User/Dto/UserAddDto";
import { UserAddUseCaseInterface } from "../../Application/User/UseCase/UserAddUseCaseInterface";
import { LoginUseCase } from "../../Application/Auth/UseCase/Impl/LoginUseCase";
import { LoginUseCaseInterface } from "../../Application/Auth/UseCase/LoginUseCaseInteface";
import { LoginDto } from "../../Application/Auth/Dto/LoginDto";

@Controller('/api/auth')
export class AuthController extends CommonController {

    constructor(
        @Inject(LoginUseCase) protected useCase: LoginUseCaseInterface
    ) {
        super();
    }

    @Post('/login')
    login(
        @Req() request: Request,
        @Res() response: Response
    ): void {
        if (request.body.loginId === undefined || request.body.password === undefined) {
            this.send(response, new ResultMessage(
                HttpStatus.BAD_REQUEST,
                undefined,
                "아이디 또는 비밀번호를 제대로 입력해주세요."
            ));
        }

        this.useCase.execute(request.body.loginId, request.body.password)
            .then((loginDto: LoginDto) => {
                this.send(response, new ResultMessage(
                    HttpStatus.OK,
                    loginDto
                ));
            })
            .catch((error) => {
                let statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

                this.send(response, new ResultMessage(
                    statusCode,
                    undefined,
                    error.message
                ));
            });
    }
}
