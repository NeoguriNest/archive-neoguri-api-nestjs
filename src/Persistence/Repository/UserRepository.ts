import { UserRepositoryInterface } from "../../Domain/User/Repository/UserRepositoryInterface";
import { UserEntity } from "../../Domain/User/Entity/UserEntity";
import { UserFileEntity } from "../../Domain/User/Entity/UserFileEntity";
import { UserAgreementEntity } from "../../Domain/User/Entity/UserAgreementEntity";
import { UserAddDto } from "../../Application/User/Dto/UserAddDto";
import { UserNestEntity } from "../../Domain/User/Entity/UserNestEntity";
import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository implements UserRepositoryInterface {

    constructor(
        @InjectRepository(UserEntity) protected userRepository: Repository<UserEntity>,
        @InjectRepository(UserFileEntity) protected userFileRepository: Repository<UserFileEntity>,
        @InjectRepository(UserAgreementEntity) protected userAgreementRepository: Repository<UserAgreementEntity>,
        @InjectRepository(UserNestEntity) protected userNestRepository: Repository<UserNestEntity>
    ) {
    }

    create(userAddDto: UserAddDto): Promise<UserEntity> {
        const user: UserEntity = this.userRepository.create(
            UserEntity.createEntity(userAddDto)
        );

        return this.userRepository.save(user);
    }

    save(entity: UserEntity): UserEntity {
        this.userFileRepository.save(entity.files);
        this.userAgreementRepository.save(entity.agreements);
        this.userNestRepository.save(entity.nests);
        this.userRepository.save(entity);

        return entity;
    }

    async findByLoginId(loginId: string): Promise<UserEntity|undefined> {
        return await this.userRepository.findBy({
            loginId: loginId
        }).then((results: UserEntity[]) => {
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