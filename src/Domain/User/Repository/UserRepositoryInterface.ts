import { UserAddDto } from "../../../Application/User/Dto/UserAddDto";
import { UserEntity } from "../Entity/UserEntity";

export interface UserRepositoryInterface {
    create(userAddDto: UserAddDto): Promise<UserEntity>;

    save(entity: UserEntity): UserEntity;

    findByLoginId(loginId: string): Promise<UserEntity|undefined>;

}