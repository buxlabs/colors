import test from 'ava'
import colors from '../../build/colors'

test('it returns the furthest color', assert => {
  let result = colors.furthest('#ffffff', ['#000000', '#111111'])
  assert.deepEqual(result, '#000000')
})
