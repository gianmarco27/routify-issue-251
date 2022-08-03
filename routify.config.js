const dev = process.env.APP_ENV === 'local';

module.exports = {
    debug: process.env.APP_DEBUG,
    routifyDir: '.routify',
    dynamicImports: false,
    bundle: true,
    format: 'esm',
};
