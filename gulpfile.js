var gulp = require('gulp');
var shell = require('gulp-shell');
var postcss = require('gulp-postcss');
var selectorPrefix = require('postcss-prefix-selector');
var rename = require('gulp-rename');
var cssshrink = require('gulp-cssshrink');
var minifyCSS = require('gulp-minify-css');
var sequence = require('run-sequence');


gulp.task('build', shell.task(['grunt dist-css']));


gulp.task('namespace', function () {
  var processors = [
    selectorPrefix({
      prefix: '.bs ',
      exclude: [
        '.glyphicon',
        '.glyphicon-asterisk:before',
        '.glyphicon-plus:before',
        '.glyphicon-euro:before',
        '.glyphicon-eur:before',
        '.glyphicon-minus:before',
        '.glyphicon-cloud:before',
        '.glyphicon-envelope:before',
        '.glyphicon-pencil:before',
        '.glyphicon-glass:before',
        '.glyphicon-music:before',
        '.glyphicon-search:before',
        '.glyphicon-heart:before',
        '.glyphicon-star:before',
        '.glyphicon-star-empty:before',
        '.glyphicon-user:before',
        '.glyphicon-film:before',
        '.glyphicon-th-large:before',
        '.glyphicon-th:before',
        '.glyphicon-th-list:before',
        '.glyphicon-ok:before',
        '.glyphicon-remove:before',
        '.glyphicon-zoom-in:before',
        '.glyphicon-zoom-out:before',
        '.glyphicon-off:before',
        '.glyphicon-signal:before',
        '.glyphicon-cog:before',
        '.glyphicon-trash:before',
        '.glyphicon-home:before',
        '.glyphicon-file:before',
        '.glyphicon-time:before',
        '.glyphicon-road:before',
        '.glyphicon-download-alt:before',
        '.glyphicon-download:before',
        '.glyphicon-upload:before',
        '.glyphicon-inbox:before',
        '.glyphicon-play-circle:before',
        '.glyphicon-repeat:before',
        '.glyphicon-refresh:before',
        '.glyphicon-list-alt:before',
        '.glyphicon-lock:before',
        '.glyphicon-flag:before',
        '.glyphicon-headphones:before',
        '.glyphicon-volume-off:before',
        '.glyphicon-volume-down:before',
        '.glyphicon-volume-up:before',
        '.glyphicon-qrcode:before',
        '.glyphicon-barcode:before',
        '.glyphicon-tag:before',
        '.glyphicon-tags:before',
        '.glyphicon-book:before',
        '.glyphicon-bookmark:before',
        '.glyphicon-print:before',
        '.glyphicon-camera:before',
        '.glyphicon-font:before',
        '.glyphicon-bold:before',
        '.glyphicon-italic:before',
        '.glyphicon-text-height:before',
        '.glyphicon-text-width:before',
        '.glyphicon-align-left:before',
        '.glyphicon-align-center:before',
        '.glyphicon-align-right:before',
        '.glyphicon-align-justify:before',
        '.glyphicon-list:before',
        '.glyphicon-indent-left:before',
        '.glyphicon-indent-right:before',
        '.glyphicon-facetime-video:before',
        '.glyphicon-picture:before',
        '.glyphicon-map-marker:before',
        '.glyphicon-adjust:before',
        '.glyphicon-tint:before',
        '.glyphicon-edit:before',
        '.glyphicon-share:before',
        '.glyphicon-check:before',
        '.glyphicon-move:before',
        '.glyphicon-step-backward:before',
        '.glyphicon-fast-backward:before',
        '.glyphicon-backward:before',
        '.glyphicon-play:before',
        '.glyphicon-pause:before',
        '.glyphicon-stop:before',
        '.glyphicon-forward:before',
        '.glyphicon-fast-forward:before',
        '.glyphicon-step-forward:before',
        '.glyphicon-eject:before',
        '.glyphicon-chevron-left:before',
        '.glyphicon-chevron-right:before',
        '.glyphicon-plus-sign:before',
        '.glyphicon-minus-sign:before',
        '.glyphicon-remove-sign:before',
        '.glyphicon-ok-sign:before',
        '.glyphicon-question-sign:before',
        '.glyphicon-info-sign:before',
        '.glyphicon-screenshot:before',
        '.glyphicon-remove-circle:before',
        '.glyphicon-ok-circle:before',
        '.glyphicon-ban-circle:before',
        '.glyphicon-arrow-left:before',
        '.glyphicon-arrow-right:before',
        '.glyphicon-arrow-up:before',
        '.glyphicon-arrow-down:before',
        '.glyphicon-share-alt:before',
        '.glyphicon-resize-full:before',
        '.glyphicon-resize-small:before',
        '.glyphicon-exclamation-sign:before',
        '.glyphicon-gift:before',
        '.glyphicon-leaf:before',
        '.glyphicon-fire:before',
        '.glyphicon-eye-open:before',
        '.glyphicon-eye-close:before',
        '.glyphicon-warning-sign:before',
        '.glyphicon-plane:before',
        '.glyphicon-calendar:before',
        '.glyphicon-random:before',
        '.glyphicon-comment:before',
        '.glyphicon-magnet:before',
        '.glyphicon-chevron-up:before',
        '.glyphicon-chevron-down:before',
        '.glyphicon-retweet:before',
        '.glyphicon-shopping-cart:before',
        '.glyphicon-folder-close:before',
        '.glyphicon-folder-open:before',
        '.glyphicon-resize-vertical:before',
        '.glyphicon-resize-horizontal:before',
        '.glyphicon-hdd:before',
        '.glyphicon-bullhorn:before',
        '.glyphicon-bell:before',
        '.glyphicon-certificate:before',
        '.glyphicon-thumbs-up:before',
        '.glyphicon-thumbs-down:before',
        '.glyphicon-hand-right:before',
        '.glyphicon-hand-left:before',
        '.glyphicon-hand-up:before',
        '.glyphicon-hand-down:before',
        '.glyphicon-circle-arrow-right:before',
        '.glyphicon-circle-arrow-left:before',
        '.glyphicon-circle-arrow-up:before',
        '.glyphicon-circle-arrow-down:before',
        '.glyphicon-globe:before',
        '.glyphicon-wrench:before',
        '.glyphicon-tasks:before',
        '.glyphicon-filter:before',
        '.glyphicon-briefcase:before',
        '.glyphicon-fullscreen:before',
        '.glyphicon-dashboard:before',
        '.glyphicon-paperclip:before',
        '.glyphicon-heart-empty:before',
        '.glyphicon-link:before',
        '.glyphicon-phone:before',
        '.glyphicon-pushpin:before',
        '.glyphicon-usd:before',
        '.glyphicon-gbp:before',
        '.glyphicon-sort:before',
        '.glyphicon-sort-by-alphabet:before',
        '.glyphicon-sort-by-alphabet-alt:before',
        '.glyphicon-sort-by-order:before',
        '.glyphicon-sort-by-order-alt:before',
        '.glyphicon-sort-by-attributes:before',
        '.glyphicon-sort-by-attributes-alt:before',
        '.glyphicon-unchecked:before',
        '.glyphicon-expand:before',
        '.glyphicon-collapse-down:before',
        '.glyphicon-collapse-up:before',
        '.glyphicon-log-in:before',
        '.glyphicon-flash:before',
        '.glyphicon-log-out:before',
        '.glyphicon-new-window:before',
        '.glyphicon-record:before',
        '.glyphicon-save:before',
        '.glyphicon-open:before',
        '.glyphicon-saved:before',
        '.glyphicon-import:before',
        '.glyphicon-export:before',
        '.glyphicon-send:before',
        '.glyphicon-floppy-disk:before',
        '.glyphicon-floppy-saved:before',
        '.glyphicon-floppy-remove:before',
        '.glyphicon-floppy-save:before',
        '.glyphicon-floppy-open:before',
        '.glyphicon-credit-card:before',
        '.glyphicon-transfer:before',
        '.glyphicon-cutlery:before',
        '.glyphicon-header:before',
        '.glyphicon-compressed:before',
        '.glyphicon-earphone:before',
        '.glyphicon-phone-alt:before',
        '.glyphicon-tower:before',
        '.glyphicon-stats:before',
        '.glyphicon-sd-video:before',
        '.glyphicon-hd-video:before',
        '.glyphicon-subtitles:before',
        '.glyphicon-sound-stereo:before',
        '.glyphicon-sound-dolby:before',
        '.glyphicon-sound-5-1:before',
        '.glyphicon-sound-6-1:before',
        '.glyphicon-sound-7-1:before',
        '.glyphicon-copyright-mark:before',
        '.glyphicon-registration-mark:before',
        '.glyphicon-cloud-download:before',
        '.glyphicon-cloud-upload:before',
        '.glyphicon-tree-conifer:before',
        '.glyphicon-tree-deciduous:before',
        '.glyphicon-cd:before',
        '.glyphicon-save-file:before',
        '.glyphicon-open-file:before',
        '.glyphicon-level-up:before',
        '.glyphicon-copy:before',
        '.glyphicon-paste:before',
        '.glyphicon-alert:before',
        '.glyphicon-equalizer:before',
        '.glyphicon-king:before',
        '.glyphicon-queen:before',
        '.glyphicon-pawn:before',
        '.glyphicon-bishop:before',
        '.glyphicon-knight:before',
        '.glyphicon-baby-formula:before',
        '.glyphicon-tent:before',
        '.glyphicon-blackboard:before',
        '.glyphicon-bed:before',
        '.glyphicon-apple:before',
        '.glyphicon-erase:before',
        '.glyphicon-hourglass:before',
        '.glyphicon-lamp:before',
        '.glyphicon-duplicate:before',
        '.glyphicon-piggy-bank:before',
        '.glyphicon-scissors:before',
        '.glyphicon-bitcoin:before',
        '.glyphicon-btc:before',
        '.glyphicon-xbt:before',
        '.glyphicon-yen:before',
        '.glyphicon-jpy:before',
        '.glyphicon-ruble:before',
        '.glyphicon-rub:before',
        '.glyphicon-scale:before',
        '.glyphicon-ice-lolly:before',
        '.glyphicon-ice-lolly-tasted:before',
        '.glyphicon-education:before',
        '.glyphicon-option-horizontal:before',
        '.glyphicon-option-vertical:before',
        '.glyphicon-menu-hamburger:before',
        '.glyphicon-modal-window:before',
        '.glyphicon-oil:before',
        '.glyphicon-grain:before',
        '.glyphicon-sunglasses:before',
        '.glyphicon-text-size:before',
        '.glyphicon-text-color:before',
        '.glyphicon-text-background:before',
        '.glyphicon-object-align-top:before',
        '.glyphicon-object-align-bottom:before',
        '.glyphicon-object-align-horizontal:before',
        '.glyphicon-object-align-left:before',
        '.glyphicon-object-align-vertical:before',
        '.glyphicon-object-align-right:before',
        '.glyphicon-triangle-right:before',
        '.glyphicon-triangle-left:before',
        '.glyphicon-triangle-bottom:before',
        '.glyphicon-triangle-top:before',
        '.glyphicon-console:before',
        '.glyphicon-superscript:before',
        '.glyphicon-subscript:before',
        '.glyphicon-menu-left:before',
        '.glyphicon-menu-right:before',
        '.glyphicon-menu-down:before',
        '.glyphicon-menu-up:before',
        '.bs',
      ],
    }),
  ];

  return gulp
    .src('dist/css/bootstrap.css')
    .pipe(postcss(processors))
    .pipe(rename('bootstrap.nt.css'))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('min', function () {
  return gulp
    .src('dist/css/bootstrap.nt.css')
    .pipe(cssshrink())
    .pipe(minifyCSS({ keepBreaks: true }))
    .pipe(rename('bootstrap.nt.min.css'))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('default', function () {
  sequence('build', 'namespace', 'min');
});
