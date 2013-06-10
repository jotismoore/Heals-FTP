// Create Checkout namespace
Venda.namespace('Platform.Checkout.jsContent');
Venda.namespace('Checkout');
/**
 * Check for JavaScript and load checkbox for different delivery address
 * @param {swapid}	id of tag
 * @param {tags}	output for JS view
 */
Venda.Platform.Checkout.jsContent.create = function(swapid, tags) {
	Venda.Platform.Checkout.jsContent.tags = tags;

	// check if DOM is available
	if(!document.getElementById || !document.createTextNode){return;}
	// check if there is a "No JavaScript" message
	var nojsmsg=document.getElementById(swapid);
	if(!nojsmsg){return;}

	switch(swapid) {
		case 'differentdeliveryaddress':
			// create a new div containing different delivery address checkbox
			var newDiv=document.createElement('div');

			var newInput=document.createElement('input');
			newInput.type='checkbox';
			newInput.setAttribute('name','differentaddress');// there is an IE bug where you cannot add a name attribute
			newInput.id='differentaddress';

			var label = document.createElement('label');
			label.setAttribute('for','differentaddress');
			label.appendChild(document.createTextNode(Venda.Platform.Checkout.jsContent.tags.label));

			newDiv.appendChild(newInput);
			newDiv.appendChild(label);
			newDiv.appendChild(document.createTextNode(' '+Venda.Platform.Checkout.jsContent.tags.message));
			nojsmsg.parentNode.replaceChild(newDiv,nojsmsg);
		break;
	}
};

