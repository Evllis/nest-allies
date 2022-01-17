import { Module } from '@nestjs/common'

import { BaseModule } from './base/base.module'
import { CommonModule } from './common/common.module'

@Module({
    imports: [BaseModule, CommonModule]
})
export class IndexModule {}
