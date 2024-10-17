import { AUTHENTICATION_SERVICE, IAuthenticationService } from "@/domain/use-cases/authentification-service";
import { Body, Inject, Mapping, Post } from "@tsclean/core";
import { ValidateFields } from "../../helpers/validate-fields";
import jwt from 'jsonwebtoken'; // Library for JWT generation
import { Router } from 'express';
import cors from 'cors';

@Mapping('api/v1/authentication')
export class AuthenticationController {
    public route: string = '/api/v1/authentication';
    public router: Router;

    constructor(
        @Inject(AUTHENTICATION_SERVICE) private readonly authenticationService: IAuthenticationService
    ) {
        this.router = Router();
        this.initializeRoutes();
        this.router.use(cors({
            origin: '*', 
            methods: '*', 
            allowedHeaders: '*'
        }));
    } 

    private initializeRoutes() {
        this.router.post('/', this.authController.bind(this)); // Correction ici
    }

    @Post()
    async authController(@Body() data: IAuthenticationService.Params): Promise<IAuthenticationService.Result | any> {
        try {
            const { errors, isValid } = ValidateFields.fieldsValidation(data);

            if (!isValid) {
                return { statusCode: 422, body: { "message": errors } };
            }

            const result = await this.authenticationService.auth(data);

            if (!result || !result.name) {
                return { statusCode: 401, body: { "message": "Invalid credentials" } };
            }

            const accessToken = jwt.sign(
                { name: result.name }, // Payload
                'your_secret_key', // Secret key for signing the token
                { expiresIn: '1h' } // Token expiration
            );

            return {
                statusCode: 200,
                body: {
                    accessToken,
                    name: result.name
                }
            };
        } catch (error) {
            console.error('Error during login:', error);
            return { statusCode: 500, body: { "message": "Internal server error" } };
        }
    }
}
