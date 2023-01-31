import { Module } from '@nestjs/common';
import { ConnectionController } from './connections.controller';
import { ConnectionService } from './connections.service';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class ConnectionModule {}
