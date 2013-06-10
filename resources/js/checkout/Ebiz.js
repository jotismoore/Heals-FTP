//Declare namespace for ebiz
Venda.namespace("Ebiz");

// FROM ./templates/widgets/styleSwitch/styleSwitch.html
jQuery(function () {
    if (typeof Venda.Widget.ViewStyle != "undefined") {
        Venda.Widget.ViewStyle.showProductPreview();
    }
});


// FROM ./templates/invt/productdetail/productdetail.html
jQuery(function () {

    // This is used by VBM and must be taken out and shoot
    if (jQuery('#infotab').length > 0 ){
        var infotab = new Venda.Widget.createTab("#infotab");
        infotab.init();
    }

    if (jQuery('#bottomtab').length > 0 ){
        var bottomtab = new Venda.Widget.createTab("#bottomtab");
        bottomtab.init();
    }
});


Venda.Ebiz.ExecuteDialogOpen = function() {


	if(jQuery('#emailmeback').length > 0){
		var attributeSku = Venda.Attributes.Get('atrsku');
		if(attributeSku != ""){
			document.emailmebackform.invtref.value = attributeSku;
		}				
	}	
    // EO FROM ./templates/invt/tellafriend/tellafriend.html
    var  dialogFormID = "#"+ jQuery('.ui-dialog').last().find('form').attr('id');
    jQuery(dialogFormID).find('input[name="layout"]').val('noheaders');
    jQuery(dialogFormID).submitForm("#back_link");
}

// FROM ./templates/widgets/compareItems/compareItems.html
jQuery(function () {
    if(document.getElementById("JS-compare")) {
        Venda.Widget.Compare.toCompare = function(){
            var compareList = Venda.Widget.Compare.toCompareItems();
            var itemList = '';
            var item ='';
            var k = 0; // counting how many checkboxes are checked

            if(compareList) {
                // Setup the compare items list.
                for(var i = 0; i < compareList.length; i++) {
                   item = '&compare=' + compareList[i];
                   itemList += item;
                   k++;
                }

                if (k >= 2) { // only open the compare window if more then 2 checkboxes are checked
                    var strUrl = document.getElementById("JS-compare-codehttp").innerHTML + '?ex=co_disp-comp&bsref=' + document.getElementById("JS-compare-codehttp").innerHTML + '&layout=noheaders' + itemList;
                    Venda.Widget.Compare.popupCompare(strUrl);
                }else{
                    alert(document.getElementById("JS-compare-product-list-compare-validation").innerHTML);
                }
            }
        }

        AddtoCompare = function(productType,sku,name,image){
            var invtName = document.getElementById(name).innerHTML;
            var image = document.getElementById(image).getElementsByTagName("img");
            var invtImage = image[0].src;

            Venda.Widget.Compare.addToCompareAndProductString(productType,sku,invtName,invtImage);
        }
    }
});
// EO FROM ./templates/widgets/compareItems/compareItems.html


//SEARCH.JS
// Links to: /resources/js/Ebiz.js
// Links to: /resources/js/Venda/Widget/ColourSwatch.js
Venda.namespace("Ebiz.BKList");
Venda.Ebiz.BKList.jq = jQuery;
Venda.Ebiz.BKList.configBKList = {
    bklist : "",
    divArray : ['#sortby', '.sort_results', '.searchpsel', '.pagn', '.refinelist'],
    removeDivArray : ['.categorytree'],
    enableBklist : true
};


//SEARCH.JS
// Links to: /resources/js/Ebiz.js
// Links to: /resources/js/Venda/Widget/ColourSwatch.js
Venda.Ebiz.BKList.getUrl = function () {
    var curUrl = document.location.href;
    if (curUrl.indexOf("&amp;") != -1) {
        curUrl = curUrl.replace(/&amp;/gi, '&');
    }
    return Venda.Platform.getUrlParam(curUrl, "bklist");
}

// NOT SURE YET
// Links to: /resources/js/Venda/Widget/RegionLangSwitch.js
// Links to: /resources/js/Venda/Widget/ViewStyle.js
// Links to: /templates/widgets/euRegionLanguage/euRegionLanguage.html
// Links to: /templates/widgets/usRegionLanguage/usRegionLanguage.html
Venda.Ebiz.CookieJar = new CookieJar({
        expires : 3600 * 24 * 7,
        path : '/'
    });

