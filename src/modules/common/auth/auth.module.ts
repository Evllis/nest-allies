import { Module, forwardRef } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '/@/modules/base/user/user.module'

import { LocalStrategy } from './strategy/local'
import { JwtStrategy } from './strategy/jwt'
import { jwtConstants } from './constants'

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt'
        }),
        forwardRef(() =>
            JwtModule.register({
                secret: jwtConstants.secret,
                signOptions: {
                    expiresIn: '8h' // token过期时间
                }
            })
        ),
        forwardRef(() => UserModule)
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
