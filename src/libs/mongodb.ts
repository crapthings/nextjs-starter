import { MongoClient } from 'mongodb'

const { MONGO_URL } = process.env

const mongodb = new MongoClient(MONGO_URL)

export const users = mongodb.db().collection('users')
export const administrators = mongodb.db().collection('administrators')
export const files = mongodb.db().collection('files')

mongodb.connect()

export default mongodb

// index
users.createIndex({ username: 1 }, { unique: true })
administrators.createIndex({ username: 1 }, { unique: true })
