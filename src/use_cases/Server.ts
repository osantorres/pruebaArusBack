import { ServerModel } from "../models/server"
import { v4 as uudiV4 } from 'uuid'
import { TokenModel } from "../models/token"

const ServerInfo = async (servName:string)=>{
    const server = await ServerModel.findOne({servName}).exec()

    if(servName == server?.servName){
        return server
    }
    else{
        throw new Error("nombre no existe")   
    }
}
const GetAllServers = async ()=>{
    const server = await ServerModel.find().exec()
        return server

}

const PurgeServer = async (servName:string, elim:number)=>{
    const server = await ServerModel.findOne({servName}).exec()

    if(server && server?.capUse > 90){
        server.capUse -= elim
        await server.save()
        if(server && server?.capUse > 90){
            throw new Error("no se ha purgado lo suficiente") 
        }
        return true
    }
    else{
        throw new Error("no se debe purgar")   
    }
}

const AddFile = async (servName:string, size:number)=>{
    const server = await ServerModel.findOne({servName}).exec()
    if(server){
        var percent = size*100/(server.capacity)
        if(server?.capUse + percent < 100){
            server.capUse += percent
            console.log(server.capUse, percent)
            await server.save()
            if(server?.capUse > 90){
                return {alerta:true}
            }
            return {alerta:false}
        }
        else{
            throw new Error("capacidad excedida")
        }
    }
    else{
        throw new Error("nombre no existe")   
    }
}
const CreateServer = async (ip: string, servName: string)=>{
    const server = await ServerModel.findOne({servName}).exec()
    if(!server){
        const newServer = new ServerModel({ip, servName})
        newServer.save()
        return true
    }
    else{
        throw new Error("ya existe")   
    }
}

export{ServerInfo, GetAllServers, PurgeServer, AddFile, CreateServer}