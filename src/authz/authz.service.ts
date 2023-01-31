import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from '../entities/user.entity';
import {UserRepository} from '../repositories/user.repository'

@Injectable()
export class AuthzService {

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository:UserRepository
  ){}


  async userLogin(){
     try{
       console.log("inside auth service");
       
       const user=await this.userRepository.findOne({where:{email:'abc@gmail.com'}})
       console.log(user);
       
       return user;
     } 
     catch(err){
        console.log(err)
     }   

}

}
