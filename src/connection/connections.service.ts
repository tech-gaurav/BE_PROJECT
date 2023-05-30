import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { map, Observable } from 'rxjs';
import { ConnectionDto } from "../dtos/connection.dto";
import axios from 'axios';

@Injectable()
export class ConnectionService {


  constructor(
    private readonly httpService: HttpService,
  )
  {}
  connectionCheck(): string {
    return 'Connection check';
  }


  async createConnectionInvitation(connectionData){

    try {
      let data;
      console.log("Data incoming ", connectionData.data)
     // const result: ResponseService = new ResponseService();
      //const platformOrgData = await this.organizationRepository.findOne({ id: 1 });

       console.log("create connection invitation call ....")
       const auto_accept = false;
       //const _public = true;
              const params: object = { auto_accept, multi_use: true };
              let url: string = `${process.env.IP}:${connectionData.data}${'/connections/create-invitation'}`;
              Object.keys(params).forEach((element) => {
                  //this.logger.debug(`params[element] : ${params[element]}`)
                  const append: string = url.includes('?') ? '&' : '?';
                  url = (params[element] !== undefined) ?
                      ((element === '_public') ? (url + append + `public=${params[element]}`) : (url + append + element + `=${params[element]}`))
                      : url;
              })

              console.log(`url created: ${url}`) 
                  
            return this.httpService.post(url)
              .pipe(
                map(response=>response.data)
              )

        
      }
       catch (error) {
        console.error("Error :::",error) 
        throw error
      }
 
  }

  async recieveConnectionInvitation(invitationData){
    console.log("--------------",invitationData)
    const urlForRecieveInvitations:string =`${process.env.IP}:${invitationData.userPort}${'/connections/receive-invitation'}`

    try{
      console.log("Inside recieve invitation")
      console.log("URL ::: ",urlForRecieveInvitations)
      return this.httpService.post(urlForRecieveInvitations,invitationData.url)
              .pipe(
                map(
                  response=>response.data
                  )
              )
    }
    catch(error){
      console.log("Error in recieve invitation ::: ",error);
      throw error
    }


  }




















}
