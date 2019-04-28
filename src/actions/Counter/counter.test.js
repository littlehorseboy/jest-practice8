import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCount } from './counter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addCount', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('get count dispatch of action', () => {
    fetchMock.getOnce('http://example.com/count', {
      body: { count: 3 },
    });

    const store = mockStore({ count: 0 });

    return store.dispatch(fetchCount())
      .then(() => {
        console.log(store.getActions());
      });
  });
});
