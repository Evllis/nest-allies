import { IsNotEmpty, IsString, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class GetInfo {
    @ApiProperty({ description: '用户名', example: 'allies' })
    @IsNotEmpty({ message: '用户名不能为空' })
    readonly username: string
}

export class LoginInfo {
    @ApiProperty({ description: '用户名', example: 'allies' })
    @IsNotEmpty({ message: '用户名不能为空' })
    readonly username: string

    @ApiProperty({ description: '密码', example: '123456' })
    @IsNotEmpty({ message: '密码不能为空' })
    readonly password: string
}

export class RegisterInfo {
    @ApiProperty()
    @IsNotEmpty({ message: '用户名不能为空' })
    readonly username: string

    @ApiPropertyOptional({ description: '真实姓名' })
    @IsOptional()
    // @IsNotEmpty({ message: '真实姓名不能为空' })
    @IsString({ message: '真实姓名必须是字符串类型' })
    readonly realname: string

    @ApiProperty()
    @IsNotEmpty({ message: '密码不能为空' })
    readonly password: string

    @ApiProperty()
    @IsNotEmpty({ message: '确认密码不能为空' })
    readonly repassword: string

    @ApiProperty()
    @IsNotEmpty({ message: '手机号不能为空' })
    @IsString()
    readonly mobile: string

    // ApiPropertyOptional 可选参数装饰器
    @ApiPropertyOptional({
        description: '[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）'
    })
    readonly role?: string | number
}
