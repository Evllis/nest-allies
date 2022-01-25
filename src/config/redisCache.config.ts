const config = require('config')

import { RedisType } from './types.d'

const redis = config.get('server').redis

export const RedisCacheConfig: RedisType = {
    // 端口号
    port: redis.port,
    // 服务器地址
    host: redis.host,
    // 库名
    db: redis.db,
    // 密码
    password: redis.password,
    // 缓存1分钟
    redisEXSecond: redis.ex
}
