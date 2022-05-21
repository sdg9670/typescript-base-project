import index from '@/index';
import { expect } from 'chai';

describe('index.ts', () => {
  it('check property', () => {
    expect(index).to.have.property('module');
  });
});
