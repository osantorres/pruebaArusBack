import { UserModel } from "../models/user"
import { v4 as uudiV4 } from 'uuid'
import { TokenModel } from "../models/token"

const Login = async (username:string, password:string)=>{
    const user = await UserModel.findOne({username}).exec()
    console.log(user)
    if(username == user?.username && password == user?.password){
        const token = new TokenModel({idUser:user.id, token:uudiV4()})
        await token.save()
        return {token:token.token, role:user.role}
    }
    else{
        throw new Error("credenciales erroneas")   
    }
}

export{Login}