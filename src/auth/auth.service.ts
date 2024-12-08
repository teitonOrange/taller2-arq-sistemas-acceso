import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(rut: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { rut } });
    if (user && (await bcrypt.compare(password, user.hashedPassword))) {
      return { id: user.id, username: user.name };
    }
    throw new UnauthorizedException('Credenciales incorrectas');
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
