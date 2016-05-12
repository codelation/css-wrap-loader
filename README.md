# Sass Wrap Loader for Webpack

Wrap Sass with a body code block based on the required resource.

## Installation

```sh
$ npm install sass-wrap-loader --save-dev
```

## Usage

Requiring a Sass file like this:

```js
require('!style!css!sass!sass-wrap!./views/pages/index/main.scss');
```

Will wrap the Sass with this code block:

```scss
body[data-view-name="pages/index"] {
  // index.scss content
}
```
