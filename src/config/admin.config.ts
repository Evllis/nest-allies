import { AdminType } from './types.d'

export const AdminConfig: AdminType = {
    adminPath: 'admin',
    defaultAccount: 'allies',
    defaultPassword: '123456',
    // token失效时间为1天
    tokenExpire: 1
}
