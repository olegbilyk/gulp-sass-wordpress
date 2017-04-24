# gulp-sass-wordpress
Gulp compile SASS in WordPress

### What's included?
- [Gulp](https://github.com/gulpjs/gulp)
- [Gulp sass](https://github.com/dlmanning/gulp-sass)
- [Gulp sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
- [Gulp autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
- [Gulp rename](https://github.com/hparra/gulp-rename)
- [Gulp notify](https://github.com/mikaelbr/gulp-notify)
- [Gulp if](https://github.com/robrich/gulp-if)
- [Gulp util](https://github.com/gulpjs/gulp-util)
- [BrowserSync](https://github.com/BrowserSync/browser-sync)

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
