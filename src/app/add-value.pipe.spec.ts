import { AddValuePipe } from './add-value.pipe';

describe('AddValuePipe', () => {
  it('create an instance', () => {
    const pipe = new AddValuePipe();
    expect(pipe).toBeTruthy();
  });
});
