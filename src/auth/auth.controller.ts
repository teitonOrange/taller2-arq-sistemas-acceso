import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenBlacklistService } from './token-blacklist.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenBlacklistService: TokenBlacklistService
  ) {}

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    return this.authService.login(credentials);
  }

  @Post('logout')
  async logout(@Req() request) {
    const token = request.headers.authorization.split(' ')[1];
    await this.tokenBlacklistService.addToBlacklist(token);
    return { message: 'Logout exitoso' };
  }

  
}
