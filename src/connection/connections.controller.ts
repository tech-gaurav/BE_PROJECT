import { Controller, Get, Post } from '@nestjs/common';
import { ConnectionService } from './connections.service'
import { ApiTags } from '@nestjs/swagger';



@Controller('connections')
 export class ConnectionController {
     constructor(private readonly connectionService:ConnectionService){ }


     @Post('/')
     @ApiTags('connections')
     async createConnectionInvitation(){
         return this.connectionService.createConnectionInvitation();
     }

 }