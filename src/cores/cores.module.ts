import { Module } from '@nestjs/common';
import { CoresService } from './cores.service';
import { CoresController } from './cores.controller';

@Module({
  controllers: [CoresController],
  providers: [CoresService],
})
export class CoresModule {}
