import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { map, Observable } from 'rxjs';

@Injectable()
export class ConnectionService {


  constructor(
    private readonly httpService: HttpService,
  )
  {}
  connectionCheck(): string {
    return 'Connection check';
  }


  async createConnectionInvitation(){

    try {
      let data;
     // const result: ResponseService = new ResponseService();
      //const platformOrgData = await this.organizationRepository.findOne({ id: 1 });
 
       const auto_accept = true;
       const _public = true;
              const params: object = { auto_accept, _public, multi_use: true };
              let url: string = `${'https://localhost:5000'}${'/connections/create-invitation'}`;
              Object.keys(params).forEach((element) => {
                  //this.logger.debug(`params[element] : ${params[element]}`)
                  const append: string = url.includes('?') ? '&' : '?';
                  url = (params[element] !== undefined) ?
                      ((element === '_public') ? (url + append + `public=${params[element]}`) : (url + append + element + `=${params[element]}`))
                      : url;
                  console.log(`url created: ${url}`) 
                  
              return this.httpService.post('url')
              .pipe(
                map(response=>response.data)
              )



              })
      }
       catch (error) {
        console.error("Error :::",error) 
        throw error
      }

}




















}
