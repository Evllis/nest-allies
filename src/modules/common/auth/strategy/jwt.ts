import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { jwtConstants } from '../constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // 配置从头信息里获取token
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 忽略过期: false
            ignoreExpiration: false,
            // secret必须与签发jwt的secret一样
            secretOrKey: jwtConstants.secret
        })
    }

    // JWT验证 - Step 4: 被守卫调用
    async validate(payload: any) {
        return {
            userId: payload.sub,
            username: payload.username,
            realname: payload.realname,
            role: payload.role
        }
    }
}