// NOT SURE YET
// Links to: /resources/js/Ebiz.js
// Links to: /resources/js/Venda/Widget/Compare.js
// Links to: /resources/js/Venda/Widget/MegaMenu.js
// Links to: /resources/js/Venda/Widget/QuickBuy.js
// Links to: /resources/js/Venda/Widget/RegionLangSwitch.js
// Links to: /resources/js/Venda/Widget/ViewStyle.js
jQuery.fn.popupIframe = function () {
    if (jQuery.browser.msie && jQuery.browser.version < "7.0") {
        var src = 'javascript:false;';
        html = '<iframe class="popupIframe" src="' + src + '" style="-moz-opacity: .10;filter: alpha(opacity=1);height:expression(this.parentNode.offsetHeight+\'px\');width:expression(this.parentNode.offsetWidth+\'px\');' + '"></iframe>';
        if (jQuery(this).find('.popupIframe').length == 0) {
            this.prepend(html);
        }
    }
};
// CHECKOUT.JS
// Links to: /templates/wizr/wz_orsc-screen/mediacodeinput/mediacodeinput.html
/**
 * Media Code
 * Validate and submit media code using ajax if not on basket for in-page display
 * Update minicart figures with ajax too if not on basket
 */
Venda.Ebiz.checkVoucherForm = function () {
    var curstep = jQuery("#tag-curstep").html();
    var str = jQuery.trim(jQuery("#vcode").val());
    if (jQuery("#vcode_submit_shopcart").length > 0) { //if on workflow    
            jQuery("#vcode").val(str);
            jQuery("#tag-waitMsg").dialog({
                modal : true,
                autoOpen : false
            });
            jQuery("#tag-waitMsg").dialog("open");
            jQuery(".ui-dialog-titlebar").hide();

            // instead of submit, submit in background to check for errors
            if (document.createElement) {
                var oScript = document.createElement("script");
                oScript.type = "text/javascript";

                if (curstep == 'ordersummary') {
                    oScript.src = jQuery("#tag-promoprotocol").html() + "?ex=co_wizr-promocodehttps&curstep=vouchercode&step=next&mode=process&curlayout=errorsorderconfirm&layout=errorsorderconfirm&vcode=" + jQuery("#vcode").val() + "&action=add";
                }else{
                    oScript.src = jQuery('#tag-promoprotocol').html() + '?ex=co_wizr-promocodehttp&curstep=vouchercode&step=next&mode=process&curlayout=errors&layout=errors&vcode=' + jQuery("#vcode").val() + '&action=add';
                }
                document.getElementById("ajax-error").appendChild(oScript);
            }
    }
};

// NOT SURE YET
// Links to: /resources/js/Ebiz.js
/**
 * simple popup
 */
Venda.Ebiz.doProtocal = function (url) {
    var protocal = document.location.protocol;
    if (url.indexOf("http:") == 0 && protocal == "https:") {
        url = url.replace("http:", "https:");
    }
    return url;
};

// NOT SURE YET
// Links to: /resources/js/Ebiz.js
// Links to: /templates/icat/productset/productset.html
// Links to: /templates/invt/emailinstock/emailinstock.html
// Links to: /templates/invt/package/package.html
// Links to: /templates/invt/productdetail/productdetail.html
// Links to: /templates/invt/productdetailMulti/productdetailMulti.html
// Links to: /templates/invt/productdetailPackage/productdetailPackage.html
// Links to: /templates/invt/productdetailSet/productdetailSet.html
// Links to: /templates/scat/productreviews/productreviews.html
Venda.Ebiz.initialDialog = function (dialogList) {
    var param = {
        createDialogList : '',
        closeDialogList : '',
        settings : ''
    }
    var options = jQuery.extend(param, dialogList);
    var popupWidth = '500';
    var popupHeight = 'auto';
    var popupClass = '';
    var anchorName = '';
    jQuery(options.createDialogList).live('click',function () {
        Venda.Ebiz.initialDialog.clickedElement = this;
        if (jQuery(this).attr("rel")) {
            var attrRel = jQuery(this).attr("rel").split(",");
            popupWidth = attrRel[0] || '500';
            popupHeight = attrRel[1] || 'auto';
            popupClass = attrRel[2];
            anchorName = attrRel[3];
        }
        jQuery(this).createDialog('dialogContent', {
            'width' : popupWidth,
            'height' : popupHeight
        }, options.closeDialogList, popupClass, anchorName);
        return false;
    });
};

