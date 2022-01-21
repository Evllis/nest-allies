import * as path from 'path'
const baseLogPath = path.resolve(__dirname, '../../../logs') // 日志要写入哪个目录

const log4jsConfig = {
    appenders: {
        console: {
            type: 'console' // 会打印到控制台
        },
        info: {
            type: 'dateFile', // 会写入文件，并按照日期分类
            filename: `${baseLogPath}/info/info.log`, // 日志文件名，会命名为：access.20200320.log
            alwaysIncludePattern: true,
            pattern: 'yyyy-MM-dd',
            daysToKeep: 60,
            numBackups: 3,
            compress: true,
            keepFileExt: true // 是否保留文件后缀
        },
        access: {
            type: 'logLevelFilter', //定义输出到文件，日志的等级
            appender: 'info', //对应定义的 appenders 里面的 trace任务
            level: 'info', //输出到任务文件（log/access.log）的 日志最低等级
            maxLevel: 'info' //  输出到任务文件（log/access.log）的 日志最高等级
        },
        // app: {
        //     type: 'dateFile',
        //     filename: `${baseLogPath}/app-out/app.log`,
        //     alwaysIncludePattern: true,
        //     layout: {
        //         type: 'pattern',
        //         pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
        //     },
        //     // 日志文件按日期（天）切割
        //     pattern: 'yyyyMMdd',
        //     daysToKeep: 60,
        //     // maxLogSize: 10485760,
        //     numBackups: 3,
        //     keepFileExt: true
        // },
        errorFile: {
            type: 'dateFile',
            filename: `${baseLogPath}/errors/error.log`,
            alwaysIncludePattern: true,
            layout: {
                type: 'pattern',
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
            },
            // 日志文件按日期（天）切割
            pattern: 'yyyy-MM-dd',
            daysToKeep: 60, // 日志保留天数
            // maxLogSize: 10485760,
            numBackups: 3,
            keepFileExt: true
        },
        error: {
            type: 'logLevelFilter',
            level: 'ERROR',
            appender: 'errorFile'
        }
    },
    categories: {
        default: {
            appenders: ['console', 'info', 'error'],
            level: 'debug'
        },
        info: { appenders: ['access', 'console'], level: 'info' },
        error: { appenders: ['error', 'console'], level: 'error' }
    },
    pm2: true, // 使用 pm2 来管理项目时，打开
    pm2InstanceVar: 'INSTANCE_ID' // 会根据 pm2 分配的 id 进行区分，以免各进程在写日志时造成冲突
}

export default log4jsConfig
