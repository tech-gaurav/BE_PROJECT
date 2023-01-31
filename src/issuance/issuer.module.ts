import { Module } from '@nestjs/common';
import { IssueCredentialsController } from './issuer.controller';
import { IssueCredentialsService } from './issuer.service';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [IssueCredentialsController],
  providers: [IssueCredentialsService],
})
export class ConnectionModule {}
