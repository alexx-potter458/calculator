import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorController } from './calculator/calculator.controller';
import { CalculatorService } from './calculator/calculator.service';
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [CalculatorModule],
  controllers: [AppController, CalculatorController],
  providers: [AppService, CalculatorService],
})

export class AppModule {}
