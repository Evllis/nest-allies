module.exports = {
    // ↓忽略包含init的提交消息
    ignores: [(commit) => commit.includes('init')],
    // ↓按照传统消息格式来验证
    extends: ['@commitlint/config-conventional'],
    // ↓自定义提交消息规则
    rules: {
        // ↓header的最大长度
        'header-max-length': [2, 'always', 200],
        // <type>枚举
        'type-enum': [
            2,
            'always',
            [
                'add', // 添加依赖
                'delete', // 删除代码/文件
                'feat', // 增加新功能
                'fix', // 修复bug
                'style', // 样式修改不影响逻辑
                'merge', // 合并分支
                'perfect', // 功能完善
                'docs', // 修改文档
                'refactor', // 代码重构
                'test', // 单元测试修改
                'ci', // 持续继承
                'release', // 发布
                'deploy', // 部署
                'chore', // 更改配置文件
                'revert' // 版本回退
            ]
        ],
        // <type> 不能为空
        // 'type-empty': [2, 'never'],
        // 使用git cz提交时，出现type may not be empty [type-empty]，临时解决
        'type-empty': [0],
        // <type> 格式 小写
        'type-case': [2, 'always', 'lower-case'],
        // <scope> 不能为空
        // 'scope-empty': [2, 'never'],
        // 使用git cz提交时，出现scope may not be empty [scope-empty]，临时解决
        'scope-empty': [0],
        // <scope> 格式 小写
        'scope-case': [2, 'always', 'lower-case'],
        // <subject> 不能为空
        // 'subject-empty': [2, 'never'],
        // 使用git cz提交时，出现subject may not be empty [subject-empty]，临时解决
        'subject-empty': [0],
        // <subject> 以.为结束标志
        'subject-full-stop': [2, 'never', '.'],
        // <subject> 格式
        // 可选值
        // 'lower-case' 小写 lowercase
        // 'upper-case' 大写 UPPERCASE
        // 'camel-case' 小驼峰 camelCase
        // 'kebab-case' 短横线 kebab-case
        // 'pascal-case' 大驼峰 PascalCase
        // 'sentence-case' 首字母大写 Sentence case
        // 'snake-case' 下划线 snake_case
        // 'start-case' 所有首字母大写 start-case
        'subject-case': [2, 'never', []],
        // <body> 以空行开头
        'body-leading-blank': [1, 'always'],
        // <footer> 以空行开头
        'footer-leading-blank': [1, 'always']
    }
}
