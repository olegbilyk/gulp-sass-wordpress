# gulp-sass-wordpress
Gulp compile SASS in WordPress

## Installation

```
$ npm i
```

## Optionals
In file [gulpfile.js](https://github.com/olegbilyk/gulp-sass-wordpress/blob/master/gulpfile.js)

#### Variable theme

```
const themeName = 'themeName'; - You theme name in themes folder
const themeUrl = 'themeUrl'; - Url You installed theme
const themePort = 8080; - Port for work plugin Browser Sync
```

#### Variable plugins

```
const isAutoPrefixer = true; - Runing Auto Prefixer
const isSourceMaps = true; - Runing Source Maps
const isBrowserSync = true; - Runing Browser Sync
const notifyComplete = false; - Runing Notify Complete
```

## Running in gulp watch

```
$ npm run start
```

## Running in gulp watch (production)

```
$ npm run start
```

## Build sass

```
$ npm run build
```

## Build sass (production)

```
$ npm run build_prod
```

# License

[MIT](License.md)
[License](https://github.com/olegbilyk/webpack2-js-boilerplate/blob/develop/LICENSE)
