import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';
import { issueCredentialDto} from '../dtos/issue-credential.dto'
@Injectable()
export class IssueCredentialsService {

  constructor(
      private readonly httpService:HttpService
  ){
  }


  async sendCredential(credentialData:issueCredentialDto){

    const issueData = {
        cred_def_id: credentialData.cred_def_id,
        connection_id: credentialData.connection_id,
        credential_proposal : credentialData.credential_proposal
        // schema_name: schemaName,
        // trace,
        // schema_issuer_did: schemaIssuerDid,
        // credential_proposal: credentialProposal,
        // issuer_did: issuerDid,
        // schema_version: schemaVersion,
        //schema_id: issueCredentialDto.schema_id,
        //auto_remove: autoRemove,
    };


    const url: string = `${'http://192.168.43.184:9001'}${'/issue-credential/send'}`;

    try {
        return await this.httpService.post(url,issueData)
        .pipe(
            map(response=>response.data)
        )
    } catch (error) {
        console.log(`error in send credential: ${error}`);
        throw error
    }
    


  }


}  