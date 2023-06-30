import { Body, Controller, Get, Post } from '@nestjs/common';
import { HolderService } from './holder.service';

import { ApiTags } from '@nestjs/swagger';



@Controller('holder')
 export class HolderController {
     constructor(private readonly holderService:HolderService){ }


    

 }