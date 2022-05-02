import { Schema, model } from 'mongoose'

interface IToken {
    idUser: string
    token: string
    active: boolean
}

const schema = new Schema<IToken>({
    idUser: { type: String, required: true },
    token: { type: String, required: true },
    active: { type: Boolean, default: true },
})

const TokenModel = model<IToken>('Token', schema)

export { TokenModel }