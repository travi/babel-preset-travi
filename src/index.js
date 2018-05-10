import env from 'babel-preset-env';
import restSpread from 'babel-plugin-transform-object-rest-spread';

export default function () {
  return {
    presets: [env(null, {targets: {node: 'current'}})],
    plugins: [[restSpread, {useBuiltIns: true}]]
  };
}
