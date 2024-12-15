import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../prisma/prisma.service';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(credentials: { email: string; password: string }) {
    // console.log(bcrypt.hashSync(credentials.password, 10));
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email },
      include: { role: true },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.hashedPassword);
    if (!isPasswordValid) {

      throw new Error('Credenciales incorrectas');
    }

    const payload = { userId: user.id, roles: user.role.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); 




    await this.prisma.user.update({
      where: { id: user.id },
      data: { token: token },
    });

    return { accessToken: token };

  }

 
  
}
