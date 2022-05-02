import { NextFunction, Request, Response } from 'express'
import { Login } from '../use_cases/Login'

const login = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {username, password} = req.body
        const result = await Login(username,password)
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

export {login}