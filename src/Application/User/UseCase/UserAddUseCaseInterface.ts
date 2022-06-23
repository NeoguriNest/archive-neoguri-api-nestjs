import { UserAddDto } from "../Dto/UserAddDto";
import { UserDto } from "../Dto/UserDto";

export interface UserAddUseCaseInterface {
    execute(userAddDto: UserAddDto): Promise<UserDto>;
}