import { UserFileType } from "../../../Domain/User/Enum/UserFileType";

export class UserFileAddDto {
    constructor(
        private _userId: string,
        private _fileId: string,
        private _type: UserFileType,
        private _fileUrl: string
    ) {
    }

    get userId(): string {
        return this._userId;
    }

    get fileId(): string {
        return this._fileId;
    }

    get type(): UserFileType {
        return this._type;
    }

    get fileUrl(): string {
        return this._fileUrl;
    }
}