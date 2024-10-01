import { CHECK_EMAIL_REPOSITORY, ICheckEmailRepository } from "@/domain/entities/contracts/check-email-repository";
import { ENCRYPT_REPOSITORY, IEncrypt } from "@/domain/entities/contracts/encrypt-repository";
import { HASH_COMPARE_REPOSITORY, IHashCompare } from "@/domain/entities/contracts/hash-compare-repository";
import { IUpdateAccessTokenRepository, UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/entities/contracts/update-access-token-repository";
import { Adapter, Service } from "@tsclean/core";
import { IAuthenticationService } from "../authentification-service";

@Service()
export class AuthenticationServiceImpl implements IAuthenticationService {
    constructor(
        @Adapter(ENCRYPT_REPOSITORY) private readonly encrypt: IEncrypt,
        @Adapter(HASH_COMPARE_REPOSITORY) private readonly hashCompare: IHashCompare,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
         @Adapter(UPDATE_ACCESS_TOKEN_REPOSITORY) private readonly updateAccessTokenRepository: IUpdateAccessTokenRepository
    ) {
    }

    async auth(data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
        const account = await this.checkEmailRepository.checkEmail(data.email);
        const isValid = await this.hashCompare.compare(data.password, account.password);
        if (isValid) {
            const accessToken = await this.encrypt.encrypt(account.id, account.roles);
            // await this.updateAccessTokenRepository.updateToken(account.id, accessToken);
            return {
                accessToken,
                name: account.name
            }
        }

        return null;
    }
}