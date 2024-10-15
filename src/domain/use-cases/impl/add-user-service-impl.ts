import { AddUserParams, UserEntity } from '@/domain/entities/user';
import { UserModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg';
import bcrypt from 'bcrypt';
import { IAddUserService } from '../add-user-service';

export class AddUserServiceImpl implements IAddUserService {
    async addUserService(data: AddUserParams): Promise<UserEntity> {
        const { name, email, password, roles } = data; // Déstructurer les données

        try {
            // Hacher le mot de passe pour plus de sécurité
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Créer un nouvel utilisateur dans la base de données
            const newUser = await UserModelPg.create({
                name,
                email,
                password: hashedPassword,
                roles,
                created_at: new Date(),
                updated_at: new Date(),
            });

            return newUser; // Retourner l'utilisateur créé
        } catch (error) {
            throw new Error('Erreur lors de l\'ajout de l\'utilisateur : ' + error.message);
        }
    }
}