// NOT SURE YET comes along with "Venda.Ebiz.initialDialog"
// Links to: /resources/js/Ebiz.js
Venda.Ebiz.dialogObject = '';
jQuery.fn.createDialog = function (selector, settings, closePopupId, dialogClassName, anchorName) {
    dialogClassName = dialogClassName + "Dialog";
    var dialogOpts = {
        autoOpen : false,
        closeOnEscape : true,
        resizable : false,
        width : 'auto',
        modal : true,
        dialogClass : dialogClassName,
        close : function () {
            dialogObj.dialog("destroy");
            dialogObj.remove();
        }
    }
    var H = jQuery(window).height();
    divObj = jQuery("<div>").attr("id", selector).appendTo("body");
    dialogObj = jQuery(divObj);
    /* popup object */
    dialogObj.dialog(dialogOpts);
    dialogObj.addClass("loadingImg");
    jQuery(".ui-dialog-titlebar").hide();
    for (var iSetting in settings) {
        dialogObj.dialog("option", iSetting, settings[iSetting]);
    };
    jQuery(".ui-dialog").popupIframe();
    dialogObj.dialog("open");


    var url = Venda.Ebiz.doProtocal(jQuery(this).attr("href"));
    dialogObj.load(url + "&layout=noheaders", function () {
        var setHeight = H - dialogObj.height();
        dialogObj.dialog("option", "position", setHeight);
        Venda.Ebiz.closeDialog(closePopupId);
        dialogObj.removeClass("loadingImg");
        jQuery(".ui-dialog-titlebar").show();
		if (jQuery('.toggleContent').length > 0){
			Venda.Ebiz.expandContent()
		}
        if (anchorName) {
            jQuery(".toggleContent > h3." + anchorName).trigger('click');
        }
		Venda.Ebiz.doPopUpContent();
    });
    Venda.Ebiz.dialogObject = dialogObj;
    jQuery('.ui-widget-overlay').live('click', function () {
        dialogObj.dialog("close");
    });
    return false;
};

// NOT SURE YET
// Links to: /resources/js/Ebiz.js
Venda.Ebiz.closeDialog = function (closePopupId) {
    jQuery(closePopupId).live('click', function () {
        dialogObj.dialog("close");
        return false;
    });
};

// NOT SURE YET
// Links to: /page/contact/lang/en/1324366415_0.html
// Links to: /templates/invt/emailinstock/emailinstock.html
// Links to: /templates/invt/tellafriend/tellafriend.html
// Links to: /templates/invt/writereview/writereview.html
jQuery.fn.submitForm = function (closePopupId) {
    var obj = jQuery(this);
        var URL = obj.attr('action');
        /* get target*/
        var params = obj.find("input, select, textarea").serialize();
        /* get the value from all input type*/
        jQuery.ajax({
            type : "POST",
            url : URL,
            dataType : "html",
            data : params,
            cache : false,
            /* do not cache*/
            error : function () {
                dialogObj.html('Error!');
            },
            success : function (data) {
                dialogObj.html(data);
                Venda.Ebiz.closeDialog(closePopupId);
            }
         });
   return false;
};

// NOT SURE YET
// Links to: /page/faqs/lang/en/1306417471_0.html
/**
 * Expand contents
 */
Venda.Ebiz.expandContent = function () {
    var txtShow = (jQuery("#txtShow").length != 0) ? jQuery("#txtShow").html() : "";
    var txtHide = (jQuery("#txtHide").length != 0) ? jQuery("#txtHide").html() : "";

    jQuery(".toggleContent > div").hide();
    jQuery(".toggleContent > h3").each(function () {
        jQuery(this).attr("title", txtShow)
    });
    jQuery(".toggleContent > h3").click(function () {
        jQuery(this).toggleClass("selected");
        if (jQuery(this).is(".selected")) {
            jQuery(this).attr("title", txtHide);
        } else {
            jQuery(this).attr("title", txtShow);
        }
        jQuery(this).next().slideToggle("fast");
    });
};

