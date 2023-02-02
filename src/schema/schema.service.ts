import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';
import { CreateSchemaDto } from '../dtos/create-schema.dto'

@Injectable()
export class SchemaService {

  constructor(
      private readonly httpService:HttpService
  ){
  }

  async createSchema( schema : CreateSchemaDto){

    let url =  `${'http://192.168.43.184:9001'}${'/schemas'}`

    const createSchema = new CreateSchemaDto();      // JSON to create schema for Cloud Agent
            createSchema.schema_name = schema.schema_name;
            createSchema.schema_version = schema.schema_version;
            createSchema.attributes = schema.attributes;
    console.log(" Create schema payload :::: ",createSchema)

    try{    
              return await this.httpService.post(url,createSchema)
              .pipe(
                map(response=>response.data)
              )
    }
    catch(error){
        console.error(" Error in create schema ::::: ",error);
    }

  }


}  