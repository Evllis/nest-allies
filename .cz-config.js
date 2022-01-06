'use strict'

module.exports = {
    types: [
        { value: '🎉 first_commit', name: '🎉 初次提交' },
        { value: '🆕 introduce_features', name: '🆕 引入新功能' },
        { value: '🔖 issue_label', name: '🔖 发行/版本标签' },
        { value: '🐛 fix_bug', name: '🐛 修复 bug' },
        { value: '🚑 important_patch', name: '🚑 重要补丁' },
        { value: '🌐 i18n', name: '🌐 国际化与本地化' },
        { value: '💄 update_ui', name: '💄 更新UI和样式文件' },
        { value: '🎬 update_example', name: '🎬 更新演示/示例' },
        { value: '🚨 remove_linter', name: '🚨 移除 linter 警告' },
        { value: '🔧 modify_config', name: '🔧 修改配置文件' },
        { value: '➕ add_dep', name: '➕ 增加一个依赖' },
        { value: '➖ reduce_dep', name: '➖ 减少一个依赖' },
        { value: '⏫ update_dep', name: '⏫ 升级依赖' },
        { value: '⏬ demotion_dep', name: '⏬ 降级依赖' },
        { value: '💥 improve_per', name: '💥 提升性能' },
        { value: '📈 add_analysis', name: '📈 添加分析或跟踪代码' },
        { value: '🚀 deploy_fun', name: '🚀 部署功能' },
        { value: '✅ add_test', name: '✅ 增加测试' },
        { value: '📝 write_document', name: '📝 撰写文档' },
        { value: '🔨 reconstruction', name: '🔨 重大重构' },
        { value: '🎨 improve_code', name: '🎨 改进代码结构/代码格式' },
        { value: '🔥 remove_code', name: '🔥 移除代码或文件' },
        { value: '🚧 working', name: '🚧 工作进行中' },
        { value: '🗑️ discard_or_remove', name: '🗑️ 废弃或删除' },
        { value: '♿ accessible', name: '♿ 可访问性' },
        { value: '🐳 docker', name: '🐳 Docker相关工作' },
        { value: '✏️ fix_typo', name: '✏️ 修复 typo' },
        { value: '👷 add_build', name: '👷 添加 CI 构建系统' },
        { value: '💚 fix_build', name: '💚 修复 CI 构建问题' },
        { value: '🔒 fix_safe', name: '🔒 修复安全问题' },
        { value: '🍎 fix_apple', name: '🍎 修复 macOS 下的问题' },
        { value: '🐧 fix_linux', name: '🐧 修复 Linux 下的问题' },
        { value: '🏁 fix_win', name: '🏁 修复 Windows 下的问题' },
        { value: '🔀 branch_merge', name: '🔀 分支合并' },
        { value: '💊 roll_back', name: '💊 代码回退' },
        { value: '🔫 tool_change', name: '🔫 开发工具变动(构建、脚手架工具等)' },
        { value: '🧻 change_document_only', name: '🧻 变更的现有文档' }
    ],

    // scopes: [{ name: '模块1' }, { name: '模块2' }, { name: 'exampleScope' }, { name: 'changeMe' }],
    // // it needs to match the value for field type. Eg.: 'fix'
    // scopeOverrides: {
    //   fix: [
    //     {name: 'merge'},
    //     {name: 'style'},
    //     {name: 'e2eTest'},
    //     {name: 'unitTest'}
    //   ]
    // },

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // override the messages, defaults are as follows
    messages: {
        type: '选择要提交的更改类型:',
        scope: '相关需求名称为:',
        // used if allowCustomScopes is true
        customScope: '更改内容的所属需求为:',
        subject: '写一个简短、命令时态的语句来描述更改:\n',
        body: '详细描述更改原因 (可选，按回车跳过). 使用 "|" 来换行:\n',
        breaking: '列出 BREAKING CHANGES (optional):\n',
        footer: '列出这次更改 关闭的 ISSUES (可选). 如: #31, #34:\n',
        confirmCommit: '确定提交上面的更改?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['特性', '修复'],
    // skip any questions you want
    skipQuestions: ['customScope', 'body', 'breaking', 'footer'],

    // limit subject length
    subjectLimit: 100
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
}
