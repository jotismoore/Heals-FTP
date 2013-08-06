/**
* @fileoverview Venda.Attributes
 * Venda's Attributes functionality incorporates a standardized way of interfacing Attribute Products with the front-end as to make
 * the modification and creation of selection methods easier.
 *
 * This is the multiAdd2 interface used to display a swatch for the first attribute and hide all other attributes.
 * This interface is used to filter attibutes by the first attribute.
 *
 * The files below will be included dynamicly when required:
 * @requires js/Venda/Attributes/attributeAsset-Dropdown.js
 * @requires js/Venda/Attributes/attributeAsset-Swatch.js
 *
 * @author Alby Barber <abarber@venda.com>
 * @author Donatas Cereska <DonatasCereska@venda.com>
*/


Venda.Attributes.swatchImage = function(){
	jQuery('#swatchList_att1 li').each(function(index) {
	
		var swatchdata = this.getAttribute('data-attvalue');
		jQuery(this).css("background-image", "url(" + Venda.Attributes.SwatchURL[swatchdata] + ")");

	});
};

Venda.Attributes.Swatch = function () {
		
	jQuery(".oneProduct").each(function(index) {
		var uID = this.id.substr(11);
		Venda.Attributes.productArr[index] = new Venda.Attributes.GenerateOptionsJSON(index, uID);
		
		if(jQuery("#oneProduct_" + uID + " #attributeInputs").length) {
			
			jQuery("#oneProduct_" + uID + " #attributeInputs").addClass("type_swatch");

			Venda.Attributes.generateSwatch('att1', uID);

		}
		
	});

	// This is getting all the assets that can be loaded after the Onload	
	var url = jQuery("#tag-ebizurl").text() + '/content/ebiz/' + jQuery("#tag-ebizref").text() + '/resources/js/mobile/attributeAsset-Swatch.js';
	jQuery.getScript(url, function(Status){ if (!Status){console.warn('Whoops! attributeAsset-Swatch.js did not load')} });
	
	Venda.Attributes.swatchImage();
	
	// This function grabs the image swatch of the attributes and puts them against the correct image.
	jQuery('.multiList .prodMulti').each(function(index) {
		
		var currentdata = this.getAttribute('data-atr1');
		for(var i = 0; i < Venda.Attributes.productArr[0].attSet.att1.options.length; i++) {  
			if(Venda.Attributes.storeImgsArr[i].param === currentdata) {  
				var imgSURL	= Venda.Attributes.storeImgsArr[i].images.imgS[0]
				jQuery("img", this).attr('src', imgSURL);	
			}
		}	
	});
}();

jQuery(window).load(function(){
	if(jQuery('.attributeSwatch').length > 0){
	 jQuery(".attributeSwatch").eq(0).trigger('click');
	}
});

	
// Events
jQuery('.attributeSwatch').live('click', function() {
	var uID = this.id.substr(16);
	var attName 	= this.getAttribute('data-attName');
	var attValue 	= this.getAttribute('data-attValue');

	Venda.Attributes.setSelectedJSON(attName,attValue, uID);
	
	for (var t = 1; t <= Venda.Attributes.HowManyAtts(uID); t++) {
		Venda.Attributes.UpdateSwatch('att' + t, uID);
	}
	
	// setSelectedClass is used to add a class to the swatch .selected
	Venda.Attributes.setSelectedClass(uID);
	
	jQuery('.multiList .prodMulti').hide();
	jQuery('.multiList .prodMulti .itemlist').attr('name', '');
	jQuery('.multiList .prodMulti .qty').attr('name', ''); 
	
	jQuery('.multiList .prodMulti').each(function(index) {
	
		var currentdata = this.getAttribute('data-atr1');
	
		if (currentdata == Venda.Attributes.productArr[0].attSet.att1.selected) {
			jQuery(this).show();
			jQuery(this).find('.itemlist').attr('name', 'itemlist');
			jQuery(this).find('.qty').attr('name', 'qtylist');
		}
		else if (Venda.Attributes.productArr[0].attSet.att1.selected == ""){
			jQuery('.multiList .prodMulti').show();
		}
	});
	
	Venda.Attributes.swatchImage();

		// If you have currency converter include the following line
	if(jQuery(".currencyConverter").length) {
		if (jQuery('#tag-currencycode') && (typeof jQuery().pennies !== 'undefined')){
			jQuery('.atributesPrice .price').pennies('convert',{to:jQuery(this).pennies('get'),from: jQuery('#tag-currencycode').html()})
		}
	}

});

jQuery(".addproductmulti").live("click", function (e) {
	var numberOfzero = 0;
	jQuery(".prodMulti .qty:visible").each(function(index){ if(jQuery(this).val() == "") {numberOfzero++;} });

	// ALL NULL
	if(jQuery(".prodMulti .qty:visible").length == numberOfzero) {
		e.preventDefault();
		alert(jQuery("#attributes-noneChecked").text());
	}
});