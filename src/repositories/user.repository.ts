import { Repository, EntityRepository, Brackets } from 'typeorm';
import {User} from '../entities/user.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async getUser(uEmail:string,uPassword:string){

        try{
        
            const userData = await this.createQueryBuilder('User')
            .select()

            console.log(userData);

            return userData;

        }
        catch(err){
console.log(err)
        }

    }
}