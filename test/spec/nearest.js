import test from 'ava'
import colors from '../../build/colors'

test('it returns the nearest color', assert => {
  let result = colors.nearest('#fff', ['#000', '#111'])
  assert.deepEqual(result, '#111')
})
