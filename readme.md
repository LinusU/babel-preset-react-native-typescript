# Babel Preset: React Native TypeScript

A babel preset for React Native, using TypeScript instead of Flow.

This module works as a drop in replacement for [babel-preset-react-native](https://www.npmjs.com/package/babel-preset-react-native), but switches out the `transform-flow-strip-types` plugin for `transform-typescript`.

Note that the TypeScript transform plugin is new in Babel 7, and thus this preset only works with Babel 7 and newer, which is included with React Native 0.56 and newer.

## Installation

```sh
npm install --save-dev babel-preset-react-native-typescript
```

## Usage

In your `.babelrc`:

```js
{
  "presets": ["react-native-typescript"]
}
```

In order to use the `.ts` and `.tsx` extension, you also need to configure React Native to look for those files. In your `rn-cli.config.js`:

```js
module.exports = {
  getSourceExts () {
    return ['ts', 'tsx']
  },
}
```
