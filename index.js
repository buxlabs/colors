import namer from 'color-namer'

export default {
  name(hex) {
    return namer(hex)
  }
}
