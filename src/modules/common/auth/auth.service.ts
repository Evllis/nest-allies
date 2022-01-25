import { Injectable } from '@nestjs/common'
import { UserService } from '/@/modules/base/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { encryptoPassword } from '/@/utils/cryptogram'
import { RedisInstance } from '/@/database/redis'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    /**
     * JWT验证 - Step 2: 校验用户信息
     * @param { String } username 用户名
     * @param { String } password 用户密码
     * @returns { Promise<any> }
     */
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username)
        if (user) {
            const hashPassword = user.password
            const salt = user.salt
            // 通过密码盐, 加密传参, 再与数据库里的进行比较, 判断是否相等
            const hashedPassword = encryptoPassword(password, salt)
            if (hashPassword === hashedPassword) {
                // 密码正确
                return {
                    code: 1,
                    user
                }
            } else {
                // 密码错误
                return {
                    code: 2,
                    user: null
                }
            }
        }
        // 查无此人
        return {
            code: 3,
            user: null
        }
    }

    /**
     * JWT验证 - Step 3: 处理jwt签证
     */
    async certificate(user: any) {
        const payload = { username: user.username, sub: user.userID, realName: user.realName, role: user.role }
        try {
            const token = this.jwtService.sign(payload)
            // 实例化 redis
            const redis = await RedisInstance.initRedis(`auth.certificate`, 0)
            // 将用户信息和 token 存入 redis, 并设置失效时间, 语法: [key, seconds, value]
            await redis.setex(`${user.userID}-${user.username}`, 300, `${token}`)
            return {
                code: 200,
                data: {
                    token
                },
                message: `登录成功`
            }
        } catch (err) {
            return {
                code: 600,
                message: `账号或密码错误`
            }
        }
    }
}
