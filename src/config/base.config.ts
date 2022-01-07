import * as config from 'config'

import { BaseType } from './types.d'

const server = config.get('server')

export const BaseConfig: BaseType = {
    port: server.port
}
