import { LoginDto } from "../Dto/LoginDto";

export interface LoginUseCaseInterface {
    execute(loginId: string, password: string): Promise<LoginDto>;
}


