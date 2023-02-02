import { Module } from '@nestjs/common';
import { CredentialDefinitionService } from './credential-definition.service';
import { CredentialDefinitionController } from './credential-definition.controller';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [CredentialDefinitionController],
  providers: [CredentialDefinitionService],
})
export class CredentialDefinitionModule {}
