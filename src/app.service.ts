import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    let filePath = join(__dirname, '../../public/index.html');
    return fs.readFileSync(filePath, "utf-8");
  }
}
