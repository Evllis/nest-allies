const config = require('config')

import { databaseType } from './types.d'

const database = config.get('server').database

export const DatabaseConfig: databaseType = {
    dialect: database.dialect,
    host: database.host,
    port: parseInt(database.port, 10) || 3306,
    database: database.database,
    username: database.username,
    password: database.password,
    connectionLimit: database.connectionLimit
}
