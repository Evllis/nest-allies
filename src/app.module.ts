import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'

import { LoggingInterceptor } from '/@/interceptors/logging/logging.interceptor'
import { ValidationPipe } from '/@/pipe/validation/validation.pipe'
import { TransformInterceptor } from '/@/interceptors/transform/transform.interceptor'

import { IndexModule } from './modules/index.module'

@Module({
    imports: [IndexModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        },
        // 全局使用管道(数据校验)
        {
            provide: APP_PIPE,
            useClass: ValidationPipe
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ClassSerializerInterceptor
        }
    ]
})
export class AppModule {}
