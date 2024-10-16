import { IEncrypt } from "@/domain/entities/contracts/encrypt-repository";
import { AccessResourceInterface, ExecutionContextInterface } from "@tsclean/core";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config({ path: ".env" });

export class JwtAdapter implements IEncrypt, AccessResourceInterface {
    constructor(private readonly roles: string[]) {}

    async encrypt(text: string | number | Buffer, roles: string[]): Promise<string> {
        const payload = { id: text, roles: roles };
        return jwt.sign({ account: payload }, process.env.JWT_SECRET, { expiresIn: "1d" });
    }

    accessResource(context: ExecutionContextInterface): boolean | Promise<boolean> {
        try {
            const request = context.getHttp().getRequest();
            const authHeader = request.headers.authorization; // Extraction propre du header Authorization

            if (!authHeader) {
                console.error('Authorization header missing');
                return false;
            }

            const token = authHeader.split(" ")[1]; // Méthode correcte pour extraire le token

            if (token) {
                const decode: any = jwt.verify(token, process.env.JWT_SECRET);
                const userRoles = decode.account.roles;

                // Vérifiez si l'utilisateur a au moins un des rôles requis
                return userRoles.some((role: string) => this.roles.includes(role)); 
            }
        } catch (e) {
            console.error('Error verifying token:', e); // Ajout de logs pour débogage
            return false;
        }
        return false;
    }
}
