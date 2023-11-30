import { Controller, Get, Query } from '@nestjs/common';
import { PricesService } from './prices.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('prices')
@ApiTags('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}
  @Get()
  getLocalPrice(@Query('product') product: string) {
    return this.pricesService.getLocalPrice({ product });
  }
}
