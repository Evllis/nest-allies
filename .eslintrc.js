module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        ecmaFeatures: {
            // tsx: true, // Allows for the parsing of JSX
            jsx: true
        }
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'import'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:jest/recommended' // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
    ],
    root: true,
    env: {
        node: true,
        jest: true,
        browser: true,
        es2021: true
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        // 四个空格缩进
        indent: 'off',
        // indent: [
        //     'error',
        //     4,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ],
        // 变量后面不加分号
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        // 关闭检测console函数
        'no-console': 'off',
        // 关闭检测一元运算符，比如 ++，--
        'no-plusplus': [
            'off',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        // 过滤同名参数，对象修改现象报错提示
        // 'no-param-reassign': [
        //     'error',
        //     {
        //         props: true,
        //         ignorePropertyModificationsFor: [
        //             'e', // for e.returnvalue
        //             'ctx', // for Koa routing
        //             'req', // for Express requests
        //             'request', // for Express requests
        //             'res', // for Express responses
        //             'response', // for Express responses
        //             'state', // for vuex state
        //             'config',
        //             'item'
        //         ]
        //     }
        // ],
        // 关闭：禁止对函数参数再赋值检测
        'no-param-reassign': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        // 允许非空断言
        '@typescript-eslint/no-non-null-assertion': 'off',
        // 允许自定义模块和命名空间
        '@typescript-eslint/no-namespace': 'off',
        // 允许对this设置alias
        '@typescript-eslint/no-this-alias': 'off',
        // 允许使用any类型
        '@typescript-eslint/no-explicit-any': ['off'],
        // 关闭变量名以__下划线开头时报错的问题
        'no-underscore-dangle': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'space-before-function-paren': 'off',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'no-use-before-define': 'off'
    },
    settings: {
        jest: {
            version: 26
        }
    }
}
