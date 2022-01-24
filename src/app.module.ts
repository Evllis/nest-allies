import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { APP_INTERCEPTOR, APP_PIPE, APP_FILTER } from '@nestjs/core'

/**
 * 拦截器
 */
// import { LoggingInterceptor } from '/@/interceptors/logging/logging.interceptor'
import { TransformInterceptor } from '/@/interceptors/transform/transform.interceptor' // 使用拦截器打印出参

/**
 * 管道
 */
import { ValidationPipe } from '/@/pipe/validation.pipe'

/**
 * 过滤器
 */
import { HttpExceptionFilter } from '/@/filters/http-exception.filter' // 过滤处理 HTTP 异常
import { AllExceptionsFilter } from '/@/filters/any-exception.filter'

import { IndexModule } from './modules/index.module'

@Module({
    imports: [IndexModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor
        },
        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: LoggingInterceptor
        // },
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        },
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter
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
