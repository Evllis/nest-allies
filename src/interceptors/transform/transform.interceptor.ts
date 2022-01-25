import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
// import { classToPlain } from 'class-transformer'
import { Logger } from '/@/utils/log4js'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.getArgByIndex(1).req
        return next.handle().pipe(
            map((data) => {
                const logFormat = `
                <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                    Request original url: ${req.originalUrl}
                    Method: ${req.method}
                    IP: ${req.ip}
                    User: ${JSON.stringify(req.user)}
                    Response data: ${JSON.stringify(data)}
                <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                `
                Logger.info(logFormat)
                // Logger.access(logFormat)
                // return {
                //     result: classToPlain(data),
                //     code: 0,
                //     message: '请求成功'
                // }
                return data
            })
        )
        // return next.handle().pipe(
        //     map((data: any) => {
        //         return {
        //             result: classToPlain(data),
        //             code: 0,
        //             message: '请求成功'
        //         }
        //     })
        // )
    }
}
