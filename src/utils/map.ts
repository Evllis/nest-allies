type ObjectType = Record<string, number | string | boolean>

/**
 * 将map转换为对象
 * @param { Map } map
 * @return { ObjectType }
 */
export const mapToObj = (map: Map<string, any>): ObjectType => {
    const obj: ObjectType = {}
    for (const [k, v] of map) {
        obj[k] = v
    }
    return obj
}
