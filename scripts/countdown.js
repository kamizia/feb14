/*
	* countdown is a simple jquery plugin for countdowns
	* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	* and GPL-3.0 (http://opensource.org/licenses/GPL-3.0) licenses.
	* @source: http://github.com/rendro/countdown/
	* @autor: Robert Fleischmann
	* @version: 1.0.1
*/


(function($){

(function(){(function(e){e.countdown=function(t,n){var r,i=this;this.el=t;this.$el=e(t);this.$el.data("countdown",this);this.init=function(){i.options=e.extend({},e.countdown.defaultOptions,n);if(i.options.refresh){i.interval=setInterval(function(){return i.render()},i.options.refresh)}i.render();return i};r=function(t){var n,r;t=Date.parse(e.isPlainObject(i.options.date)?i.options.date:new Date(i.options.date));r=(t-Date.parse(new Date))/1e3;if(r<=0){r=0;if(i.interval){i.stop()}i.options.onEnd.apply(i)}n={years:0,days:0,hours:0,min:0,sec:0,millisec:0};if(r>=365.25*86400){n.years=Math.floor(r/(365.25*86400));r-=n.years*365.25*86400}if(r>=86400){n.days=Math.floor(r/86400);r-=n.days*86400}if(r>=3600){n.hours=Math.floor(r/3600);r-=n.hours*3600}if(r>=60){n.min=Math.floor(r/60);r-=n.min*60}n.sec=r;return n};this.leadingZeros=function(e,t){if(t==null){t=2}e=String(e);while(e.length<t){e="0"+e}return e};this.update=function(e){i.options.date=e;return i};this.render=function(){i.options.render.apply(i,[r(i.options.date)]);return i};this.stop=function(){if(i.interval){clearInterval(i.interval)}i.interval=null;return i};this.start=function(t){if(t==null){t=i.options.refresh||e.countdown.defaultOptions.refresh}if(i.interval){clearInterval(i.interval)}i.render();i.options.refresh=t;i.interval=setInterval(function(){return i.render()},i.options.refresh);return i};return this.init()};e.countdown.defaultOptions={date:"June 7, 2087 15:03:25",refresh:1e3,onEnd:e.noop,render:function(t){return e(this.el).html(""+t.years+" years, "+t.days+" days, "+this.leadingZeros(t.hours)+" hours, "+this.leadingZeros(t.min)+" min and "+this.leadingZeros(t.sec)+" sec")}};e.fn.countdown=function(t){return e.each(this,function(n,r){var i;i=e(r);if(!i.data("countdown")){return i.data("countdown",new e.countdown(r,t))}})};return void 0})(jQuery)}).call(this)

}(jQuery));
