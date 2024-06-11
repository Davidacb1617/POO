import { ApiProperty } from '@nestjs/swagger';

export class CreateBeanFlavorDto {
  @ApiProperty()
  FlavorName: string;
  @ApiProperty()
  Description: string;
  @ApiProperty()
  Ingredients: string;
}
