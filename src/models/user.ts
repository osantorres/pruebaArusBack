import { Schema, model } from 'mongoose'

interface IUser {
    username: string
    password: string
    role: 'admin' | 'support'
}

const schema = new Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'support'],
        default: 'admin',
        required: true,
    },
})

const UserModel = model<IUser>('User', schema)

export { UserModel }