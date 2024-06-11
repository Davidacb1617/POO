import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BeanFlavorService } from './bean-flavor.service';
import { CreateBeanFlavorDto } from './dto/create-bean-flavor.dto';
import { UpdateBeanFlavorDto } from './dto/update-bean-flavor.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('bean-flavor')
@Controller('bean-flavor')
export class BeanFlavorController {
  constructor(private readonly beanFlavorService: BeanFlavorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new bean flavor' })
  create(@Body() createBeanFlavorDto: CreateBeanFlavorDto) {
    return this.beanFlavorService.createBeanFlavor(createBeanFlavorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bean flavors' })
  findAll() {
    return this.beanFlavorService.findAllFlavors();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one bean flavor' })
  findOne(@Param('id') id: string) {
    return this.beanFlavorService.findOneFlavor(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a bean flavor' })
  update(
    @Param('id') id: string,
    @Body() updateBeanFlavorDto: UpdateBeanFlavorDto,
  ) {
    return this.beanFlavorService.updateFlavor(id, updateBeanFlavorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bean flavor' })
  remove(@Param('id') id: string) {
    return this.beanFlavorService.removeFlavor(id);
  }
}
