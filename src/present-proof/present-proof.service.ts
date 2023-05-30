import { Injectable } from "@nestjs/common";
import { PresentProofController } from "./present-proof.controller";
import {HttpService} from '@nestjs/axios';
import { map } from 'rxjs';


@Injectable()
export class PresentProofService{

    constructor(
        private readonly httpService:HttpService
    ){}


async presentProof(presentProofData){

    let proposalData={
         "comment": "proof",
         "auto_present":true,
         "trace":true,
         "connection_id": presentProofData.connection_id,
         "presentation_proposal":  {
            "@type": "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/present-proof/1.0/presentation-preview",
            "attributes": [
              {
                "cred_def_id": presentProofData.credDefId,
                "mime-type": "text/plain",
                "name": "name",
                "value": presentProofData.name
              },
              {
                "cred_def_id": presentProofData.credDefId,
                "mime-type": "text/plain",
                "name": "dob",
                "value": presentProofData.dob
              },
              {
                "cred_def_id": presentProofData.credDefId,
                "mime-type": "text/plain",
                "name": "gender",
                "value": presentProofData.gender
              },
              {
                "cred_def_id": presentProofData.credDefId,
                "mime-type": "text/plain",
                "name": "address",
                "value": presentProofData.address
              }

            ],
            "predicates": [],
            
          }
          
    }



    const url: string = `${process.env.IP}:${presentProofData.userPort}${'/present-proof/send-proposal'}`;

    try {
        return await this.httpService.post(url,proposalData)
        .pipe(
            map(response=>response.data)
        )
    } catch (error) {
        console.log(`error in send credential: ${error}`);
        throw error
    }
    
}




///////////////////////////
 async getPresentProofRecords(getPresentProofData){

    const url: string = `${process.env.IP}:${getPresentProofData.userPort}${'/present-proof/records?state=presentation_acked'}`;

    try {
        return await this.httpService.post(url)
        .pipe(
            map(response=>response.data)
        )
    } catch (error) {
        console.log(`error in send credential: ${error}`);
        throw error
    }
 }




}