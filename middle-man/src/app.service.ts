import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async calculator(expression: string): Promise<string> {
    const result = await axios.post('http://backend:4000/calculator', {
      expression,
    });

    return result.data;
  }
}
