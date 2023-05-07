import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgentService } from './agent.service';

import { ApiTags } from '@nestjs/swagger';
import { exec } from 'child_process';


@Controller('agent')
 export class AgentController {
     constructor(private readonly agentService:AgentService){ }


     @Post('/agent-up')
     @ApiTags('agent')          //// create connection invitation between issuer ,holder and verifier
     async agentUp(
     ){
         return this.agentService.agentUp();
     }

 }
