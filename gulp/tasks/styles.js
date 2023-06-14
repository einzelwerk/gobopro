const { src, dest } = require('gulp');
const { path } = require('../config/path');
const { plugins } = require('../config/plugins');
const { isDev, isProd } = require('../config/mode');

const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssrc = require('postcss-load-config');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const cleanCss = require('gulp-clean-css');

const sass = gulpSass(dartSass)

exports.styles = async function styles() {
  const config = await postcssrc();

  return src(path.src.styles, {
      sourcemaps: isDev
    })
    .pipe(sass({
      includePaths: ['node_modules'],
      outputStyle: 'expanded'
    }))
    .pipe(plugins.replace(/@\//g, '../'))
    .pipe(plugins.if(isProd, groupCssMediaQueries()))
    .pipe(plugins.if(isProd, cleanCss({
      level: 2
    })))
    .pipe(plugins.if(isProd, postcss(config.plugins)))
    .pipe(dest(path.build.styles, {
      sourcemaps: isDev
    }))
    .pipe(plugins.browsersync.stream())
}
