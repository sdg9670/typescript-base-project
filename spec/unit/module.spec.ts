import module from '@/module';
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

describe('module.ts', () => {
  it('get five', async () => {
    await expect(module.getFive()).eventually.to.equal(5);
  });
});
