import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';
@Injectable()
export class IssueCredentialsService {

  constructor(
      private readonly httpService:HttpService
  ){
  }


  async sendCredential(){

    // const issueData = {
    //     cred_def_id: issueCredentialDto.cred_def_id,
    //     connection_id: issueCredentialDto.connection_id,
    //     schema_name: schemaName,
    //     trace,
    //     schema_issuer_did: schemaIssuerDid,
    //     credential_proposal: credentialProposal,
    //     issuer_did: issuerDid,
    //     schema_version: schemaVersion,
    //     schema_id: issueCredentialDto.schema_id,
    //     //auto_remove: autoRemove,
    // };


    const url: string = `${'http://localhost:9002'}${'/issue-credential/send'}`;

    try {
        return await this.httpService.post(url,{data:''})
        .pipe(
            map(response=>response.data)
        )
    } catch (error) {
        console.log(`error in send credential: ${error}`);
        throw error
    }
    


  }


}  