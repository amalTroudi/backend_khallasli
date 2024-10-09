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
            // Vérifiez si l'utilisateur existe
            const account = await this.checkEmailRepository.checkEmail(data.email);
        
            // Si l'utilisateur n'est pas trouvé, retourner null
            if (!account) {
                console.log("No account found for email:", data.email);
                return null; // ou lancer une erreur si vous préférez
            }
        
            // Comparer le mot de passe fourni avec le mot de passe stocké
            const isValid = await this.hashCompare.compare(data.password, account.password);
            console.log("Provided password:", data.password);
            console.log("Stored password:", account.password);
            console.log("Is valid:", isValid);
            // Si le mot de passe est valide, générer un token d'accès
            if (isValid) {
                const accessToken = await this.encrypt.encrypt(account.id, account.roles);
                return {
                    accessToken,
                    name: account.name
                };
            }
        
            // Si le mot de passe est invalide, retourner null
            return null; // Cela déclenchera l'erreur 401
        }
        
        
    }
