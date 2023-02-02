import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import {ConnectionController} from './connection/connections.controller';
import {IssueCredentialsController} from './issuance/issuer.controller';
import { CredentialDefinitionController } from './credential-definition/credential-definition.controller';
import { CredentialDefinitionService } from "./credential-definition/credential-definition.service";
import { SchemaController} from "./schema/schema.controller";
import { SchemaService } from "./schema/schema.service";

import {ConnectionService} from './connection/connections.service';
import {IssueCredentialsService} from './issuance/issuer.service';
import { AppService } from './app.service';


import {TypeOrmModule} from '@nestjs/typeorm'
import{User} from './entities/user.entity'
import {AuthzController} from './authz/authz.controller'
import {AuthzService} from './authz/authz.service'
import {UserRepository} from './repositories/user.repository'
import {AuthzModule} from './authz/authz.module'
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Gaurav#123',
      database: 'Verifiable_Cred',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthzModule,
    HttpModule
    ,
    TypeOrmModule.forFeature([
      UserRepository
    ])

  ],
  controllers: [AppController,ConnectionController,AuthzController,IssueCredentialsController,CredentialDefinitionController,SchemaController],
  providers: [AppService,ConnectionService,AuthzService,IssueCredentialsService,CredentialDefinitionService,SchemaService],
})
export class AppModule {}
