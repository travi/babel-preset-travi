import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';

import * as form8ionPreset from '../thirdparty-wrappers/form8ion-babel-preset.js';
import buildConfig from './index.js';

suite('babel preset', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(form8ionPreset, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the form8ion preset is extended', () => {
    const context = any.simpleObject();
    const options = any.simpleObject();
    const config = any.simpleObject();
    form8ionPreset.default.withArgs(context, options).returns(config);

    assert.equal(buildConfig(context, options), config);
  });
});
