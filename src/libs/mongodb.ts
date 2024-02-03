import { MongoClient } from 'mongodb'

const { MONGO_URL } = process.env

const mongodb = new MongoClient(MONGO_URL)

export const users = mongodb.db().collection('users')

mongodb.connect()

export default mongodb

// index
users.createIndex({ username: 1 }, { unique: true })
