import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import * as express from 'express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { logger } from '/@/middleware/logger.middleware'

export const IS_DEV = process.env.NODE_ENV !== 'production'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(express.json()) // For parsing application/json
    app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded
    app.use(logger)

    // 全局路由前缀
    // app.setGlobalPrefix('api')

    // 配置swagger
    const options = new DocumentBuilder()
        .addBearerAuth() // 开启 BearerAuth 授权认证
        .setTitle('Nest Allies接口文档')
        .setDescription('这是Nest Allies接口文档描述')
        .setVersion('1.0')
        .addTag('test')
        .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api-doc', app, document)

    await app.listen(4000)
}
bootstrap()
