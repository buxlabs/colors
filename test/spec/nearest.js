import test from 'ava'
import colors from '../../build/colors'

test('it returns the nearest color', assert => {
  let result = colors.nearest('#ffffff', ['#000000', '#111111'])
  assert.deepEqual(result, '#111111')
})
