import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import {
    AuthorizationRepositoryInterface
} from "../../Domain/User/Repository/AuthorizationRepositoryInterface";
import { AuthorizationEntity } from "../../Domain/Auth/Entity/AuthorizationEntity";
import { AuthorizationAddDto } from "../../Application/Auth/Dto/AuthorizationAddDto";

@Injectable()
export class AuthorizationRepository implements AuthorizationRepositoryInterface {

    constructor(
        @InjectRepository(AuthorizationEntity)
        protected authorizationRepository: Repository<AuthorizationEntity>,
    ) {
    }

    async create(authenticationAddDto: AuthorizationAddDto): Promise<AuthorizationEntity> {
        const entity: AuthorizationEntity = this.authorizationRepository.create(
            AuthorizationEntity.createEntity(authenticationAddDto)
        );

        return await this.authorizationRepository.save(entity);
    }

    async findByUserId(userId: number): Promise<AuthorizationEntity|undefined> {

        return this.authorizationRepository.findBy(
            {
                userId: userId
            }
        ).then((results: AuthorizationEntity[]) => {
            if (results.length < 1) {
                return;
            }

            return results[0];
        }).catch((error) => {
            Logger.debug(error);
            throw error;
        })
    }

    async findByAccessToken(accessToken: string): Promise<AuthorizationEntity|undefined> {

        return this.authorizationRepository.findBy(
            {
                accessToken: accessToken
            }
        ).then((results: AuthorizationEntity[]) => {
            if (results.length < 1) {
                return;
            }

            return results[0];
        }).catch((error) => {
            Logger.debug(error);
            throw error;
        })
    }

    async findByRefreshToken(refreshToken: string): Promise<AuthorizationEntity|undefined> {
        const now = new Date();
        return this.authorizationRepository.findBy(
            {
                refreshToken: refreshToken,
                refreshTokenExpiredAt: now
            }
        ).then((results: AuthorizationEntity[]) => {
            if (results.length < 1) {
                return;
            }

            return results[0];
        }).catch((error) => {
            Logger.debug(error);
            throw error;
        })
    }

}