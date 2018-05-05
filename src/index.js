import env from 'babel-preset-env';

export default function () {
  return {presets: [env(null, {targets: {node: 'current'}})]};
}
