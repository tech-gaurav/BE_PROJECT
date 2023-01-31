import { Controller, Get, Post } from '@nestjs/common';
import { AuthzService } from './authz.service'
import { ApiTags } from '@nestjs/swagger';



@Controller('auth')
 export class AuthzController {
     constructor(private readonly authService:AuthzService){ }

     @Get('/')
     @ApiTags('auth')
     userLogin(){
         return this.authService.userLogin();
     }

     @Post('/login')
     @ApiTags('auth')
     async login(){
         console.log("auth controller")
        return this.authService.userLogin();
  }

 }