// NOT SURE YET
// Links to: /resources/js/Ebiz.js
Venda.Ebiz.findPopUps = function () {
    var popups = document.getElementsByTagName("a");
    for (i = 0; i < popups.length; i++) {
        if (popups[i].rel.indexOf("popup") != -1) {
            // attach popup behaviour
            popups[i].onclick = Venda.Ebiz.doPopUp;
        }
    }
};

// NOT SURE YET
// Links to: /templates/pcat/helpNavigation/helpNavigation.html
Venda.Ebiz.doPopUpContent = function () {

    if (jQuery("#helpNavigation").length > 0) {
        // FROM ./templates/pcat/helpNavigation/helpNavigation.html
        jQuery("#helpNavigation a").live('click', function() {
			var url = jQuery(this).attr("href");
			url = Venda.Ebiz.doProtocal(url);
			Venda.Ebiz.dialogObject.load(url);
            return false;
        });
    };	
    // FROM ./templates/invt/tellafriend/tellafriend.html
    if(jQuery('.tellafriend').length > 0) {
        jQuery("#field1").textboxCount(".textMsgCount",{
            maxChar: 200,
            countStyle: 'down',
            alert: ""
        });
    }		
	if(jQuery('.writeownreviewDialog').length > 0) {
		jQuery(".readreviewDialog").remove(); 	
	}	
};

// NOT SURE YET comes along with "Venda.Ebiz.findPopUps"
// Links to: /resources/js/Ebiz.js
// Links to: /templates/pcat/helpNavigation/helpNavigation.html
Venda.Ebiz.doPopUp = function (e) {
    //set defaults - if nothing in rel attrib, these will be used
    var type = "standard";
    var strWidth = "780";
    var strHeight = "580";
    //look for parameters
    attribs = this.rel.split(" ");
    if (attribs[1] != null) {
        type = attribs[1];
    }
    if (attribs[2] != null) {
        strWidth = attribs[2];
    }
    if (attribs[3] != null) {
        strHeight = attribs[3];
    }
    if(!e) var e = window.event;
   //e.cancelBubble is supported by IE - this will kill the bubbling process.
    e.cancelBubble = true;
    e.returnValue = false;

    //e.stopPropagation works only in Firefox.
    if ( e.stopPropagation ) e.stopPropagation();
    if ( e.preventDefault ) e.preventDefault();

    type = type.toLowerCase();
    if (type == "fullscreen") {
        strWidth = screen.availWidth;
        strHeight = screen.availHeight;
    }
    var tools = "";
    if (type == "standard") {
        tools = "resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width=" + strWidth + ",height=" + strHeight + ",top=0,left=0";
    }
    if (type == "console" || type == "fullscreen") {
        tools = "resizable,toolbar=no,location=no,scrollbars=yes,width=" + strWidth + ",height=" + strHeight + ",left=0,top=0";
    }
    newWindow = window.open(this.href, 'newWin', tools);
    newWindow.focus();
};

// NOT SURE YET
// Links to: /resources/js/Venda/Widget/ColourSwatch.js
/**
 * Remove any special characterSet
 * @param {string} str - string with any special characters
 * @return {string} str - string WITHOUT any special characters
 */
Venda.Ebiz.clearText = function (str) {
    var iChars = /\$|,|@|#|~|`|\%|\*|\^|\&|\(|\)|\+|\=|\/|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\?|\||\\|\!|\$|\./g;
    return str.replace(iChars, "");
};

// NOT SURE YET - not sure if this is still in use
// Links to: /templates/wizr/wz_orad-itemship/wz_orad-itemship.html
// Links to: /templates/wizr/wz_orsc-screen/standard_items/standard_items.html
/**
 * To validate Qty - the accept value is only number
 *
 * @return {boolean} - true if only number entered
 */
Venda.Ebiz.validateQty = function () {
    var filterNumber = /(^-?[1-9](\d{1,2}(\,\d{3})*|\d*)|^0{1})$/;
    var hasQty = true;

    jQuery("#qty, .qty").each(function (index) {
        if ((parseInt(jQuery(this).val()) < 0) || (filterNumber.test(jQuery(this).val()) == false)) {
            hasQty = false;
            return false;
        }
    });
    if (!hasQty) {
        alert(jQuery("#tag-qtymsg").text());
        return false;
    }

    return true;
};

