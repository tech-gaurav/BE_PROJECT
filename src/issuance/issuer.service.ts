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


  async sendCredential(credentialData){

    console.log("Inside send cred ****", credentialData)

    var issueData = {
      // "schema_id":"MVR3rpvmBanZcUTGLYsLTy:2:aadhar:1.0",
        "cred_def_id": credentialData.cred_def_id,
        "connection_id": credentialData.connection_id,
        "credential_proposal" : {
            "@type": "issue-credential/1.0/credential-preview",
            "attributes": [
                {
                  "mime-type": "text/plain",
                  "name": "name",
                  "value": credentialData.name
                },
                {
                  "mime-type": "text/plain",
                  "name": "dob",
                  "value": credentialData.dob
                },
                {
                  "mime-type": "text/plain",
                  "name": "gender",
                  "value": credentialData.gender
                },
                {
                  "mime-type": "text/plain",
                  "name": "address",
                  "value": credentialData.address
                }
              ]
        }

      

        // schema_name: schemaName,
        // trace,
        // schema_issuer_did: schemaIssuerDid,
        // credential_proposal: credentialProposal,
        // issuer_did: issuerDid,
        // schema_version: schemaVersion,
        //schema_id: issueCredentialDto.schema_id,
        //auto_remove: autoRemove,
    };

    let jsonData = JSON.stringify(issueData)

    console.log("Json Data ::::::   ",jsonData)

    const url: string = `${process.env.IP}:${credentialData.userPort}${'/issue-credential/send'}`;

    console.log("url for send credentials ::: ",url)

    try {
        return await this.httpService.post(url,jsonData,{ headers: { 'Content-Type' : 'application/json' } })
        .pipe(
            map(response=>response.data)
        )
    } catch (error) {
        console.log(`error in send credential: ${error}`);
        throw error
    }
    
  }



  async getCredentialRecords(getCredRecordData){

     console.log("Inside get credenial records ::::",getCredRecordData);
    

    //let url: string = `${process.env.IP}:${getCredRecordData.userPort}${'/issue-credential/records?state=credential_acked'}`;
    let url: string = `${process.env.IP}:${getCredRecordData.userPort}${'/credentials'}`;

    console.log("Url for get credential records :::::  ",url)

    try{
        return await this.httpService.get(url)
        .pipe(
            map(response=>response.data)
        )
    }
    catch(error){
        console.log(`error in get credential: ${error}`);
        throw error
    }
          
  }


}  