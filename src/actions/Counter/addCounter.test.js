import { ADD_COUNTER, addCounter } from './counter';

test('test actions', () => {
  const expectAction = {
    type: ADD_COUNTER,
    payload: { addQuantity: 1 },
  };

  expect(addCounter()).toEqual(expectAction);
});
