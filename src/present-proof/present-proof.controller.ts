import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PresentProofService } from "./present-proof.service";

@Controller('present-proof')
export class PresetnProofController{

constructor(
private readonly presentProofService:PresentProofService

){}

@Post('/send-proposal')
@ApiTags('present-proof')
presentProof(
    @Body() presentProofData
){
    return this.presentProofService.presentProof(presentProofData)

}



//get verificaction records
@Post('/records')
@ApiTags('present-proof')
getPresentProofRecords(
    @Body() getPresentProofData
){
    return this.presentProofService.getPresentProofRecords(getPresentProofData)
}


}