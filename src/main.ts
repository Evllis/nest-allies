import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

export const IS_DEV = process.env.NODE_ENV !== 'production'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // 全局路由前缀
    app.setGlobalPrefix('nest-allies')
    await app.listen(4000)
}
bootstrap()
