import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeanFlavorController } from './bean-flavor/bean-flavor.controller';
import { BeanFlavorService } from './bean-flavor/bean-flavor.service';
import { BeanFlavorModule } from './bean-flavor/bean-flavor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BeanFlavorModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
