import test from 'ava'
import colors from '../../build/colors'

test('it returns the color name', t => {
  let hex = '#f00'
  let result = colors.name(hex)
  t.deepEqual(result.basic[0].name, 'red')
})
