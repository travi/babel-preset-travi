import env from 'babel-preset-env';
import restSpread from 'babel-plugin-transform-object-rest-spread';

export default function (context, {react, targets = {}, modules} = {}) {
  return {
    presets: [
      env(
        null,
        {
          targets: {node: targets.node || 'current', ...targets.browser && {browsers: ['last 2 versions']}},
          ...(false === modules) && {modules: false}
        }
      ),
      react && require('babel-preset-react')
    ].filter(Boolean),
    plugins: [
      [restSpread, {useBuiltIns: true}],
      ...react
        ? [require('babel-plugin-transform-class-properties'), require('babel-plugin-inline-react-svg').default]
        : []
    ]
  };
}
