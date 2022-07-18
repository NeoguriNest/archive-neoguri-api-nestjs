import { AuthorizationEntity } from "../../Auth/Entity/AuthorizationEntity";
import { AuthorizationAddDto } from "../../../Application/Auth/Dto/AuthorizationAddDto";

export interface AuthorizationRepositoryInterface {
    create(userAddDto: AuthorizationAddDto): Promise<AuthorizationEntity>;

    findByUserId(userId: number): Promise<AuthorizationEntity|undefined>;

    findByAccessToken(accessToken: string): Promise<AuthorizationEntity|undefined>;

    findByRefreshToken(refreshToken: string): Promise<AuthorizationEntity|undefined>;

}