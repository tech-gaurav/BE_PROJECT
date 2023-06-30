import { Body, Controller, Get, Post } from '@nestjs/common';
import { CredentialDefinitionService } from './credential-definition.service';
import { CredentialDefinitionModule } from './credential-definition.module';
import { CreateCredentialDefinitionDto } from '../dtos/create-credential-definition.dto'
import { ApiTags } from '@nestjs/swagger';



@Controller('credential-definition')
 export class CredentialDefinitionController {
     constructor(private readonly credentialDefinitionService:CredentialDefinitionService){ }



     @Post('/create-cred-def')                ///////////    Create credential defintion
     @ApiTags('credential-definition')
     createCredentialDefinition(
         @Body() credDef : CreateCredentialDefinitionDto
     ){
         return this.credentialDefinitionService.createCredDef(credDef);
     }

    

 }