// NOT SURE YET
// Links to: /templates/wizr/wz_orcf-screen/wz_orcf-screen.html
Venda.Ebiz.validateGiftcode = function (formName, msg) {
    if (document.forms[formName].giftcode.value == "") {
        alert(msg);
        document.forms[formName].giftcode.focus();
        return false;
    }
    Step2(document.forms[formName], "confirm", "process", "show", "giftcert", "_self", "", "", "", "");
};

// NOT SURE YET
// Links to: /resources/js/Ebiz.js
// Links to: /page/signupforemails/lang/en/1273720905_0.html
// Links to: /templates/invt/emailinstock/emailinstock.html
// Links to: /templates/invt/tellafriend/tellafriend.html
// Links to: /templates/invt/writereview/writereview.html
// Links to: /templates/wizr/wz_orbt-screen/contact_address/contact_address.html
// Links to: /templates/wizr/wz_orzc-screen/singlestep_lookup/contact_address/contact_address.html
// Links to: /templates/wizr/wz_orzc-screen/singlestep_lookup/singlestep_lookup.html
/**
 *  Element - Email newsletter signup / EMWBIS
 */
Venda.Ebiz.checkemail = function (str) {
    var filter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,7}|\d+)$/i;
    return (filter.test(str))
};

// NOT SURE YET
// Links to: /templates/widgets/emailSignup/emailSignup.html
Venda.Ebiz.validateEmail = function (mail, msg) {
    if (Venda.Ebiz.checkemail(mail.email.value)) {
        mail.submit();
    } else {
        alert(msg);
        mail.email.focus();
    }
};

// NOT SURE YET
// Links to: /templates/invt/package/package.html
// Links to: /templates/widgets/compareItems/compareItems.html
// Links to: /templates/widgets/lastViewedItems/lastViewedItems.html
// Links to: /templates/widgets/recentSearch/recentSearch.html
// Links to: /templates/widgets/recentlyViewedItems/recentlyViewedItems.html
// Links to: /templates/widgets/recentlyViewedProductDetailSlider/recentlyViewedProductDetailSlider.html
// Links to: /templates/wizr/wz_gift-screen/wz_gift-screen.html
// Links to: /templates/wizr/wz_orcp-screen/wz_orcp-screen.html
/**
 *  addEvent script from http://www.accessify.com/features/tutorials/the-perfect-popup/
 *  This function is moved from 'sitewide.js', so avoid the error.
 */
function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture);
        return true;
    } else if (elm.attachEvent) {
        var r = elm.attachEvent('on' + evType, fn);
        return r;
    } else {
        elm['on' + evType] = fn;
    }
};

