# http-content-range-format [![Build Status](https://travis-ci.org/purposeindustries/node-http-content-range-format.svg)](https://travis-ci.org/purposeindustries/node-http-content-range-format)

Format HTTP Content-Range headers, RFC7233 compilant.

## Install

Install the [package](http://npmjs.org/package/http-content-range-format) with [npm](http://npmjs.org).

```sh
$ npm install http-content-range-format
```

## Usage

```js
format({
  unit: 'items',
  first: 0,
  last: 9,
  length: 100
});
// 'items 0-9/100'
```

## API

### .format(obj)

```js
format({ unit: 'items', first: 0, last: 9, length: 100 })
// items 0-9/100

format({ unit: 'items', first: 0, last: 9 })
// items 0-9/*

format({ unit: 'items', length: 100 })
// items */100
```

## License

MIT
