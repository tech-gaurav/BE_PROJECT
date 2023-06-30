import { Injectable } from "@nestjs/common";
import { PresentProofController } from "./present-proof.controller";
import {HttpService} from '@nestjs/axios';
import { map } from 'rxjs';
import { json } from "express";


@Injectable()
export class PresentProofService{

    constructor(
        private readonly httpService:HttpService
    ){}


async presentProof(presentProofData){


  console.log("presentproof data", presentProofData)

  

    let proposalData={
         "comment": "proof",
         "auto_present":true,
         "trace":true,
         "connection_id": presentProofData.connection_id[0].connection_id,
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


    let jsonData = JSON.stringify(proposalData)

    console.log(jsonData);

    const url: string = `${process.env.IP}:${presentProofData.userPort}${'/present-proof/send-proposal'}`;

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




///////////////////////////
 async getPresentProofRecords(getPresentProofData){

  console.log("Inside get present proof records",getPresentProofData)

    const url: string = `${process.env.IP}:${getPresentProofData.userPort}${'/present-proof/records'}`;
    console.log("url for presentation records",url)

    try {
        return await this.httpService.get(url)
        .pipe(
            map(response=>response.data)
        )
    } catch (error) {
        console.log(`error in send credential: ${error}`);
        throw error
    }
 }




}