import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import * as express from 'express'

import { logger } from '/@/middleware/logger.middleware'

export const IS_DEV = process.env.NODE_ENV !== 'production'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.use(express.json()) // For parsing application/json
    app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded
    app.use(logger)
    // 全局路由前缀
    app.setGlobalPrefix('nest-allies')
    await app.listen(4000)
}
bootstrap()
