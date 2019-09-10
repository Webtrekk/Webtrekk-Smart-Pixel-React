module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: '2.0.0',
                targets: {
                    node: '4'
                }
            }
        ],
        '@babel/preset-react'
    ]
};
