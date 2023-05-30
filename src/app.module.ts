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
import{AgentController} from './agent/agent.controller';
import { AgentService } from "./agent/agent.service";
import {PresentProofController} from "./present-proof/present-proof.controller";
import {PresentProofService} from "./present-proof/present-proof.service";


import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
       HttpModule

  ],
  controllers: [AppController,ConnectionController,IssueCredentialsController,CredentialDefinitionController,SchemaController,AgentController,PresentProofController],
  providers: [AppService,ConnectionService,IssueCredentialsService,CredentialDefinitionService,SchemaService,AgentService,PresentProofService],
})
export class AppModule {}
