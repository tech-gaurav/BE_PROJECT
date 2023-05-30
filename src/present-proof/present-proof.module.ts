import { Module } from '@nestjs/common';
import { PresentProofController} from './present-proof.controller';
import {  PresentProofService} from "./present-proof.service";
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [PresentProofController],
  providers: [PresentProofService],
})
export class CredentialDefinitionModule {}
