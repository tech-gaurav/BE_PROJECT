import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PresentProofService } from "./present-proof.service";

@Controller('present-proof')
export class PresetnProofController{

constructor(
private readonly presentProofService:PresentProofService
){}

@Post('/')
@ApiTags('present-proof')
presentProof(
    @Body() {}
){
    return this.presentProofService.presentProof()

}


}