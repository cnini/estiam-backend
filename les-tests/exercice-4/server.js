require('dotenv').config()
const { MongoClient } = require('mongodb')

const client = new MongoClient(process.env.URI)

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases()

    console.log("Databases:")
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

async function run() {

    try {
        await client.connect()
        console.log('Connected to MongoDB.\n')
        await listDatabases(client)
    } catch(err) {
        console.error(err)
    } finally{
        await client.close()
    }

}

module.exports = {run, client};