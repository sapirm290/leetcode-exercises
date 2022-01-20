
// THe preset should allow using importsm
module.exports = {
    presets: [
        ['@babel/preset-env',// The preset should allow using ESM import
            { targets: { node: 'current' } }// the target => node sould allow async tests in
        ]],
};