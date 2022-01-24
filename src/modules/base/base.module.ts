import { Module } from '@nestjs/common'

// 用户模块
import { UserModule } from './user/user.module'
// 商品模块
import { CommodityModule } from './commodity/commodity.module'

@Module({
    imports: [UserModule, CommodityModule]
})
export class BaseModule {}
