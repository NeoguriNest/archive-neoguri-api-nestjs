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

@Controller('/api/users')
export class UserController extends CommonController {

    constructor(
        @Inject(UserAddUseCase) protected userAdd: UserAddUseCaseInterface,
        @Inject(UserAddDtoBuilder) protected dtoBuilder: DtoBuilderInterface<UserAddApiRequestBody, UserAddDto>
    ) {
        super();
    }

    @Post('/register')
    add(
        @Req() request: Request,
        @Res() response: Response
    ): void {

        const userAddDto = this.dtoBuilder.build(request.body);

        this.userAdd.execute(userAddDto)
            .then((userDto: UserDto) => {
                console.log(userDto);
                this.send(response, new ResultMessage(
                    HttpStatus.CREATED,
                    userDto
                ))
            }).catch((error) => {
                let statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

                if (error instanceof UserDuplicatedException) {
                    statusCode = HttpStatus.CONFLICT;
                }

                this.send(response, new ResultMessage(
                    statusCode,
                    undefined
                ))
            });
    }
}
