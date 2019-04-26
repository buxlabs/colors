# color-mint

## Installation

`npm install color-mint`

## Usage

```js
import colors from 'color-mint'

colors.name('#f00')
colors.nearest('#fff', ['#000', '#111'])
```

## API

### name

The method uses the `color-namer` package that can be found here https://www.npmjs.com/package/color-namer

### nearest

Returns the nearest color given an array of possible colors. https://www.npmjs.com/package/nearest-color

## TODO

- add contrast color checker
- add color palettes
