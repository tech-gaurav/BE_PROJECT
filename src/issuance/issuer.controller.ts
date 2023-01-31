import { Controller, Get, Post } from '@nestjs/common';
import { IssueCredentialsService } from './issuer.service'
import { ApiTags } from '@nestjs/swagger';



@Controller('issue-credential')
 export class IssueCredentialsController {
     constructor(private readonly issueCredentialsService:IssueCredentialsService){ }

     @Post('/send-credential')
     @ApiTags('issue-credentials')
     async connectionCheck(){
         return this.issueCredentialsService.sendCredential();
     }

    

 }