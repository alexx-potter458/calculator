import { Controller, Post, Body } from '@nestjs/common';
import { EquationDto } from '././dto/equation.dto';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  calculate(@Body() equationDto: EquationDto): string {
    return this.calculatorService.calculate(equationDto.expression);
  }
  
}