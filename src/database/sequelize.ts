import { Sequelize } from 'sequelize-typescript'
import { Dialect } from 'sequelize'
import { DatabaseConfig } from '/@/config/index.config'

const sequelize = new Sequelize(DatabaseConfig.database, DatabaseConfig.username, DatabaseConfig.password || null, {
    // 自定义主机, 默认值: localhost
    host: DatabaseConfig.host,
    // 自定义端口号, 默认: 3306
    port: DatabaseConfig.port,
    dialect: DatabaseConfig.dialect as Dialect,
    pool: {
        min: 0,
        // 连接池中最大连接数量
        max: 10,
        acquire: 30000,
        // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
        idle: 10000
    },
    // 东八时区
    timezone: '+08:00'
})

/**
 * 测试数据库
 */
sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err: any) => {
        // 数据库连接失败时打印
        console.log(err)
        throw err
    })

export default sequelize
