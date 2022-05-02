import { NextFunction, Request, Response } from 'express'
import { ServerInfo, PurgeServer, AddFile, CreateServer, GetAllServers } from '../use_cases/Server'

const serverInfo = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {servName} = req.body
        const result = await ServerInfo(servName)
        res.status(200).json(
            {result}
        )
    } catch (error) {
        if(error instanceof Error)    {
        res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json(error)
        }
    }
}
const getAllServers = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const result = await GetAllServers()
        res.status(200).json(
            {result}
        )
    } catch (error) {
        if(error instanceof Error)    {
        res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json(error)
        }
    }
}

const purgeServer = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {servName, elim} = req.body
        const result = await PurgeServer(servName, elim)
        res.status(200).json(
            {result}
        )
    } catch (error) {
        if(error instanceof Error)    {
        res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json(error)
        }
    }
}
const addFile = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {servName, size} = req.body
        const result = await AddFile(servName, size)
        res.status(200).json(
            {result}
        )
    } catch (error) {
        if(error instanceof Error)    {
        res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json(error)
        }
    }
}

const createServer = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {ip, servName} = req.body
        const result = await CreateServer(ip, servName)
        res.status(200).json(
            {result}
        )
    } catch (error) {
        if(error instanceof Error)    {
        res.status(500).json({message:error.message})
        }
        else{
            res.status(500).json(error)
        }
    }
}

export {serverInfo, getAllServers, purgeServer, addFile, createServer}