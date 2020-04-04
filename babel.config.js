let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
      },
    ],
  ];
}

module.exports = {
  presets: defaultPresets.concat(['@babel/preset-react', '@babel/preset-typescript']),
  plugins: ['babel-plugin-optimize-clsx'],
  env: {
    esm: {
      plugins: ['babel-plugin-optimize-clsx', ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
  },
};
