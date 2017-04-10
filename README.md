# rollup-plugin-sketch-livereload

Rollup plugin for rerunning a Sketch plugin after it changes.

## Install
Using npm:
```js
npm install rollup-plugin-sketch-livereload --save-dev
```
Using yarn:
```js
yarn add rollup-plugin-sketch-livereload -D
```

## Usage
```js
const livereload = require('rollup-plugin-sketch-livereload')
const { main } = require('./package.json');

module.exports = {
  plugins: [
    livereload({
      enabled: process.env.RENDER === 'true',
      bundle: main,
    }),
  ]
}
```

## Options
### enabled
Whether to render.

Boolean, defaults to `true`.

### bundle
Location of the `.sketchplugin` file. If you're using `skpm`, you can use `main` from `package.json`.

String

## command
Identifier to the command in the Sketch plugin's `manifest.json`.

String, defaults to `main`.