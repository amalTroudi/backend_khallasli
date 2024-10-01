import { AUTHENTICATION_SERVICE, IAuthenticationService } from "@/domain/use-cases/authentification-service";
import { Body, Inject, Mapping, Post } from "@tsclean/core";
import { ValidateFields } from "../helpers/validate-fields";

@Mapping('api/v1/authentication')
export class AuthenticationController {

    constructor(
        @Inject(AUTHENTICATION_SERVICE) private readonly authenticationService: IAuthenticationService
    ) {
    }

    @Post()
    async authController(@Body() data: IAuthenticationService.Params): Promise<IAuthenticationService.Result | any> {

        const {errors, isValid} = ValidateFields.fieldsValidation(data);

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const result = await this.authenticationService.auth(data);

        if (result === null) return {statusCode: 401, body: {"message": "Invalid credentials"}}

        return {
            accessToken: result.accessToken,
            name: result.name
        }
    }
}