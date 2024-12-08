import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('login')
    async login(@Body() credentials: { rut: string; password: string }) {
        const user = await this.authService.validateUser(
            credentials.rut, 
            credentials.password
        );
        return this.authService.login(user);
    }
}
