hexo-filter-permalink-normalization
================

[![Build Status](https://drone.io/github.com/kazu69/hexo-filter-permalink-normalization/status.png)](https://drone.io/github.com/kazu69/hexo-filter-permalink-normalization/latest)

[![npm version](https://badge.fury.io/js/hexo-filter-permalink-normalization.svg)](http://badge.fury.io/js/hexo-filter-permalink-normalization)

This plugin unicode normalize your HEXO article permalink.

## Install

Install using [npm](https://npmjs.org/package/hexo-filter-permalink-normalization).

```
$ npm install hexo-filter-permalink-normalization --save
```
## Option

You can configure this plugin in _config.yml.

```
permalink_normalization:
  type: nfc
```

Option type select ```nfc```, ```nfd```, ```nfkc``` and ```nfkd```

## Test

```
npm test
```

## License

MIT
