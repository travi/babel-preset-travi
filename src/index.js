import env from 'babel-preset-env';
import restSpread from 'babel-plugin-transform-object-rest-spread';

export default function (context, {react}) {
  return {
    presets: [env(null, {targets: {node: 'current'}}), react && require('babel-preset-react')].filter(Boolean),
    plugins: [[restSpread, {useBuiltIns: true}]]
  };
}