//Function to prevent single quotes in text input - used in gift wrap screen
function noSingleQuotes(formName) {
for(i=0;i<(formName.elements.length);i++){
    	if(((formName.elements[i].type === "textarea") || (formName.elements[i].type === "text")) && (formName.elements[i].value!="")){
    		formName.elements[i].value = formName.elements[i].value.replace(/'/gi, '');
    	}
	}
};
/**
 * Selecting the delivery option automatically by depend the delivery address
 * @param {paramList}	id of the delivery option
 */
Venda.Checkout.initialDTS = function(dtsenabled){
	var dtsOption ="#dts"; //the delivery option ID for store address
	var defaultOption = "";
	if(dtsenabled == 1){
		if(jQuery(".deliveryoptions").find(dtsOption).length){
			if(jQuery(".storeAddress").length){
				jQuery(".storeAddress").each(function(){
					if(!jQuery(this).find(dtsOption).attr('checked')){
						jQuery(this).find(dtsOption).attr('checked',true).trigger("click");
					}
					jQuery(this).find("input:not(:checked)").each(function(){
						jQuery(this).attr("disabled","disabled");
					});
				});
			}
			if(jQuery(".homeAddress").length){
				jQuery(".homeAddress").each(function(){
					if(jQuery(this).find(dtsOption).attr('checked')){
						jQuery(this).find('li input').not(dtsOption).attr('checked',true).trigger("click");
					}
					jQuery(this).find(dtsOption).attr("disabled","disabled");
				});
			}
		}
	}else {
		if(jQuery(".deliveryoptions").find(dtsOption).length){
			jQuery(".deliveryoptions").find(dtsOption).parents('li').hide();
		}
	}
};

/* Tablet Work */
jQuery(document).ready(function() {

  if (typeof is_touch_device === 'function' && is_touch_device()) {

        jQuery('input[name*="email"][type!=checkbox]').each(function () {
                var new_email = jQuery(this).clone();
                new_email.attr('type','email');
                new_email.insertBefore(jQuery(this));
                jQuery(this).remove();
        });

        var tel_old = jQuery('input[name*="phone"]');
        var tel_new = tel_old.clone();
        tel_new.attr('type','tel');
        tel_new.insertBefore(tel_old);
        tel_old.remove();

  };
});

/**
* Update shipping method by submitting the form
* @param {String} formId - a form id to submit
*/
Venda.Checkout.updateShipmethod = function (formId){
	var dialogOpts = {modal: true,autoOpen: false};
	jQuery(".waitMesg").dialog(dialogOpts);
	jQuery(".waitMesg").dialog("open");
	jQuery(".ui-dialog-titlebar").hide();
	jQuery(formId).submit();
};
jQuery('input[name*="shipmethod_"]').click(
	function(){Venda.Checkout.updateShipmethod('#'+(this).form.id);}
);

/**
* Clean login session value in the form
* @param {String} formId - a form id to clear unnecessary value
*/
Venda.Checkout.cleanUp = function(formSelector){
    var email = jQuery(formSelector+" #email").val();
	if(email !== ""){
		if ((email.substring(0,1)==="<") || (email.substring(0,4)==="user")) {
			jQuery(formSelector+" #email").val("");
		}
	}
	if(jQuery(formSelector+" #password").val()!== ""){
		jQuery(formSelector+" #password").val("");
	}
};
/**
* Get UK address
*/
Venda.Checkout.addressList = function(){
	var zipc = jQuery("#zipc").val();
    var cntry = "&cntry="+ jQuery("#cntrylist").val();
    var zipcodeUrl = encodeURI(jQuery("#tag-zipcodeUrl").html()+zipc+cntry);

    if (!jQuery("#zipc").parents("form").validate().element("#zipc")){
        return false;
    }

	jQuery(".loading").show();
	jQuery("#error").parent().hide();
    jQuery("#error").html(" ");
	if(jQuery("#uklist").find("#error").length){
		jQuery("#uklist").html(" ");
	}
	jQuery("#uklist").load(zipcodeUrl,function(response, status, xhr) {
		jQuery(".loading").hide();
       // jQuery("#zipc").rules("add", "selectAddress");
        if(jQuery("#uklist select[name=zcdropdown]").length==0) {
            jQuery("#error").html("Postcode not found");
            jQuery("#error").parent().show().delay(2000).fadeOut();
        }
		if (status === "error") {
			var msg = "Sorry but there was an error: ";
			jQuery("#error").html(msg + xhr.status + " " + xhr.statusText);
		}
	});
};

/**
* Fill the UK address from dropdown to input field
*/
Venda.Checkout.selectAddress = function(){
	var addressUrl = jQuery("#tag-addressUrl").html();
	var zcdropdown = "&zcdropdown="+ jQuery("select[name=zcdropdown] option:selected").val();
	var zipc = "&zipc="+ jQuery("#zipc").val();
    var cntry = "&cntry="+ jQuery("#cntrylist").val();

    jQuery("#ukaddress").load(encodeURI(addressUrl+zcdropdown+zipc+cntry),function(response, status, xhr) {
        var field = {
            'company': jQuery("#ukaddress #tag-zccompany").text(),
            'num': jQuery("#ukaddress #tag-zcnum").text(),
            'addr1': jQuery("#ukaddress #tag-zcaddr1").text(),
            'addr2': jQuery("#ukaddress #tag-zcaddr2").text(),
            'city': jQuery("#ukaddress #tag-zccity").text(),
            'statetext': jQuery("#ukaddress #tag-zcstate").text()
        };
        jQuery.each(field, function(key, value) {
            jQuery("#"+key).val(value);
        });
		if (status === "error") {
			var msg = "Sorry but there was an error: ";
			jQuery("#error").html(msg + xhr.status + " " + xhr.statusText);
		}
	});
};

jQuery(function(){

    //Bind change event for UK address dropdown
    jQuery("select[name=zcdropdown]").live("change",function() {
        Venda.Checkout.selectAddress();
        return false;
    });

    //Clear email field if there's a login form
    var loginForm = "#existingcustomer";
    var onLogin = jQuery(loginForm).length;
    if(onLogin>0){
        Venda.Checkout.cleanUp(loginForm);
    };
	//Pass email address between login and password reminder screens, by appending to the url
	jQuery(document).on('click','a#passwordreminder',function(){ //used on login screen - forgotten password link
		var email = jQuery('input#email').val();
		if (email){
			jQuery('a#passwordreminder').attr('href',function(i, val) {return val + '&param1=' + email});
		}
	});
	jQuery(document).on('click','a#cancelreminder',function(){ //used on pwrm screen - cancel button
		var email = jQuery('input#usemail').val();
		if (email){
			jQuery('a#cancelreminder').attr('href',function(i, val) {return val + '&param1=' + email + '&param2=passwordcancel'});
		}
	});
	jQuery(document).on('click','input#passwordsent',function(){ //used on pwrm screen - continue button
		var email = jQuery('input#usemail').val();
		if (email){
			jQuery('input[name=param1]').val(email);
		}
	});
	//Delete item from shopcart - extracted from shopcart
	jQuery("#shopcart").on("click","a.removeItem",function(){
	    var line = jQuery(this).attr("data-line");
		var wizard = jQuery(this).attr("data-wizard");
        jQuery("input[name='"+line+"']").val(1);
		jQuery("input[name='wizard']").val(wizard);
	    jQuery('form#shopcart').submit();
	});
	//order summary payment types - extracted from ordersummary
	if(typeof document.ordersummaryform !== "undefined" && document.ordersummaryform.ohpaytype !== "undefined") {
	    var paylocate;
	    for (var i=0; i<document.ordersummaryform.ohpaytype.length; i++) {
			if ( document.ordersummaryform.ohpaytype[i].value == 2) {
				paylocate = i;
			}
	    }
    }
	jQuery("#paymentdetails").on("click","#creditcard,#formpaypal",function(){
		var objPay = this;
		if (typeof document.ordersummaryform.payall!=="undefined") {
		    if (objPay.checked === true && objPay.value != 2) {
			    document.ordersummaryform.payall.checked = false;
			    document.ordersummaryform.sendpaypaid.readOnly = false;
			    document.ordersummaryform.sendpaypaid.value = "";
		    }
	    }
	});
	//extracted from paymenttype_card
	if(jQuery("#ohccnum").length>0){
        Venda.Platform.SelectBoxToggle( 'cardtype','directdebitsde',['expiryshow','ohcccscshow','switchsolo','issuenumber','startdateshow','ohccnum-label'],['sortcodeshow','ohccnum-elv-label'], 80);
    };

	//Update shopcart quantities on multiple deliver addresses - extracted from multipledeliveryaddresses
	jQuery(".multipledeliveryaddresses .bottomButtons").on("click","#updatequantities",function(){
	    jQuery("input[type=hidden][name=param2]").val("updated");
	    jQuery("input[type=hidden][name=step]").val("multipledeliveryaddresses");
	});
	//Gift wrapping
    //form id=giftwrap id="formgw-<venda_oirfnbr>" onchange="showGiftwrap('gw-<venda_oirfnbr>');"
	//data-oirfnbr
	if(jQuery("#giftwrap").length>0){
		//don't know what this does
		jQuery(".wrapdetail td").each(function(){
			var newClass = jQuery(this).attr("class");
			newClass = newClass.replace(/\s/g,"-");
			jQuery(this).addClass(newClass);
		});
		//dropdown
		jQuery("td").on("change","select",function(){
		    var oirfnbr = jQuery(this).attr("data-oirfnbr");
			showGiftwrap("gw-"+oirfnbr);
		});
		showGiftwrap = function(wrapselect){
			var selectText = jQuery("select[id=form"+wrapselect+"] option:selected").text();
			selectText = selectText.replace(/\s/g,"-");
			jQuery("."+wrapselect).find(".gwsell").html(jQuery(".sell"+selectText).html());
			jQuery("."+wrapselect).find(".gwimg").html(jQuery(".img"+selectText).html());
		};
		//gift message
		countGiftMsg = function(oirfnbr){
			jQuery("#formcm-"+oirfnbr).textboxCount(".textMsgCount-"+oirfnbr,{
				maxChar: 80,
				countStyle: 'down',
				alert: ""
			});
		};
        jQuery(function() {
            jQuery("td textarea").each(function(){
			    countGiftMsg(jQuery(this).attr("data-oirfnbr")); //errors here dunno why
		    });
        });
		jQuery("td textarea").focus(function() {
            countGiftMsg(jQuery(this).attr("data-oirfnbr"));
        });
	};
});

if (jQuery('.js-dtsenabled').length > 0 ){
    Venda.Checkout.initialDTS(jQuery('.js-dtsenabled').html());
}