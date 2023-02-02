import { Body, Controller, Get, Post } from '@nestjs/common';
import { IssueCredentialsService } from './issuer.service';
import { issueCredentialDto } from '../dtos/issue-credential.dto'
import { ApiTags } from '@nestjs/swagger';



@Controller('issue-credential')
 export class IssueCredentialsController {
     constructor(private readonly issueCredentialsService:IssueCredentialsService){ }

     @Post('/send-credential')
     @ApiTags('issue-credentials')
     async issueCredential(
         @Body() credentialData:issueCredentialDto
     ){
         return this.issueCredentialsService.sendCredential(credentialData);
     }

    

 }