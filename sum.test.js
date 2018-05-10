import {sum, updateArray, square} from './sum'
import deepFreeze from 'deep-freeze';



test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});


test('returns a new array', () => {
  expect(updateArray(1, [2, 3])).toEqual([1, 2, 3])
})




test('squares a value', () => {
  expect(square(3)).toEqual(9)
})

const listBefore = []
const listAfter = [0]





test('it should not modify the array', () => {
  const listBefore = []
  const listAfter = [0]
  deepFreeze(listBefore)
  expect(
    updateArray(0, listBefore)
  ).toEqual(listAfter)

})

