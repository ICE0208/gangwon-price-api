import { Controller, Get, Param } from '@nestjs/common';
import { PricesService } from './prices.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('prices')
@ApiTags('prices')
export class PricesController {
  constructor(private readonly usersService: PricesService) {}
  @Get('test')
  test() {
    return this.usersService.getFile();
  }
  @Get(':item')
  findOne(@Param('item') item: string) {
    return this.usersService.getPrice(item);
  }
}
