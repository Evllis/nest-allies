import { applyDecorators, SetMetadata } from '@nestjs/common'
import { API_AUTH_KEY } from '/@/constants'

/**
 * 自定义API守卫装饰器
 */
export const ApiAuth = () => {
    return applyDecorators(SetMetadata(API_AUTH_KEY, true))
}
