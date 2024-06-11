import { PartialType } from '@nestjs/swagger';
import { CreateBeanFlavorDto } from './create-bean-flavor.dto';

export class UpdateBeanFlavorDto extends PartialType(CreateBeanFlavorDto) {}
