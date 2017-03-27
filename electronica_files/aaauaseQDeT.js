if (self.CavalryLogger) { CavalryLogger.start_js(["igFYw"]); }

__d('CarouselVideoPlayerController',['VideoAutoplayControllerX','VideoAutoplayPlayerBase','VideoPlayerLoggerEvent','VideoPlayerReason','getElementPosition','getViewportDimensions','tidyEvent'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('VideoAutoplayPlayerBase'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this.$CarouselVideoPlayerController1=k.video_units;this.$CarouselVideoPlayerController2=k.carousel;this.$CarouselVideoPlayerController3=k.should_autoplay;this.$CarouselVideoPlayerController5=k.root;this.$CarouselVideoPlayerController4=this.$CarouselVideoPlayerController2.getVisibleIndex();this.$CarouselVideoPlayerController1.forEach(function(l,m){if(l)c('tidyEvent')(l.addListener('turnOffAutoplay',function(){return this.emit('turnOffAutoplay');}.bind(this)));}.bind(this),this);}j.registerCarousel=function(k){'use strict';var l=new j(k);c('VideoAutoplayControllerX').registerVideoUnit(l);return l;};j.prototype.isVisible=function(){'use strict';var k=c('getViewportDimensions')().height,l=c('getElementPosition')(this.$CarouselVideoPlayerController5);if(l.height===0)return false;var m=l.y,n=l.y+l.height;return m>=0&&n<k;};j.prototype.getDistanceToViewport=function(){'use strict';var k=c('getViewportDimensions')().height,l=c('getElementPosition')(this.$CarouselVideoPlayerController5);if(l.height===0)return -Infinity;return l.y-k/2;};j.prototype.logDisplayed=function(){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].logEvent(c('VideoPlayerLoggerEvent').DISPLAYED);};j.prototype.playWithoutUnmute=function(k){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].play(k);};j.prototype.pause=function(k){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].pause(k);};j.prototype.isAutoplayable=function(){'use strict';return this.$CarouselVideoPlayerController3;};j.prototype.getDOMPosition=function(){'use strict';return c('getElementPosition')(this.$CarouselVideoPlayerController5);};j.prototype.isLooping=function(){'use strict';return this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4]&&!!this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].getOption('Looping','isLooping');};j.prototype.preload=function(){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].preload();};j.prototype.isState=function(k){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])return this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].isState(k);return false;};j.prototype.getIsInChannel=function(){'use strict';return false;};j.prototype.abortLoading=function(){'use strict';return;};j.prototype.getCurentUnitVideoController=function(){'use strict';return this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController2.getVisibleIndex()];};j.prototype.slide=function(){'use strict';this.$CarouselVideoPlayerController4=this.$CarouselVideoPlayerController2.getVisibleIndex();this.$CarouselVideoPlayerController1.forEach(function(k,l){if(k)if(l===this.$CarouselVideoPlayerController4){if(this.$CarouselVideoPlayerController3){k.setSmartBufferAdjustmentEnabled(true);k.play(c('VideoPlayerReason').AUTOPLAY);}}else{k.setSmartBufferAdjustmentEnabled(false);k.pause(c('VideoPlayerReason').PAGE_VISIBILITY);}}.bind(this));};j.prototype.removeUnit=function(k){'use strict';this.$CarouselVideoPlayerController1.splice(k,1);};f.exports=j;}),null);
__d('ExtendedMultiShareCarouselPagerArrowsVisible',['csx','cx','Animation','Arbiter','CarouselDynamicSlideshowController','CarouselVideoPlayerController','CSS','DOMQuery','Ease','Event','Locale','Run','TidyArbiterMixin','TrackingNodes','TrackingNodeTypes','mixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j,k,l=12,m=312,n=182,o=6,p=1,q=350;j=babelHelpers.inherits(r,c('mixin')(c('TidyArbiterMixin')));k=j&&j.prototype;function r(s){'use strict';k.constructor.call(this);this.$ExtendedMultiShareCarouselPagerArrowsVisible1=s.node;this.$ExtendedMultiShareCarouselPagerArrowsVisible2=s.grid;this.$ExtendedMultiShareCarouselPagerArrowsVisible3=s.prev_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible4=s.next_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible5=s.disable_pager_arrow_timeout;this.$ExtendedMultiShareCarouselPagerArrowsVisible6=s.item_width||m;this.$ExtendedMultiShareCarouselPagerArrowsVisible7=s.link_width||n;this.$ExtendedMultiShareCarouselPagerArrowsVisible8=s.num_visible_items||p;this.$ExtendedMultiShareCarouselPagerArrowsVisible9=s.edit_mode;this.$ExtendedMultiShareCarouselPagerArrowsVisible10=s.video_units;this.$ExtendedMultiShareCarouselPagerArrowsVisible11=s.should_autoplay;this.$ExtendedMultiShareCarouselPagerArrowsVisible12=null;this.$ExtendedMultiShareCarouselPagerArrowsVisible13=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible14=l;this.$ExtendedMultiShareCarouselPagerArrowsVisible15=c('Locale').isRTL()?'right':'left';this.$ExtendedMultiShareCarouselPagerArrowsVisible2.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible15]=this.$ExtendedMultiShareCarouselPagerArrowsVisible14+'px';this.$ExtendedMultiShareCarouselPagerArrowsVisible16();var t={video_units:this.$ExtendedMultiShareCarouselPagerArrowsVisible10,carousel:this,should_autoplay:this.$ExtendedMultiShareCarouselPagerArrowsVisible11,root:this.$ExtendedMultiShareCarouselPagerArrowsVisible1};this.$ExtendedMultiShareCarouselPagerArrowsVisible17=c('CarouselVideoPlayerController').registerCarousel(t);if(s.slideshow_ids){this.$ExtendedMultiShareCarouselPagerArrowsVisible18=s.slideshow_ids;var u={slideshow_ids:s.slideshow_ids,carousel:this};this.$ExtendedMultiShareCarouselPagerArrowsVisible19=new (c('CarouselDynamicSlideshowController'))(u);}s.extensions.forEach(function(v){v.init(this);},this);this.subscribe('autoscroll',this.$ExtendedMultiShareCarouselPagerArrowsVisible20.bind(this));c('tidyEvent')([c('Event').listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible3,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible21.bind(this)),c('Event').listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible4,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible20.bind(this))]);this.init_pagers();if(this.$ExtendedMultiShareCarouselPagerArrowsVisible9)this.$ExtendedMultiShareCarouselPagerArrowsVisible12=c('Arbiter').subscribe(['carousel-composer/carousel_card_change'],this.$ExtendedMultiShareCarouselPagerArrowsVisible22.bind(this));c('Run').onLeave(function(){this.$ExtendedMultiShareCarouselPagerArrowsVisible12&&this.$ExtendedMultiShareCarouselPagerArrowsVisible12.remove();}.bind(this));}r.prototype.getVisibleIndex=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible13;};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible22=function(){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible13=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible14=l;this.$ExtendedMultiShareCarouselPagerArrowsVisible2.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible15]=this.$ExtendedMultiShareCarouselPagerArrowsVisible14+'px';this.refresh();};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible23=function(){'use strict';if(this.$ExtendedMultiShareCarouselPagerArrowsVisible9){return this.$ExtendedMultiShareCarouselPagerArrowsVisible24()-this.getLastVisibleIndex();}else return this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes.length-this.getLastVisibleIndex();};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible25=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible13;};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible26=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible25()>0;};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible27=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible23()>0;};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible20=function(){'use strict';if(!this.$ExtendedMultiShareCarouselPagerArrowsVisible27())return;this.$ExtendedMultiShareCarouselPagerArrowsVisible28(1,this.$ExtendedMultiShareCarouselPagerArrowsVisible26());this.$ExtendedMultiShareCarouselPagerArrowsVisible16();};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible21=function(){'use strict';if(!this.$ExtendedMultiShareCarouselPagerArrowsVisible26())return;this.$ExtendedMultiShareCarouselPagerArrowsVisible28(-1,this.$ExtendedMultiShareCarouselPagerArrowsVisible27());this.$ExtendedMultiShareCarouselPagerArrowsVisible16();};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible29=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible27()&&this.$ExtendedMultiShareCarouselPagerArrowsVisible26();};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible16=function(){'use strict';if(this.$ExtendedMultiShareCarouselPagerArrowsVisible27())c('TrackingNodes').addDataAttribute(this.$ExtendedMultiShareCarouselPagerArrowsVisible4,c('TrackingNodeTypes').MULTI_ATTACHMENT_PAGER_NEXT,this.getLastVisibleIndex()+1);};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible30=function(s){'use strict';var t=s?"_3dm4":"_3dm5",u=s?"_3rvy":"_3rv-",v=s?this.$ExtendedMultiShareCarouselPagerArrowsVisible26():this.$ExtendedMultiShareCarouselPagerArrowsVisible27(),w=!this.$ExtendedMultiShareCarouselPagerArrowsVisible29()&&!v;if(w){c('CSS').addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,u);setTimeout(function(){c('CSS').addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,t);}.bind(this),this.$ExtendedMultiShareCarouselPagerArrowsVisible5);}else{c('CSS').removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,u);c('CSS').removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,t);}};r.prototype.getLastVisibleIndex=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible13+this.$ExtendedMultiShareCarouselPagerArrowsVisible8;};r.prototype.init_pagers=function(){'use strict';c('CSS').conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"_3dm4",!this.$ExtendedMultiShareCarouselPagerArrowsVisible26());};r.prototype.refresh=function(){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible30(true);this.$ExtendedMultiShareCarouselPagerArrowsVisible30(false);c('CSS').conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"_3o-b",this.$ExtendedMultiShareCarouselPagerArrowsVisible29());};r.prototype.getID=function(){'use strict';var s=c('DOMQuery').find(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"^._5pat");return s.id;};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible24=function(){'use strict';var s=0,t=0;for(;t<this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes.length;t++)if(!c('CSS').hasClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes[t],'hidden_elem'))s++;return s;};r.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible28=function(s,t){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible13+=s;var u=(this.$ExtendedMultiShareCarouselPagerArrowsVisible7+o)/2;if(t&&this.$ExtendedMultiShareCarouselPagerArrowsVisible29())u=o;if(!t&&!this.$ExtendedMultiShareCarouselPagerArrowsVisible29())u=this.$ExtendedMultiShareCarouselPagerArrowsVisible7;u*=-s;var v=s*this.$ExtendedMultiShareCarouselPagerArrowsVisible6;this.$ExtendedMultiShareCarouselPagerArrowsVisible14-=v+u;var w=this.$ExtendedMultiShareCarouselPagerArrowsVisible1;c('CSS').addClass(w,"_3dm6");new (c('Animation'))(this.$ExtendedMultiShareCarouselPagerArrowsVisible2).to(this.$ExtendedMultiShareCarouselPagerArrowsVisible15,this.$ExtendedMultiShareCarouselPagerArrowsVisible14).duration(q).ease(c('Ease').sineOut).ondone(function(){c('CSS').removeClass(w,"_3dm6");this.refresh();}.bind(this)).go();this.$ExtendedMultiShareCarouselPagerArrowsVisible17.slide();if(this.$ExtendedMultiShareCarouselPagerArrowsVisible19)this.$ExtendedMultiShareCarouselPagerArrowsVisible19.slide();};f.exports=r;}),null);