import { IEncrypt } from "@/domain/entities/contracts/encrypt-repository";
import { AccessResourceInterface, ExecutionContextInterface } from "@tsclean/core";
import dotenv from "dotenv"; 
import jwt from 'jsonwebtoken';

dotenv.config({ path: ".env" });

export class JwtAdapter implements IEncrypt, AccessResourceInterface {
    constructor(private readonly roles: string[]) {}

    async encrypt(text: string | number | Buffer, roles: []): Promise<string> {
        const payload = { id: text, roles: roles }; // Vous devriez utiliser 'roles' dans le payload
        return jwt.sign({ account: payload }, process.env.JWT_SECRET, { expiresIn: "1d" });
    }

    accessResource(context: ExecutionContextInterface): boolean | Promise<boolean> {
        try {
            const request = context.getHttp().getRequest();
            const token = request.rawHeaders[1].split(" ")[1]; // Méthode pour extraire le token

            if (token) {
                const decode: any = jwt.verify(token, process.env.JWT_SECRET); // Assurez-vous que le type est défini
                const userRoles = decode.account.roles; // Corrigez cela pour récupérer les rôles de l'utilisateur

                // Vérifiez si l'un des rôles de l'utilisateur est dans les rôles requis
                return userRoles.some((role: string) => this.roles.includes(role)); 
            }
        } catch (e) {
            console.error('Error verifying token:', e); // Ajoutez des logs pour le débogage
            return false; 
        }
        return false; // Si pas de token, retournez false
    }
}
