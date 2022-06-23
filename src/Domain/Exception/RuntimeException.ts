export class RuntimeException implements Error {
    constructor(
        protected _message: string,
        protected _name?: string,
        protected _stack?: string
    ) {
    }

    get message(): string {
        return this._message;
    }

    get name(): string {
        return this._name;
    }

    get stack(): string {
        return this._stack;
    }
}