import { ApiProperty } from "@nestjs/swagger";

export class issueCredentialDto{

    @ApiProperty({'example': ''})
    connection_id: string;

    @ApiProperty({'example': ''})
    cred_def_id: string;

    @ApiProperty({ 'example': {
        "@type": "issue-credential/1.0/credential-preview",
        "attributes":[
            {
                "mime-type":"text/plain",
                "name":"name",
                "value":"value"

            }
        ]

    }})
    credential_proposal: object;
    
    @ApiProperty({'example': ''})
    issuer_did: string;

    @ApiProperty({'example': ''})
    schema_id: string;

    schema_issuer_did: string;
    
}