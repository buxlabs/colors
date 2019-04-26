import namer from 'color-namer'
import nearest from 'nearest-color'

export default {
  name(hex) {
    return namer(hex)
  },
  nearest(color, colors) {
    return nearest.from(colors)(color)
  }
}

