module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        // 0:忽略，1:告警,2:报错
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['off', 4], // 缩进4
        'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
        'eol-last': 0, // 文件以单一的换行符结束
        'no-multiple-empty-lines': [1, { max: 3 }], // 空行最多不能超过3行
        "no-multi-spaces": 0, //不能用多余的空格
        semi: 0,
        'space-before-blocks': [0, 'always'], // 不以新行开始的块{前面要不要有空格
        quotes: [0, 'single'], // 引号类型 `` "" ''
        "spaced-comment": 0, //注释风格要不要有空格什么的
        "comma-spacing": 0, //逗号前后的空格
        "object-curly-spacing": [0, "never"], //大括号内是否允许不必要的空格
        "key-spacing": [0, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
        "comma-dangle": [0, "never"], //对象字面量项尾不能有逗号
        "no-unused-vars": [1, { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
        eqeqeq: 0, //必须使用全等
        "space-infix-ops": 0, //中缀操作符周围要不要有空格
        "no-return-assign": 0, //return 语句中不能有赋值表达式
    }
}