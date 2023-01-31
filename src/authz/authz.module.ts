import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthzController } from './authz.controller';
import { AuthzService } from './authz.service';
import {UserRepository} from '../repositories/user.repository'

@Module({
  imports:[
    TypeOrmModule.forFeature([
       UserRepository
    ])
  ],
  controllers: [AuthzController],
  providers: [AuthzService],
})
export class AuthzModule {}
