module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
            corejs: '^2.0.0',
            targets: ">= 0.5%, not dead, node 12",
            useBuiltIns: 'entry'
            }
        ]
    ],
}