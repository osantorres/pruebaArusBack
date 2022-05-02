import { Schema, model } from 'mongoose'

interface IServer {
    ip: string
    servName: string
    capacity: number
    capUse : number
}

const schema = new Schema<IServer>({
    ip: { type: String, required: true },
    servName: { type: String, required: true },
    capacity: {type: Number, default: 200, required: true},
    capUse: {
        type: Number,
        max: 100,
        min: 0,
        default: 0,
        required: true
    },
})

const ServerModel = model<IServer>('Server', schema)

export { ServerModel }