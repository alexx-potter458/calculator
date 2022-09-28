import { Injectable } from '@nestjs/common';
import { evaluate } from 'mathjs';

@Injectable()
export class CalculatorService {
    calculate(expression: string): string {
        try {
            const result = evaluate(expression);

            console.log('calculez aici');
            console.log( result );
            
            if(result === 777)
                console.log('mama asta a bagat speciala');
    
            return result;
        } catch(err) {
            return "{}"
        } 
    }
}
