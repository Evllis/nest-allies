import * as crypto from 'crypto'

/**
 * 生成随机盐
 */
export const makeSalt = (): string => {
    return crypto.randomBytes(3).toString('base64')
}

/**
 * 密码加密
 * @param { String } password 密码
 * @param { String } salt 盐
 * @return { String }
 */
export const encryptoPassword = (password: string, salt: string): string => {
    if (!password || !salt) {
        return ''
    }
    const tempSalt = Buffer.from(salt, 'base64')
    return (
        // 10000 迭代次数
        // 16 长度
        crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
    )
}
