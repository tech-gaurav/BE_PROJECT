import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { map } from 'rxjs';
import { exec } from 'child_process';
import * as util from 'util';


@Injectable()
export class AgentService {

  constructor(
      private readonly httpService:HttpService
  ){
  }

  async agentUp(){
   
     try{

        const agentStatus = '/home/gaurav/BE_PROJECT/vc_project/hello.sh';

            const exec = util.promisify(require('child_process').exec);
            const
                {
                    error,
                    stdout,
                    stderr
                } = await exec(agentStatus);

            console.log(`error ::: ${error}`);
            console.log(`stdout ::: ${stdout}`);
            console.log(`stderr ::: ${stderr}`);

            
     }   
     catch(e){
            console.log(e);
     } 
 }
}
