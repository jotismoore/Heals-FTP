function rtrim(a,b){b=b||"\\s";return a.replace(new RegExp("["+b+"]+$","g"),"")}function ltrim(a,b){b=b||"\\s";return a.replace(new RegExp("^["+b+"]+","g"),"")}function trim(a,b){return ltrim(rtrim(a,b),b)}function HealsValidate(){var a=true;if($("#height_m").val()!=""&&!wpIsInt($("#height_m").val())){a=false}if($("#height_c").val()!=""&&!wpIsInt($("#height_c").val())){a=false}if($("#length1_m").val()!=""&&!wpIsInt($("#length1_m").val())){a=false}if($("#length1_c").val()!=""&&!wpIsInt($("#length1_c").val())){a=false}if($("#length2_m").val()!=""&&!wpIsInt($("#length2_m").val())){a=false}if($("#length2_c").val()!=""&&!wpIsInt($("#length2_c").val())){a=false}if($("#length3_m").val()!=""&&!wpIsInt($("#length3_m").val())){a=false}if($("#length3_c").val()!=""&&!wpIsInt($("#length3_c").val())){a=false}if($("#length4_m").val()!=""&&!wpIsInt($("#length4_m").val())){a=false}if($("#length4_c").val()!=""&&!wpIsInt($("#length4_c").val())){a=false}if($("#repeat").val()!=""&&!wpIsInt($("#repeat").val())){a=false}if($("#width").val()!=""&&!wpIsInt($("#width").val())){a=false}if(a){if($("#height_m").val()==""&&$("#height_c").val()==""){a=false}if($("#repeat").val()==""){a=false}if($("#width").val()==""){a=false}if($("#length1_m").val()==""&&$("#length1_c").val()==""&&$("#length2_m").val()==""&&$("#length2_c").val()==""&&$("#length3_m").val()==""&&$("#length3_c").val()==""&&$("#length4_m").val()==""&&$("#length4_c").val()==""){a=false}}return a}function HealsTidy(){$("#height_m").attr("value",trim($("#height_m").val()));$("#height_c").attr("value",trim($("#height_c").val()));$("#length1_m").attr("value",trim($("#length1_m").val()));$("#length1_c").attr("value",trim($("#length1_c").val()));$("#length2_m").attr("value",trim($("#length2_m").val()));$("#length2_c").attr("value",trim($("#length2_c").val()));$("#length3_m").attr("value",trim($("#length3_m").val()));$("#length3_c").attr("value",trim($("#length3_c").val()));$("#length4_m").attr("value",trim($("#length4_m").val()));$("#length4_c").attr("value",trim($("#length4_c").val()));$("#repeat").attr("value",trim($("#repeat").val()));$("#width").attr("value",trim($("#width").val()))}function wpIsInt(a){return!isNaN(a)&&parseInt(a)==a}function HealsEstimate(){HealsTidy();var a=HealsValidate();if(!a){alert("Please enter a wall height, at least one wall length, the roll repeat and roll width - ensuring only whole numbers are used.")}else{var b=3.2808399;var c=0;var d=0;var e=0;var f=0;var g=0;var h=0;var i=0;var j=100;if($("#unit").val()=="i"){j=12}if($("#height_m").val()!=""){c+=Number($("#height_m").val())}if($("#height_c").val()!=""){c+=Number($("#height_c").val()/j)}if($("#repeat").val()!=""){d+=Number($("#repeat").val()/j)}if($("#width").val()!=""){e+=Number($("#width").val()/j)}if($("#length1_m").val()!=""){f+=Number($("#length1_m").val())}if($("#length1_c").val()!=""){f+=Number($("#length1_c").val()/j)}if($("#length2_m").val()!=""){g+=Number($("#length2_m").val())}if($("#length2_c").val()!=""){g+=Number($("#length2_c").val()/j)}if($("#length3_m").val()!=""){h+=Number($("#length3_m").val())}if($("#length3_c").val()!=""){h+=Number($("#length3_c").val()/j)}if($("#length4_m").val()!=""){i+=Number($("#length4_m").val())}if($("#length4_c").val()!=""){i+=Number($("#length4_c").val()/j)}f=Math.abs(f);g=Math.abs(g);h=Math.abs(h);i=Math.abs(i);var k=0;var l=0;var m=0;var n=0;if($("#unit").val()=="i"){c=c/b;d=d/b;e=e/b;f=f/b;g=g/b;h=h/b;i=i/b}if(f>0){k=k+Math.ceil(f/e)}if(g>0){k=k+Math.ceil(g/e)}if(h>0){k=k+Math.ceil(h/e)}if(i>0){k=k+Math.ceil(i/e)}if(d>0){l=Math.ceil(c/d)*d}else{l=c}totalLength=l*k;n=Math.ceil(totalLength/10);$("#res").attr("value",n)}return false}function HealsReset(){$("#height_m").attr("value","");$("#height_c").attr("value","");$("#length1_m").attr("value","");$("#length1_c").attr("value","");$("#length2_m").attr("value","");$("#length2_c").attr("value","");$("#length3_m").attr("value","");$("#length3_c").attr("value","");$("#length4_m").attr("value","");$("#length4_c").attr("value","");$("#repeat").attr("value","");$("#width").attr("value","");$("#res").attr("value","")}function HealsSetUnit(){if($("#unit").val()=="m"){HealsWallpaperCalculator="m";$(".u_m").html("m");$(".u_c").html("cm");$("#qu_m").html("10m (33ft)")}else{HealsWallpaperCalculator="i";$(".u_m").html("ft");$(".u_c").html("in");$("#qu_m").html("33ft (10m)")}}function WallpaperCalculator(){$("#unit").bind("change",function(){HealsSetUnit()});$("#reset").bind("click",function(){HealsReset()});$("#estimate").bind("click",function(){HealsEstimate()})}var HealsWallpaperCalculator="m"