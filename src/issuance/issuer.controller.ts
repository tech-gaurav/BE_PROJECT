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
         @Body() credentialData
     ){
         return this.issueCredentialsService.sendCredential(credentialData);
     }


     @Post('/get-cred-records')    //// for holder side
     @ApiTags('issue-credentials')
     async issueCredentialRecords(
        @Body() getCredRecordData 
      
     ){
         console.log("inside send credential controller:::::",getCredRecordData)
         return this.issueCredentialsService.getCredentialRecords(getCredRecordData);
     }





    

 }