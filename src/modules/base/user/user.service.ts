import { Injectable } from '@nestjs/common'
import * as Sequelize from 'sequelize'
import sequelize from '/@/database/sequelize'

@Injectable()
export class UserService {
    async findOne(username: string): Promise<any | undefined> {
        const sql = `
            SELECT
                user_id id, real_name realName, role
            FROM
                admin_user
            WHERE
                account_name = '${username}'
        `
        try {
            const res = await sequelize.query(sql, {
                // 查询方式
                type: Sequelize.QueryTypes.SELECT,
                // 是否使用数组组装的方式展示数据
                raw: true,
                // 是否将sql语句打印在控制台, 默认为true
                logging: true
            })
            const user = res[0]
            if (user) {
                return {
                    code: 200,
                    data: {
                        user
                    },
                    msg: 'success'
                }
            } else {
                return {
                    code: 600,
                    msg: '查无此人'
                }
            }
        } catch (err) {
            return {
                code: 503,
                msg: `service error: ${err}`
            }
        }
    }
}
