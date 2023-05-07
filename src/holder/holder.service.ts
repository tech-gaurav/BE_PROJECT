import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';
import { issueCredentialDto} from '../dtos/issue-credential.dto'
@Injectable()
export class HolderService {

  constructor(
      private readonly httpService:HttpService
  ){
  }

}  