import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TokenBlacklistService {
  constructor(private readonly prisma: PrismaService) {}

  async addToBlacklist(token: string) {//aca se genera un error
    const expiration = new Date(Date.now() + 3600 * 1000); // Token expira en 1 hora
    await this.prisma.blacklistToken.create({ 
      data: { token, expiration } 
    });
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    const blacklistedToken = await this.prisma.blacklistToken.findUnique({
      where: { token },
    });
    return !!blacklistedToken;
  }
}
