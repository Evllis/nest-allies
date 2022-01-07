export interface databaseType {
    dialect: string
    host: string
    port: number
    database: string
    username: string
    password: string
    connectionLimit: number
}

export interface AdminType {
    adminPath: string
    defaultAccount: string
    defaultPassword: string
    tokenExpire: number
}

export interface BaseType {
    port: number
}

export interface RedisType {
    redisEXSecond: number
}
