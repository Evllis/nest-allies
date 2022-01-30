import { Injectable } from '@nestjs/common'
import * as Sequelize from 'sequelize'
import sequelize from '/@/database/sequelize'

import { makeSalt, encryptoPassword } from '/@/utils/cryptogram'

@Injectable()
export class UserService {
    /**
     * 查询用户
     * @param { String } username 用户名
     * @return { Promise<any | undefined> }
     */
    async findOne(username: string): Promise<any | undefined> {
        const sql = `
            SELECT
                user_id userID, user_name username, real_name realname, passwd password,
                passwd_salt salt, mobile, role
            FROM
                admin_user
            WHERE
                user_name = '${username}'
        `
        try {
            const user = (
                await sequelize.query(sql, {
                    type: Sequelize.QueryTypes.SELECT, // 查询方式
                    raw: true, // 是否使用数组的方式展示结果
                    logging: false // 是否将SQL语句打印到控制台
                })
            )[0]
            return user
        } catch (err) {
            console.error(err)
            return void 0
        }
    }

    /**
     * 注册用户
     */
    async register(requestBody: any): Promise<any> {
        const { username, realname = '', password, repassword, mobile, role = 3 } = requestBody
        if (password !== repassword) {
            return {
                code: 400,
                message: '两次密码输入不一致'
            }
        }
        const user = await this.findOne(username)
        if (user) {
            return {
                code: 400,
                message: '用户已经存在'
            }
        }
        const salt = makeSalt()
        const hashPwd = encryptoPassword(password, salt)
        const registerSQL = `
            INSERT INTO admin_user
                (user_name, real_name, passwd, passwd_salt, mobile, role, user_status, create_by)
            VALUES
                ('${username}', '${realname}', '${hashPwd}', '${salt}', '${mobile}', '${role}', 1, 0)
        `
        try {
            await sequelize.query(registerSQL, {
                logging: false
            })
            return {
                code: 0,
                message: 'Success'
            }
        } catch (err) {
            return {
                code: 503,
                message: `Service error: ${err}`
            }
        }
    }
}
