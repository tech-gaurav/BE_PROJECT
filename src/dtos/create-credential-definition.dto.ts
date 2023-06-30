import { ApiProperty } from '@nestjs/swagger';

export class CreateCredentialDefinitionDto {

    @ApiProperty({ 'example': 'WgWxqztrNooG92RXvxSTWv:2:schema_name:1.0' })
    // tslint:disable-next-line: variable-name
    schema_id: string;

    @ApiProperty({ 'example': 'default' })
    tag: string;

    @ApiProperty()
    // tslint:disable-next-line: variable-name
    support_revocation: boolean;

    // @ApiProperty()
    // support_auto_issue: boolean;

    // @ApiProperty()
    // revocation_registry_size: 0

}
