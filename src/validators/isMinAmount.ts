import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator'
import { minMoneyReg } from '/@/constants'

@ValidatorConstraint({ async: true })
export class IsMinAmountConstraint implements ValidatorConstraintInterface {
    async validate(value: number, _args: ValidationArguments) {
        // value是用户输入的金额
        if (minMoneyReg.test(String(value))) {
            return true
        } else {
            return false
        }
    }

    defaultMessage() {
        // return '提现金额错误,金额为大于或等于100元的数字货币形式';
        return '提现金额错误,金额为大于或等于1.00元的数字货币形式'
    }
}

export const IsMinAmount = (validationOptions?: ValidationOptions) => {
    return (object: Record<string, any>, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsMinAmountConstraint
        })
    }
}
