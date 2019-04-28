import reducer from './reducer';
import { addCounter, fetchCountRequest, fetchCountSuccess } from '../actions/Counter/counter';

test('test reducer', () => {
  const initState = { count: 0, request: false };

  expect(reducer(undefined, {})).toEqual(initState);

  expect(reducer(initState, addCounter()))
    .toEqual({
      count: 1,
      request: false,
    });

  expect(reducer(initState, fetchCountRequest()))
    .toEqual({
      count: 0,
      request: true,
    });

  expect(reducer(initState, fetchCountSuccess({ count: 2 })))
    .toEqual({
      count: 2,
      request: false,
    });
});
