import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaModule],
  exports: [PrismaModule],
})
export class PrismaModule {}
