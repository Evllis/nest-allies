import { Controller, Get, Post, Query, Body, HttpCode, UseGuards, UsePipes } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'
import { AuthService } from '/@/modules/common/auth/auth.service'
import { ValidationPipe } from '/@/pipe/validation.pipe'
import { RegisterInfo, LoginInfo, GetInfo } from './user.dto'
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger'

// Swagger JWT验证
@ApiBearerAuth()
// ApiTags 接口分类装饰器
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new ValidationPipe())
    @Get('getUserInfo')
    @HttpCode(200)
    async getUserInfo(@Query() query: GetInfo) {
        return await this.userService.getUserInfo(query.username)
    }

    // 使用JWT进行验证
    // @UseGuards(AuthGuard('jwt'))
    @UsePipes(new ValidationPipe())
    @Post('login')
    @ApiBody({
        description: '用户登录',
        type: LoginInfo
    })
    @HttpCode(200)
    async login(@Body() loginParams: LoginInfo) {
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

    // 使用JWT进行验证
    // @UseGuards(AuthGuard('jwt'))
    @UsePipes(new ValidationPipe())
    @Post('register')
    @HttpCode(200)
    async register(@Body() body: RegisterInfo) {
        return await this.userService.register(body)
    }
}
