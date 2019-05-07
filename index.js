import namer from 'color-namer'
import nearest from 'nearest-color'
import hex2rgb from 'hex-rgb'
import rgb2hex from 'rgb-hex'
import diff from 'color-diff'

function convertHexToRGB (color) {
  const rgbColor = hex2rgb(color)
  return { R: rgbColor.red, G: rgbColor.green, B: rgbColor.blue, A: rgbColor.alpha }
}

export default {
  name(hex) {
    return namer(hex)
  },
  nearest(color, palette) {
    return nearest.from(palette)(color)
  },
  furthest(color, palette) {
    let rgbColor = convertHexToRGB(color)
    let rgbPalette = palette.map(convertHexToRGB)
    let { R, G, B } = diff.furthest(rgbColor, rgbPalette)
    return `#${rgb2hex(R, G, B)}`
  }
}

