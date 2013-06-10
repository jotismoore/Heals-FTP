/**
 * @fileoverview Venda.Widget.jqSlider - Display a specific element with slider
 *
 * This widget provides us with the ability to create a slider for any elements
 *
 * @requires jQuery	js/external/jquery-1.7.1.min.js
 * @requires jQuery	js/external/jquery-ui-1.8.14.custom.min.js
 * @author Sakesan Panjamawat (Auii) <sakp@venda.com>
*/

(function($){
	$.fn.jqSlider = function(opt){
		/**
		* jqSlider default configuration
		* @type Object
		*/
		var options = {
			display: 4, 
			slidenum: 1,
			duration: 0.3,
			direction: 'horizontal',
			elementwidth: 200,
			elementheight: 200,
			uuid: ''
		};
		$.extend(options, opt);
		var equalHeight = function(elements){
			if(typeof(Venda.Platform.EqualHeight) != "undefined"){
				Venda.Platform.EqualHeight.init(elements.split(','));
			}
		};
		var hoverHandler = function(){
			
		};
		
		return this.each(function(index){
			/* apply default option + override option */
			/* ignore if not has child element / or already apply  */
			$this = $(this);
			var total = $this.children().length;
			var opt = $.extend({}, options, $this.data());
			opt.total = total;
			opt.display = (opt.display < 1) ? 1 : opt.display;
			opt.slidenum = (opt.slidenum > opt.display) ? opt.display : opt.slidenum;
			if(!(/horizontal|vertical/).test(opt.direction)){opt.direction = 'horizontal';}
			if(opt.equalheight != '' && typeof(opt.equalheight) != 'undefined') equalHeight(opt.equalheight);
			
			opt.elementwidth = $this.children().first().outerWidth();
			opt.elementheight = $this.children().first().outerHeight();
			if(opt.uuid == ''){opt.uuid = (this.id) ? 'slider-'+this.id : 'slider-'+index;}
			$this.data(opt);
						
			/* make slider structure */
			if($this.parent().is('.widget-slider-innerwrap')){
				$parentEle = $this.parents('.widget-slider-wrap');
				var current = -1;
				var $sliderEle = $parentEle.find('.widget-slider-body');
				$sliderEle.data('current', current);
				$parentEle.find('.widget-slider-next').click();
			}else{
				$this.addClass('widget-slider-body');
				$this.wrap('<div class="'+opt.uuid+'-wrap widget-slider-wrap" id="'+opt.uuid+'"><div class="widget-slider-innerwrap"></div></div>');
				$parentEle = $this.parents('.widget-slider-wrap');
				$parentEle.find('.widget-slider-innerwrap').css({position: 'relative'});
				$parentEle.addClass('widget-slider-style-'+opt.direction);
			}
			opt = $this.data();
			/* assign width-height*/
			
			if(opt.direction == 'horizontal'){
				$this.css({position: 'relative', width: (opt.total*opt.elementwidth)+1});
				$parentEle.find('.widget-slider-innerwrap').width(opt.display*opt.elementwidth);
			}else{
				$this.css({position: 'relative', height: (opt.total*opt.elementheight)+1});
				$parentEle.find('.widget-slider-innerwrap').width(1*opt.elementwidth);
				$parentEle.find('.widget-slider-innerwrap').height(opt.display*opt.elementheight);
			}
			if($parentEle.find('.widget-slider-control').length > 0){return ;}
			if(opt.isTouch){
				$parentEle.find('.widget-slider-innerwrap').css('overflow','auto');
			}else{
				if(opt.total > opt.display) {
					$parentEle.prepend('<div class="widget-slider-control widget-slider-prev widget-slider-state-disabled" data-control="prev"></div>')
						.append('<div class="widget-slider-control widget-slider-next" data-control="next"></div>');
					
					$parentEle.find('.widget-slider-control').bind({
						mouseenter: function(e){ $(this).toggleClass('widget-slider-state-hover'); },
						mouseleave: function(e){ $(this).toggleClass('widget-slider-state-hover'); },
						click: function(e){
							var $parentEle = $(this).parent();
							var $sliderEle = $parentEle.find('.widget-slider-body');
							
							var opt = $sliderEle.data();
							var current = opt.current || 1;
							var doSlide=false;
							if($(this).is('.widget-slider-prev') && current > 1){
								current-=opt.slidenum;
								doSlide=true;
							}
							if($(this).is('.widget-slider-next') && current+opt.display <= opt.total){
								current+=opt.slidenum;
								doSlide=true;
							}
							if(current < 1) current = 1;
							if(!doSlide) return ;
							
							if(opt.direction == 'horizontal'){
								$sliderEle.animate({right : ((current-1)*opt.elementwidth)},opt.duration*1000);
							}else{
								$sliderEle.animate({bottom : ((current-1)*opt.elementheight)},opt.duration*1000);
							}
							$sliderEle.data('current', current);
							
							if(current+opt.display > opt.total){
								$parentEle
									.find('.widget-slider-next')
									.addClass('widget-slider-state-disabled');
							}else{
								$parentEle
									.find('.widget-slider-next')
									.removeClass('widget-slider-state-disabled');
							}
							if(current == 1){
								$parentEle
									.find('.widget-slider-prev')
									.addClass('widget-slider-state-disabled');
							}else{
								$parentEle
									.find('.widget-slider-prev')
									.removeClass('widget-slider-state-disabled');
							}
						}
					});
				}
			}
		});
	}
})(jQuery);

/* call default */
jQuery(function(){jQuery('.widget-slider').jqSlider({isTouch: is_touch_device()});});