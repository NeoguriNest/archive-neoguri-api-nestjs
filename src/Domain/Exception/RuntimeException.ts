export class RuntimeException implements Error {
    constructor(
        readonly message: string,
        readonly name: string,
        readonly stack?: string
    ) {
    }
}