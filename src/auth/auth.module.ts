import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { TokenBlacklistService } from './token-blacklist.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, TokenBlacklistService],
  exports: [AuthService],
})
export class AuthModule {}