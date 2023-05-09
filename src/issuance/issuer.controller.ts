import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IssueCredentialsService } from './issuer.service';
import { issueCredentialDto } from '../dtos/issue-credential.dto'
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetCredByConnId,Role} from "../enum";



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


     @Get('/records')
     @ApiTags('issue-credentials')
     @ApiQuery({
        name: 'state',
        enum:GetCredByConnId,
        required: false,
    })
    @ApiQuery({
        name: 'role',
        enum:Role,
        required: false,
    })
     async issueCredentialRecords(
         @Param('connection_id') connection_id:string,
         @Query('state') state:string,
         @Query('role') role:string,
      
     ){
         return this.issueCredentialsService.getCredentialRecords(connection_id);
     }





    

 }