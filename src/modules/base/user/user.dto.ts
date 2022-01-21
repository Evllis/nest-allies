import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class RegisterInfo {
    @IsNotEmpty({ message: '用户名不能为空' })
    readonly accountName: string | number

    @IsNotEmpty({ message: '真实姓名不能为空' })
    @IsString({ message: '真实姓名必须是字符串类型' })
    readonly realName: string

    @IsNotEmpty({ message: '密码不能为空' })
    readonly password: string

    @IsNotEmpty({ message: '确认密码不能为空' })
    readonly repassword: string

    @IsNotEmpty({ message: '手机号不能为空' })
    @IsNumber()
    readonly mobile: string

    readonly role?: string | number
}
