module.exports = {
    roots: ['<rootDir>/tests/'],
    preset: 'ts-jest',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'ts', 'vue', 'tsx', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
    // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
    testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)', '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$'],
    testPathIgnorePatterns: ['<rootDir>/tests/server/', '<rootDir>/tests/__mocks__/', '/node_modules/'],
    transformIgnorePatterns: ['<rootDir>/tests/__mocks__/', '/node_modules/'],
    transform: {
        '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
        '^.+\\.ts$': 'ts-jest', // ts 文件用 ts-jest 转换
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(vs|fs|vert|frag|glsl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.ts',
        '\\.(sass|s?css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
        '\\?worker$': '<rootDir>/tests/__mocks__/workerMock.ts',
        '/@/(.*)$': '<rootDir>/src/$1' // 这里的key是一个正则表达式, 找到 @/ 开头 (.*) 圆括号捕获匹配，$ 结束。 value 是一个映射路径, <rootDir> 指向jest根目录， $1 是正则捕获的值
    },
    testEnvironment: 'jsdom',
    verbose: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
    coveragePathIgnorePatterns: ['^.+\\.d\\.ts$']
}
