import { Injectable } from '@nestjs/common';
import { CreateBeanFlavorDto } from './dto/create-bean-flavor.dto';
import { UpdateBeanFlavorDto } from './dto/update-bean-flavor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BeanFlavorService {
  constructor(private prisma: PrismaService) {}

  createBeanFlavor(createBeanFlavorDto: CreateBeanFlavorDto) {
    return this.prisma.beanFlavor.create({
      data: createBeanFlavorDto,
    });
  }

  findAllFlavors() {
    return this.prisma.beanFlavor.findMany({
      where: { BeanId: { not: '' } },
    });
  }

  findOneFlavor(id: string) {
    return this.prisma.beanFlavor.findUnique({
      where: { BeanId: id },
    });
  }

  updateFlavor(id: string, updateBeanFlavorDto: UpdateBeanFlavorDto) {
    return this.prisma.beanFlavor.update({
      where: { BeanId: id },
      data: updateBeanFlavorDto,
    });
  }

  removeFlavor(id: string) {
    return this.prisma.beanFlavor.delete({
      where: { BeanId: id },
    });
  }
}
