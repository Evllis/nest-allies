import { Logger } from '/@/utils/log4js'
import { RedisCacheConfig } from '/@/config/redisCache.config'

const Redis = require('ioredis')

let n = 0
// 记录 redis 实例索引
const redisIndex = []
// 存储 redis 实例
const redisList = {}

export class RedisInstance {
    static async initRedis(method: string, db = 0) {
        const isExist = redisIndex.some((x) => x === db)
        if (!isExist) {
            Logger.debug(`[Redis ${db}]来自 ${method} 方法调用，Redis 实例化了 ${++n} 次`)
            redisList[db] = new Redis({ ...RedisCacheConfig, db })
            redisIndex.push(db)
        } else {
            Logger.debug(`[Redis ${db}]来自 ${method} 方法调用`)
        }
        return redisList[db]
    }
}
