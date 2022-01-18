import { Controller, Post, Body /* UseGuards */ } from '@nestjs/common'
// import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'
import { AuthService } from '/@/modules/common/auth/auth.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @Post('find-one')
    findOne(@Body() body: any) {
        return this.userService.findOne(body.username)
    }

    /**
     * JWT验证 - Step 1: 用户请求登录
     */
    // 使用JWT进行验证
    // @UseGuards(AuthGuard('jwt'))
    @Post('login')
    async login(@Body() loginParams: any) {
        console.log(`JWT验证 - Step 1: 用户请求登录`)
        const authResult = await this.authService.validateUser(loginParams.username, loginParams.password)
        switch (authResult.code) {
            case 1:
                return this.authService.certificate(authResult.user)
            case 2:
                return {
                    code: 600,
                    message: `账号或密码不正确`
                }
            default:
                return {
                    code: 600,
                    message: `查无此人`
                }
        }
    }

    @Post('register')
    async register(@Body() body: any) {
        return await this.userService.register(body)
    }
}
