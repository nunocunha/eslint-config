import {Test} from './test';

describe('Test', () => {
  it('Test', () => {
    const test = new Test();

    expect(test.getPrivate()).toStrictEqual(10);
  });
});