jQuery(function () {

    // find the link that has 'doDialog' class to do the popup
    Venda.Ebiz.initialDialog({
        createDialogList : '.doDialog',
        closeDialogList : '#back_link',
        settings : ''
    });
    Venda.Ebiz.findPopUps();

    // Gift certificate - input on order summary
    jQuery("#giftcode").keypress(function (event) {
        if (event.which == "13") {
            jQuery("#applyCode").trigger("click");
            return false;
        }
    });
	//Promotion code redeem - extracted from ordersummary
	jQuery("#additionalservices").on('keypress', "#vcode", function(event) {
            if(event.keyCode===13){
				jQuery('#promotionform').submit();
            }
    });
    /**
     * Media Code
     * Hide noscript comment
     * Add listeners to media code form elements
     */
    jQuery(".nonjs").css("display", "none");



    /**
     * Popup Download Link Page
     */
    jQuery(".downloadLink").click(function () {
        jQuery(this).createDialog('download', {
            'dialogClass' : 'download',
            'width' : '540px'
        }, '');
        return false;
    });

    jQuery.fn.textboxCount = function (obj, options) {
        var t_settings = {
            maxChar : 80,
            countStyle : 'down',
            /* up, down*/
            countNegative : false,
            alert : ""
        }
        var settings = jQuery.extend(t_settings, options);
        var t_obj = jQuery(this);

        function addClassCharNumber() {
            jQuery(obj).removeClass("c_green c_red");
            if (t_objLength <= options.maxChar) {
                jQuery(obj).addClass("c_green");
            } else {
                jQuery(obj).addClass("c_red");
            }
        }

        function showCharNumber() {
            t_objLength = t_obj.val().length;
            if (options.countStyle == 'up') {
                jQuery(obj).html(t_objLength + "/" + options.maxChar);
            } else if (options.countStyle == 'down') {
                jQuery(obj).html(options.maxChar - t_objLength);
            }
            addClassCharNumber(t_objLength);
        }

        function doAlertMsg(event) {
            var key = event.which;
            if (key >= 33) {
                if (t_obj.val().length >= options.maxChar) {
                    event.preventDefault();
                    alert(options.alert);
                }
            }
        }

        charLength = 0;
        function doCount(event) {
            t_objLength = t_obj.val().length;

            if ((t_objLength <= options.maxChar) || (options.countNegative)) {
                if (options.countStyle == 'up') {
                    charLength = t_objLength;
                    jQuery(obj).html(charLength + "/" + options.maxChar);
                } else if (options.countStyle == 'down') {
                    charLength = options.maxChar - t_objLength;
                    jQuery(obj).html(charLength);
                }
            } else {
                var scrollPos = t_obj.scrollTop();
                t_obj.val(t_obj.val().substring(0, options.maxChar));
                t_obj.scrollTop(scrollPos);

            }
            addClassCharNumber(t_objLength);

            if (options.alert != "") {
                doAlertMsg(event);
            }
        }

        showCharNumber();
        jQuery(this).bind('keydown keyup keypress mousedown', doCount);

        jQuery(this).bind('paste', function (e) {
            // check if right button is clicked
            setTimeout(function () {
                doCount();
                showCharNumber();
            }, 5);
        });
    }

    //view itemperpage/ sort by  dropdown changed a duplicate id
    if (jQuery("div.pagnBtm")) {
        if (jQuery("div.pagnBtm .pagnPerpage label")) {
            //view itemperpage
            jQuery("div.pagnBtm .pagnPerpage label").attr('for', 'perpagedpdBT');
            jQuery("div.pagnBtm .pagnPerpage select").attr({
                id : 'perpagedpdBT',
                name : 'perpagedpdBT'
            });
            //sort by
            jQuery("div.pagnBtm .sort label").attr('for', 'sortbyBT');
            jQuery("div.pagnBtm .sort select").attr({
                id : 'sortbyBT',
                name : 'sortbyBT'
            });
        }
    }

    // load socialButtons
    if(jQuery('.socialButtons').length > 0){
        jQuery('.socialButtons').socialButtons();
    }

        // FROM ./templates/workflow/giftcertificates/giftvoucher/giftvoucher.html
        if (jQuery(".giftcertificates #comment").length === 1) {
            jQuery("#comment").keypress(function(event) {
                if (this.value.length > 250) {
                // trim if too long
                this.value = this.value.substring(0, 250);
                }
            });
            jQuery("#comment").textboxCount(".textMsgCount",{
                maxChar: 250,
                countStyle: 'down',
                alert: ""
            })
        }
});

/**
* simple color swatch on productlist/searchresult
* @requires jQuery v1.7.1 or greater
* @param {object} - configutation
*   - contentID: search content ID
*   - selectFirstColor: set to true to enable preselect first color swatch
*/
Venda.namespace("Ebiz.colorSwatch");
Venda.Ebiz.colorSwatch = function(conf){
    var defaults = {
        contentID: '#content-search',
        selectFirstColor: true
    };
    this.conf=jQuery.extend(defaults, conf);
};

Venda.Ebiz.colorSwatch.prototype = {
    init: function(){
            jQuery(this.conf.contentID).on("click", ".swatchContainer a", function(){

            var $this = jQuery(this);

            var mainImg      = $this.data("setimage"),
                mainImgObj   = jQuery("#"+ $this.data("prodid") ),
                mediumImg    = $this.data("setimagemedium"),
                detailsObj   = jQuery("#"+ $this.data("detailsid") ),
                prodLink     = mainImgObj.find("a:first").data("prodLink");

            if(mainImg == ""){
                mainImg = mainImgObj.find("a:first").data("defaultImage");
            }

            mainImgObj.find('img:first')
                .attr("src", mainImg)
                .end()
                .find("a:first")
                .attr("href", this.href || "");

            $this.parent("").find("a").removeClass("sw_selected");
            $this.addClass("sw_selected");
            detailsObj.find(".imgSource").html(mediumImg); //reset image source value to corresponding with colour swatch selected
            return false;

        });
        if(this.conf.selectFirstColor){
            jQuery('.swatchContainer div').find(" > a:first").click();
        }
    }
};

