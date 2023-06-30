import { Module } from '@nestjs/common';
import { HolderController } from './holder.controller';
import { HolderService } from './holder.service';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [HolderController],
  providers: [HolderService],
})
export class HolderModule {}
