import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricesModule } from './prices/prices.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PricesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
