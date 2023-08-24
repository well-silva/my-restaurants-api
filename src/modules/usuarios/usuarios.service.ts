import { Injectable } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}
  create(criarUsuarioDto: CriarUsuarioDto) {
    return this.prisma.usuario.create({ data: criarUsuarioDto });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id: string) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  update(id: string, atualizarUsuarioDto: AtualizarUsuarioDto) {
    return this.prisma.usuario.update({
      data: atualizarUsuarioDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
