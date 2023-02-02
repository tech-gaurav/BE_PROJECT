import { Module } from '@nestjs/common';
import { PresetnProofController} from './present-proof.controller';
import {  PresentProofService} from "./present-proof.service";
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [PresetnProofController],
  providers: [PresentProofService],
})
export class CredentialDefinitionModule {}
