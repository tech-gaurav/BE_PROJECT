import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { map, Observable } from 'rxjs';
import { ConnectionDto } from "../dtos/connection.dto";

@Injectable()
export class ConnectionService {


  constructor(
    private readonly httpService: HttpService,
  )
  {}
  connectionCheck(): string {
    return 'Connection check';
  }


  async createConnectionInvitation(connectionDto:ConnectionDto){

    try {
      let data;
     // const result: ResponseService = new ResponseService();
      //const platformOrgData = await this.organizationRepository.findOne({ id: 1 });

       console.log("create connection invitation call ....")
       const auto_accept = true;
       //const _public = true;
              const params: object = { auto_accept, multi_use: true };
              let url: string = `${process.env.IP}:${process.env.ADMIN_PORT}${'/connections/create-invitation'}`;
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

  async recieveConnectionInvitation(invitationData:any){
    const urlForRecieveInvitations:string =`${process.env.IP}:${process.env.ADMIN_PORT}${'/connections/receive-invitation'}`

    try{
      return this.httpService.post(urlForRecieveInvitations,invitationData)
              .pipe(
                map(response=>response.data)
              )
    }
    catch(error){
      console.log("Error in recieve invitation ::: ",error);
      throw error
    }


  }




















}
