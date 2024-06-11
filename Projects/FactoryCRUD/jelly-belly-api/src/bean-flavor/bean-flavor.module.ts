import { Module } from '@nestjs/common';
import { BeanFlavorService } from './bean-flavor.service';
import { BeanFlavorController } from './bean-flavor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BeanFlavorController],
  providers: [BeanFlavorService, PrismaService],
  imports: [PrismaModule],
})
export class BeanFlavorModule {}
