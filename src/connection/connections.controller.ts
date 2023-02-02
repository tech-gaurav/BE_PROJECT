import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConnectionService } from './connections.service'
import { ApiTags } from '@nestjs/swagger';
import { ConnectionDto } from "../dtos/connection.dto";
import { RecieveInvitationDto} from '../dtos/recieve-invitation.dto'



@Controller('connections')
 export class ConnectionController {
     constructor(private readonly connectionService:ConnectionService){ }


     @Post('/create-invitation')
     @ApiTags('connections')          //// create connection invitation between issuer ,holder and verifier
     async createConnectionInvitation(
        @Body() connectionData : ConnectionDto
     ){
         return this.connectionService.createConnectionInvitation(connectionData);
     }


     @Post('/recieve-invitation')
     @ApiTags('connections')
     async(
         @Body() invitation:RecieveInvitationDto
     ){
         return this.connectionService.recieveConnectionInvitation(invitation);
     }



 }