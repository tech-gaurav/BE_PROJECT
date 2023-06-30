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

  async getSchemaById(schemaData:any ){

    let url =`${process.env.IP}:${schemaData.userPort}${'/schemas/'}${schemaData.schemaId}`
    
       
  

    try{    
              return await this.httpService.post(url)
              .pipe(
                map(response=>response.data)
              )
    }
    catch(error){
        console.error(" Error in create schema ::::: ",error);
    }

  }


}  