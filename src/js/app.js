
var ResponsiveNav = require('./modules/ResponsiveNav');
var SmoothScroll = require('./modules/SmoothScroll');
var wow = require('wowjs');
var CustomLoadMore = require('./modules/loadmore/CustomLoadMore');

new wow.WOW().init();
var responsiveNav = new ResponsiveNav('.nav-collapse');
var scroll = new SmoothScroll('.nav-main a');
var loadmore = new CustomLoadMore('#joblist');