/**
* prevent missing euro sign if use ajax on IE
* @requires jQuery v1.5 or greater
*/
jQuery(document).ajaxComplete(function() {
    if(jQuery.browser.msie){
        jQuery('#term .refine-list, .price, #pricerangevalues, #updateTotal').html(function(idx, price) {
            return price.replace(/\u0080([\d.]+)/g, "\u20ac$1");
        });
    }
});



// function calls that used to be in line //

if (jQuery('#sliderlist').length > 0){
    jqSlider({
        sliderID:'sliderlist',
        displayCount: 5,
        slideAmtNum: 1,
        slideLeft:'slideLeft',
        slideRight:'slideRight',
        duration: 0.3});
    if (is_touch_device()) {
        jQuery('.sliderWrapper').css('overflow','auto');
        jQuery('.sliderBt').remove();
    }
}

if (jQuery('#showRVI').length > 0){
    var venda_invtref = jQuery('#tag-invtref').text();
    Venda.Widget.RecentlyViewedItems.setRecentlyViewedItems(venda_invtref, (venda_invtref, 10));
}

if (jQuery('#showRVISiteWide').length > 0){
    Venda.Widget.RecentlyViewedItems.setRVISiteWide(Venda.Platform.CookieJar)
}

if (jQuery('.toggleContent').length > 0){
    Venda.Ebiz.expandContent()
}



jQuery('body').bind('quickbuy-loaded', function(){
    Venda.Attributes.Initialize();
    jQuery('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
});


/**
* remove product from quick shop page
* @param {string} the sku removed
*/
Venda.Ebiz.qshopRemove = function(invtref){
    var curUrl = document.location.href;
    var newUrl = curUrl.replace(invtref,'');
    var dialogOpts = {modal: true,autoOpen: false,width:'320px'};
    jQuery(".waitMesg").dialog(dialogOpts);
    jQuery(".waitMesg").dialog("open");
    document.location.href = newUrl;
};

Venda.Ebiz.emailSignup = function() {
 var userEmail = Venda.Platform.getUrlParam(location.href, 'email');
var displyEmail = Venda.Platform.escapeHTML(userEmail);
var sesUsEmail = jQuery('#sesUsEmailDiv').html();
var userType = jQuery('#userType').html();
	if ((sesUsEmail == userEmail) || (sesUsEmail == '')) {
		document.emailsonly.usemail.value = userEmail;
		document.getElementById("newsignup").style.display ="block";
		document.getElementById("newsignupemail").innerHTML =  displyEmail ;
	} else {
		document.emailsonly.usemail.value = userEmail;
		document.emailsonly.log.value = '4';
		if (userType != 'G') { 
			document.getElementById("alreadysignup").style.display ="block";
			document.getElementById("sesUsEmail").innerHTML =  sesUsEmail ;
			document.getElementById("displyEmail").innerHTML =  displyEmail ;
		} else {
			document.getElementById("newsignup").style.display ="block";
			document.getElementById("newsignupemail").innerHTML =  displyEmail ;
		}
	}
};

jQuery(function(){
	if(jQuery('#emailSignup').length > 0){
		Venda.Ebiz.emailSignup();
	}
	
	//10CMS on category list page
	if (jQuery('#flashlanding').length > 0){
		interact.embedApp({
			target: jQuery("#tag-target").html(),
			width:  jQuery("#tag-width").html(),
			height:  jQuery("#tag-height").html(),
			vars: 	{id: jQuery("#tag-vars").html()},
			params: {bgcolor:"#ffffff", wmode:"transparent",base:jQuery("#tag-params").html()},
			src: 	[
						{type:"html5", src:jQuery("#tag-srcHtml5").html()},
						{type:"swf", src:jQuery("#tag-srcSwf").html(),version:"9.0.0"}
					]
		});  
	}		
});
