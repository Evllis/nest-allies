import { ValidationOptions, ValidateBy, buildMessage } from 'class-validator'
import { dateStringReg } from '/@/constants'

export const IS_DATE_FORMAT_STRING = 'isDateFormateString'

export const isDateFormateString = (value: unknown): boolean => {
    return typeof value === 'string' && dateStringReg.test(value)
}

export const IsDateFormateString = (validationOptions?: ValidationOptions): PropertyDecorator => {
    return ValidateBy(
        {
            name: IS_DATE_FORMAT_STRING,
            constraints: [],
            validator: {
                validate: (value): boolean => isDateFormateString(value),
                defaultMessage: buildMessage((eachPrefix) => eachPrefix + '$property 格式必须为:YYYY-MM-DD HH:mm:ss', validationOptions)
            }
        },
        validationOptions
    )
}
