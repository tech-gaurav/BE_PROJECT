import { ApiProperty } from "@nestjs/swagger";

export class CreateSchemaDto {

    @ApiProperty({ 'example': '' })
    schema?: any;

    @ApiProperty({ 'example': '1.0' })
    schema_version: string;

    @ApiProperty({ 'example': '' })
    schema_name: string;

    @ApiProperty({ 'example': ['',''] })
    attributes: string[];

}