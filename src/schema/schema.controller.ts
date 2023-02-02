import { Body, Controller, Get, Post } from '@nestjs/common';
import { SchemaService } from "./schema.service";
import {SchemaModule } from "./schema.module";
import { CreateSchemaDto } from "../dtos/create-schema.dto";
import { ApiTags } from '@nestjs/swagger';



@Controller('schema')
 export class SchemaController {
     constructor(private readonly schemaService:SchemaService){ }



     @Post('/create-schema')                ///////////    Create schema
     @ApiTags('schema')
     createCredentialDefinition(
         @Body() schema : CreateSchemaDto
     ){
         return this.schemaService.createSchema(schema);
     }

    

 }