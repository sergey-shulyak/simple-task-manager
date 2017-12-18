import request from '../utils';

describe('Tickets API', () => {
  it('Should call fetch', () => {
    request({ entity: 'boards' });
    expect(global.fetch.mock.calls.length).toBe(1);
  });
});
