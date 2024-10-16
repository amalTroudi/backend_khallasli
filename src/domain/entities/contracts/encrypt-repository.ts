export const ENCRYPT_REPOSITORY = "ENCRYPT_REPOSITORY";

export interface IEncrypt {
    encrypt: (text: string | number | Buffer, roles: string[]) => Promise<string>;
}
