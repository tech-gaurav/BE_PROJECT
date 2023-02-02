import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';
import { CreateCredentialDefinitionDto } from '../dtos/create-credential-definition.dto'

@Injectable()
export class CredentialDefinitionService {

  constructor(
      private readonly httpService:HttpService
  ){
  }

  async createCredDef( createCredDef : CreateCredentialDefinitionDto){

    let url =  `${'http://192.168.43.184:9001'}${'/credential-definitions'}`

    let payload = {
        schema_id: createCredDef.schema_id,
        support_revocation: createCredDef.support_revocation,
        tag: createCredDef.tag
        //revocation_registry_size: 100
    }

     console.log(" Paylod :::: ",payload)
    try{    
              return await this.httpService.post(url,payload)
              .pipe(
                map(response=>response.data)
              )
    }
    catch(error){
        console.error(" Error in create cred def ::::: ",error);
    }

  }


}  