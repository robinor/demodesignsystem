/**
 * @file Jquery library for ULPGC DESIGN SYSTEM
 * @author Ateigh Diseño Web S.L.
 *
 */

(function ($) {

  'use strict';

  /**
 * van11y-accessible-simple-tooltip-aria - ES2015 accessible tooltip system, using ARIA
 * @version v3.0.0
 * @link https://van11y.net/accessible-simple-tooltip/
 * @license MIT : https://github.com/nico3333fr/van11y-accessible-simple-tooltip-aria/blob/master/LICENSE
 */
    //var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},loadConfig=function(){var t={},e=function(e,i){t[e]=i},i=function(e){return t[e]},n=function(e){return t[e]};return{set:e,get:i,remove:n}},DATA_HASH_ID="data-hashtooltip-id",pluginConfig=loadConfig(),findById=function(t){var e=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return""!==e?document.querySelector("#"+t+"["+DATA_HASH_ID+'="'+e+'"]'):document.getElementById(t)},addClass=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},searchParentHashId=function(t,e){for(var i=!1,n=t;1===n.nodeType&&n&&i===!1;)n.hasAttribute(e)===!0?i=!0:n=n.parentNode;return i===!0?n.getAttribute(e):""},wrapItem=function(t,e,i,n){var o=[e,i].filter(Boolean).join("-"),a=document.createElement("SPAN");return addClass(a,o),a.setAttribute(DATA_HASH_ID,n),t.parentNode.insertBefore(a,t),a.appendChild(t),a},createTooltip=function(t){var e=[t.className,t.tooltipSimpleRaw].filter(Boolean).join("-"),i=t.text;if(!i&&t.id){var n=findById(t.id);n&&(i=n.innerHTML)}return'<span class="'+e+" "+t.jsClass+'" id="'+t.tooltipId+'" '+t.roleTooltip+" "+t.hiddenAttribute+" "+t.hashIdAttribute+">"+i+"</span>"},plugin=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=_extends({TOOLTIP_SIMPLE:"ulpgcds-tooltip",TOOLTIP_SIMPLE_CONTAINER:"ulpgcds-tooltip__container",TOOLTIP_SIMPLE_RAW:"ulpgcds-tooltip-raw",TOOLTIP_SIMPLE_LABEL_ID:"label_simpletooltip_",TOOLTIP_DATA_TEXT:"data-simpletooltip-text",TOOLTIP_DATA_PREFIX_CLASS:"data-simpletooltip-prefix-class",TOOLTIP_DATA_CONTENT_ID:"data-simpletooltip-content-id",ATTR_DESCRIBEDBY:"aria-describedby",ATTR_HIDDEN:"aria-hidden",ATTR_ROLE:"role",ROLE:"tooltip"},t),i=Math.random().toString(32).slice(2,12);pluginConfig.set(i,e);var n=function(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(t.querySelectorAll("."+e.TOOLTIP_SIMPLE))},o=function(t){n(t).forEach(function(t){t.setAttribute(DATA_HASH_ID,i);var n=Math.random().toString(32).slice(2,12),o=t.hasAttribute(e.TOOLTIP_DATA_TEXT)===!0?t.getAttribute(e.TOOLTIP_DATA_TEXT):"",a=t.hasAttribute(e.TOOLTIP_DATA_PREFIX_CLASS)===!0?t.getAttribute(e.TOOLTIP_DATA_PREFIX_CLASS):"",r=t.hasAttribute(e.TOOLTIP_DATA_CONTENT_ID)===!0?t.getAttribute(e.TOOLTIP_DATA_CONTENT_ID):"";t.setAttribute(e.ATTR_DESCRIBEDBY,e.TOOLTIP_SIMPLE_LABEL_ID+n),wrapItem(t,a,e.TOOLTIP_SIMPLE_CONTAINER,i).insertAdjacentHTML("beforeEnd",createTooltip({text:o,className:a,jsClass:e.TOOLTIP_SIMPLE,id:r,tooltipId:e.TOOLTIP_SIMPLE_LABEL_ID+n,tooltipSimpleRaw:e.TOOLTIP_SIMPLE_RAW,hiddenAttribute:e.ATTR_HIDDEN+'="true"',roleTooltip:e.ATTR_ROLE+'="'+e.ROLE+'"',hashIdAttribute:DATA_HASH_ID+'="'+i+'"'}))})};return{attach:o}},main=function(){return["mouseenter","focus","mouseleave","blur","keydown"].forEach(function(t){document.body.addEventListener(t,function(e){var i=searchParentHashId(e.target,DATA_HASH_ID);if(""!==i){var n=pluginConfig.get(i);if(hasClass(e.target,n.TOOLTIP_SIMPLE)===!0){var o=e.target;if("mouseenter"===t||"focus"===t){var a=findById(o.getAttribute(n.ATTR_DESCRIBEDBY),i);a&&a.setAttribute(n.ATTR_HIDDEN,"false")}if("mouseleave"===t||"blur"===t||"keydown"===t&&27===e.keyCode){var a=findById(o.getAttribute(n.ATTR_DESCRIBEDBY),i);a&&a.setAttribute(n.ATTR_HIDDEN,"true")}}}},!0)}),plugin};window.van11yAccessibleSimpleTooltipAria=main();var onLoad=function t(){var e=window.van11yAccessibleSimpleTooltipAria();e.attach(),document.removeEventListener("DOMContentLoaded",t)};document.addEventListener("DOMContentLoaded",onLoad);

    
    function accesibleAccordion(){
        var i=0;
        var expanded=false;
        var ariahidden=false;
        $('.ulpgcds-accordion > h3').each(function(){          
          var contentTitle = $(this).html();
          expanded = ((i===0) ? true : false);              
          $(this).html('<button id="accordion-button-' + i + '" ' + ' aria-controls="accordion-panel-' + i +'" aria-expanded="'+ expanded +'">'+
                  '<span class="ulpgcds-accordion__title"><span class="ulpgcds-accordion__icon"></span>'+contentTitle +'</span></button>');          
          i++;
        });
        i=0;
        $('.ulpgcds-accordion > div').each(function(){
            var contentPanel = $(this).html();
            ariahidden = ((i===0) ? false : true); 
            $(this).html('<div class="ulpgcds-accordion__panel"><div aria-hidden="'+ariahidden+'" aria-labelledby="accordion-button-'+i+'" '+
                    'class="ulpgcds-accordion__content" id="accordion-panel-' + i +'" role="region">'+contentPanel+'</div>');
            i++;
        });
        $('.ulpgcds-accordion button').on('click',function(){  
            $('.ulpgcds-accordion button').removeClass("border-click"); 
            if ($(this).attr('aria-expanded') == 'true'){ 
                $(this).attr('aria-expanded','false');
                $('#'+$(this).attr('aria-controls')).attr('aria-hidden','true');
            }
            else{
                $(this).attr('aria-expanded','true');
                $('#'+$(this).attr('aria-controls')).attr('aria-hidden','false');
            }
            $(this).focus();            
        });        
        $('.ulpgcds-accordion button').on("mouseup",function() {
             $(this).parent().next().removeClass("border-click"); 
          })
          .on("mousedown", function() {
             $(this).parent().next().addClass("border-click");  
          });
        $('.ulpgcds-accordion button').hover(function(){            
                $(this).parent().next().addClass("border-hover");
                $('.ulpgcds-accordion button').removeClass("border-click"); 
            },function(){
                $(this).parent().next().removeClass("border-hover"); 
        });
        
    }
    
    function validateStyleForm(){
        $('.ulpgcds-form').each(function(){
            $("input[type='submit']",this).on("click", function(){
                $("input:required").each(function(){
                   $(this).addClass("ulpgcds-form__item__error"); 
                });
                $("textarea:required").each(function(){
                   $(this).addClass("ulpgcds-form__item__error"); 
                });
            });
        });
    }
    
    function countCharacterTextarea(){
        $('.ulpgcds-form__item--counter').each(function(){
            if ($('textarea',this).attr('maxlength')){
                $("<div class='counter'>"+$('textarea',this).attr('maxlength')+"</div>").insertBefore($("textarea", this));  
                $(".counter",this).css({ "left" : $('textarea',this).width() - 6});
                var maxlength = $('textarea',this).attr('maxlength');                
                $("textarea",this).on("input", function(){
                    console.log($(this).val().length);
                    if ($(this).val().length){
                        var len = $(this).val().length;
                        if (len >= maxlength+1) {
                            $(this).html("0");
                        } else {                            
                            if (maxlength - len < 10){                                
                                 $(this).parent().find(".counter").addClass("color-red");                                           
                            }
                            else{
                                $(this).parent().find(".counter").removeClass("color-red");
                            }
                            $(this).parent().find(".counter").html(maxlength - len);                            
                            
                        }
                    }
                });
            }
        });      
    }

    function breadcrumbCondensed(){        
        if ($(".ulpgcds-breadcrumb").length){           
           $(".ulpgcds-breadcrumb ul").each(function(){
                var breadcrumb = $(this);
                var breadcrumbLen = $("li", this).length;
                var lastChild = $("li:last-child",this).html();  
                var lastChild2 = $("li:nth-last-child(2)",this).html();  
                if (breadcrumbLen > 4){
                    var subbreadcrumb = $("<ul>");
                    $("li", breadcrumb).each(function(i,l){
                        if (i > 0 && i < breadcrumbLen-1){ 
                            $(this).appendTo(subbreadcrumb);                         
                        }
                    });
                    
                    $("li:nth-child(2)",$(this)).html("<span class='ulpgcds-icon-dots'><span>").addClass('ulpgcds-breadcrumb__submenu');
                    $(subbreadcrumb).appendTo($("li:nth-child(2)",$(this)));                    
                    $(breadcrumb).append("<li>"+lastChild2+"</li>");
                    $(breadcrumb).append("<li>"+lastChild+"</li>");
                }
           });
           
        }
     
        
        
    }

    function getVimeoThumb(id) {
        return $.ajax({
            type:'GET',
            url: 'https://vimeo.com/api/v2/video/' + id + '.json',
            jsonp: 'callback',
            dataType: 'jsonp',
            success: function(data){
                var thumbnail_src = data[0].thumbnail_large; 
                return thumbnail_src;
            }
        });
    }
    
    /**
    * 
    *
    */
    $(document).ready(function(){   
    var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},loadConfig=function(){var t={},e=function(e,i){t[e]=i},i=function(e){return t[e]},n=function(e){return t[e]};return{set:e,get:i,remove:n}},DATA_HASH_ID="data-hashtooltip-id",pluginConfig=loadConfig(),findById=function(t){var e=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return""!==e?document.querySelector("#"+t+"["+DATA_HASH_ID+'="'+e+'"]'):document.getElementById(t)},addClass=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},searchParentHashId=function(t,e){for(var i=!1,n=t;1===n.nodeType&&n&&i===!1;)n.hasAttribute(e)===!0?i=!0:n=n.parentNode;return i===!0?n.getAttribute(e):""},wrapItem=function(t,e,i,n){var o=[e,i].filter(Boolean).join("-"),a=document.createElement("SPAN");return addClass(a,o),a.setAttribute(DATA_HASH_ID,n),t.parentNode.insertBefore(a,t),a.appendChild(t),a},createTooltip=function(t){var e=[t.className,t.tooltipSimpleRaw].filter(Boolean).join("-"),i=t.text;if(!i&&t.id){var n=findById(t.id);n&&(i=n.innerHTML)}return'<span class="'+e+" "+t.jsClass+'" id="'+t.tooltipId+'" '+t.roleTooltip+" "+t.hiddenAttribute+" "+t.hashIdAttribute+">"+i+"</span>"},plugin=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=_extends({TOOLTIP_SIMPLE:"ulpgcds-tooltip",TOOLTIP_SIMPLE_CONTAINER:"ulpgcds-tooltip__container",TOOLTIP_SIMPLE_RAW:"ulpgcds-tooltip-raw",TOOLTIP_SIMPLE_LABEL_ID:"label_simpletooltip_",TOOLTIP_DATA_TEXT:"data-simpletooltip-text",TOOLTIP_DATA_PREFIX_CLASS:"data-simpletooltip-prefix-class",TOOLTIP_DATA_CONTENT_ID:"data-simpletooltip-content-id",ATTR_DESCRIBEDBY:"aria-describedby",ATTR_HIDDEN:"aria-hidden",ATTR_ROLE:"role",ROLE:"tooltip"},t),i=Math.random().toString(32).slice(2,12);pluginConfig.set(i,e);var n=function(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(t.querySelectorAll("."+e.TOOLTIP_SIMPLE))},o=function(t){n(t).forEach(function(t){t.setAttribute(DATA_HASH_ID,i);var n=Math.random().toString(32).slice(2,12),o=t.hasAttribute(e.TOOLTIP_DATA_TEXT)===!0?t.getAttribute(e.TOOLTIP_DATA_TEXT):"",a=t.hasAttribute(e.TOOLTIP_DATA_PREFIX_CLASS)===!0?t.getAttribute(e.TOOLTIP_DATA_PREFIX_CLASS):"",r=t.hasAttribute(e.TOOLTIP_DATA_CONTENT_ID)===!0?t.getAttribute(e.TOOLTIP_DATA_CONTENT_ID):"";t.setAttribute(e.ATTR_DESCRIBEDBY,e.TOOLTIP_SIMPLE_LABEL_ID+n),wrapItem(t,a,e.TOOLTIP_SIMPLE_CONTAINER,i).insertAdjacentHTML("beforeEnd",createTooltip({text:o,className:a,jsClass:e.TOOLTIP_SIMPLE,id:r,tooltipId:e.TOOLTIP_SIMPLE_LABEL_ID+n,tooltipSimpleRaw:e.TOOLTIP_SIMPLE_RAW,hiddenAttribute:e.ATTR_HIDDEN+'="true"',roleTooltip:e.ATTR_ROLE+'="'+e.ROLE+'"',hashIdAttribute:DATA_HASH_ID+'="'+i+'"'}))})};return{attach:o}},main=function(){return["mouseenter","focus","mouseleave","blur","keydown"].forEach(function(t){document.body.addEventListener(t,function(e){var i=searchParentHashId(e.target,DATA_HASH_ID);if(""!==i){var n=pluginConfig.get(i);if(hasClass(e.target,n.TOOLTIP_SIMPLE)===!0){var o=e.target;if("mouseenter"===t||"focus"===t){var a=findById(o.getAttribute(n.ATTR_DESCRIBEDBY),i);a&&a.setAttribute(n.ATTR_HIDDEN,"false")}if("mouseleave"===t||"blur"===t||"keydown"===t&&27===e.keyCode){var a=findById(o.getAttribute(n.ATTR_DESCRIBEDBY),i);a&&a.setAttribute(n.ATTR_HIDDEN,"true")}}}},!0)}),plugin};window.van11yAccessibleSimpleTooltipAria=main();var onLoad=function t(){var e=window.van11yAccessibleSimpleTooltipAria();e.attach(),document.removeEventListener("DOMContentLoaded",t)};document.addEventListener("DOMContentLoaded",onLoad);
        // Funciones para campos de texto
        $('.ulpgcds-form input').keyup(function(){
            if( $(this).val() !== ""){
                $(this).addClass("filled");
            }else{
                $(this).removeClass("filled");
            }
        });  
        $('.ulpgcds-form textarea').keyup(function(){
            if( $(this).val() !== ""){
                $(this).addClass("filled");
            }else{
                $(this).removeClass("filled");
            }
        });
        $('.ulpgcds-form select').on("change",function(){
            if( $(this).val() !== ""){
                $(this).addClass("filled");
            }else{
                $(this).removeClass("filled");
            }
        });
    
        // Funciones para tabs
        $('.ulpgcds-tabs li').click(function(){
            var tab_id = $(this).attr('href');

            $(this).parent().find("li").removeClass('active');
            $(this).parent().parent().find('.ulpgcds-tab-content').removeClass('active');
            $(this).addClass('active');
            if ($(tab_id))
                $(tab_id).addClass('active');
        });
        
        // Funciones para los acordeones
        if ($('.ulpgcds-accordion').length){
            accesibleAccordion();
        }  
        
        // Funciones para los artículo
        if ($('.ulpgcds-article--short').length){
            // TODO: optimizacion ratio image
            $('.ulpgcds-article--short').each(function(){
               $('img',this).wrap("<figure></figure>"); 
            }); 
        }  
        
        // Funciones mínimas en formularios
        if ($('.ulpgcds-form').length){
            validateStyleForm();            
            if ($('.ulpgcds-form__item--counter').length){                
                countCharacterTextarea();
            }
        }


        // Funciones inputs numericos
        $('.ulpgcds-form .ulpgcds-form__item input[type="number"]').each(function(){
            $("<span class='spin-number'><span class='icon icon-caret-up' onclick='this.parentNode.parentNode.querySelector(\"input[type=number]\").stepUp();'></span><span class='icon icon-caret-down' onclick='this.parentNode.parentNode.querySelector(\"input[type=number]\").stepDown()'></span></span>").insertAfter(this);
        });
        
        // Funciones para selects múltiples 
        if ($('.ulpgcds-form select[multiple="multiple"]').length){
            // Hace uso de la librería chosen
            $('select[multiple="multiple"]').each(function(){
                if (typeof $(this).chosen !== "undefined") {   
                    $(this).chosen();
                }
                else{
                    console.log("Chosen library not install");
                }
            });
            
        }
        
        // Funciones para fechas
        if ($( ".ulpgcds-datepicker" ).length){
            $( ".ulpgcds-datepicker" ).each(function(){
                //var fullmonth_array = $.datepicker.regional['es'].monthNames; 
                $( this ).datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat: 'dd-mm-yy',
                    monthNamesShort: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                  });
              });
        }
        
        // Funciones para tablas
        if ($( ".tablesaw" ).length){
            
        }
        
        
        // Funciones para vídeos                
        if ($('.ulpgcds-video').length ) {
            $('.ulpgcds-video').each(function(){
                if ($('iframe[src*="bustreaming.ulpgc.es"]',this).length){
                    var value = $('iframe',this).attr("src"); 
                    var id = value.split("/");                      
                    $('iframe',this).on("load", function(){                        
                        if ($("iframe",this).contents().find("#player1").length){
                            var poster = $("iframe",this).contents().find("#player1").attr("poster");
                            $(this).css({ "background" : "url("+poster+") center center no-repeat" });
                            $(this).css({ "background-size" : "cover"});
                        }
                    });   
                    $(this).on("click", function(event){                                                                                                         
                        $("iframe",this).show();
                        $(this).addclass("with-overlay");
                    });                    
                    $(this).append("<span class='ulpgcds-video__play'><span>");
                }                
                if ($('iframe[src*="youtube.com"]', this).length && $('iframe[src*="youtube.com"]',this)){                    
                    var value = $("iframe", this).attr("src").replace("watch?v=", "embed/"); 
                    var id = value.split("/");
                    $(this).css({ "background" : "url(https://i.ytimg.com/vi/"+id[id.length-1]+"/maxresdefault.jpg) center center no-repeat" });
                    $(this).css({ "background-size" : "cover"});
                    $(this).on("click", function(event){                                                         
                        var video = '<iframe class="ulpgcds-video__iframe" src="' + value + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>';
                        $(this).html(video);  
                        $("iframe",this).show();
                        $(this).addclass("with-overlay");
                    });
                    $(this).append("<span class='ulpgcds-video__play'><span>");                    
                }
                if ($('iframe[src*="vimeo.com"]', this).length && $('iframe[src*="vimeo.com"]',this)){  
                    var value = $("iframe", this).attr("src"); 
                    
                    var id = value.split("/");
                    var thumbnail_src = "";
                    var videoVimeo = $(this);
                    var thumbnail_data =
                        $.ajax({
                            type:'GET',
                            url: 'https://vimeo.com/api/v2/video/' + id[id.length-1] + '.json',
                            jsonp: 'callback',
                            dataType: 'jsonp',
                            success: function(data){
                                thumbnail_src = data[0].thumbnail_large;    
                                $(videoVimeo).css({ "background" : "url("+thumbnail_src+") center center no-repeat" });
                                $(videoVimeo).css({ "background-size" : "cover"});
                            }
                        });
                    console.log(thumbnail_data);    
                    //$(this).css({ "background" : "url("+thumbnail_src+") center center no-repeat" });
                    //$(this).css({ "background-size" : "cover"});
                    $(this).on("click", function(event){                                                         
                        var video = '<iframe class="ulpgcds-video__iframe" src="' + value + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>';
                        $(this).html(video);  
                        $("iframe",this).show();
                        $(this).addclass("with-overlay");
                    });
                    $(this).append("<span class='ulpgcds-video__play'><span>");     
                    
                }                
            });
            
                        
          }
          //Funciones para breadcrumb     
          if ($('.ulpgcds-breadcrumb').length ) {
            breadcrumbCondensed();
            }          
    });    

})(jQuery);

//var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},loadConfig=function(){var t={},e=function(e,i){t[e]=i},i=function(e){return t[e]},n=function(e){return t[e]};return{set:e,get:i,remove:n}},DATA_HASH_ID="data-hashtooltip-id",pluginConfig=loadConfig(),findById=function(t){var e=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return""!==e?document.querySelector("#"+t+"["+DATA_HASH_ID+'="'+e+'"]'):document.getElementById(t)},addClass=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},hasClass=function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},searchParentHashId=function(t,e){for(var i=!1,n=t;1===n.nodeType&&n&&i===!1;)n.hasAttribute(e)===!0?i=!0:n=n.parentNode;return i===!0?n.getAttribute(e):""},wrapItem=function(t,e,i,n){var o=[e,i].filter(Boolean).join("-"),a=document.createElement("SPAN");return addClass(a,o),a.setAttribute(DATA_HASH_ID,n),t.parentNode.insertBefore(a,t),a.appendChild(t),a},createTooltip=function(t){var e=[t.className,t.tooltipSimpleRaw].filter(Boolean).join("-"),i=t.text;if(!i&&t.id){var n=findById(t.id);n&&(i=n.innerHTML)}return'<span class="'+e+" "+t.jsClass+'" id="'+t.tooltipId+'" '+t.roleTooltip+" "+t.hiddenAttribute+" "+t.hashIdAttribute+">"+i+"</span>"},plugin=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=_extends({TOOLTIP_SIMPLE:"ulpgcds-tooltip",TOOLTIP_SIMPLE_CONTAINER:"ulpgcds-tooltip__container",TOOLTIP_SIMPLE_RAW:"ulpgcds-tooltip-raw",TOOLTIP_SIMPLE_LABEL_ID:"label_simpletooltip_",TOOLTIP_DATA_TEXT:"data-simpletooltip-text",TOOLTIP_DATA_PREFIX_CLASS:"data-simpletooltip-prefix-class",TOOLTIP_DATA_CONTENT_ID:"data-simpletooltip-content-id",ATTR_DESCRIBEDBY:"aria-describedby",ATTR_HIDDEN:"aria-hidden",ATTR_ROLE:"role",ROLE:"tooltip"},t),i=Math.random().toString(32).slice(2,12);pluginConfig.set(i,e);var n=function(){var t=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(t.querySelectorAll("."+e.TOOLTIP_SIMPLE))},o=function(t){n(t).forEach(function(t){t.setAttribute(DATA_HASH_ID,i);var n=Math.random().toString(32).slice(2,12),o=t.hasAttribute(e.TOOLTIP_DATA_TEXT)===!0?t.getAttribute(e.TOOLTIP_DATA_TEXT):"",a=t.hasAttribute(e.TOOLTIP_DATA_PREFIX_CLASS)===!0?t.getAttribute(e.TOOLTIP_DATA_PREFIX_CLASS):"",r=t.hasAttribute(e.TOOLTIP_DATA_CONTENT_ID)===!0?t.getAttribute(e.TOOLTIP_DATA_CONTENT_ID):"";t.setAttribute(e.ATTR_DESCRIBEDBY,e.TOOLTIP_SIMPLE_LABEL_ID+n),wrapItem(t,a,e.TOOLTIP_SIMPLE_CONTAINER,i).insertAdjacentHTML("beforeEnd",createTooltip({text:o,className:a,jsClass:e.TOOLTIP_SIMPLE,id:r,tooltipId:e.TOOLTIP_SIMPLE_LABEL_ID+n,tooltipSimpleRaw:e.TOOLTIP_SIMPLE_RAW,hiddenAttribute:e.ATTR_HIDDEN+'="true"',roleTooltip:e.ATTR_ROLE+'="'+e.ROLE+'"',hashIdAttribute:DATA_HASH_ID+'="'+i+'"'}))})};return{attach:o}},main=function(){return["mouseenter","focus","mouseleave","blur","keydown"].forEach(function(t){document.body.addEventListener(t,function(e){var i=searchParentHashId(e.target,DATA_HASH_ID);if(""!==i){var n=pluginConfig.get(i);if(hasClass(e.target,n.TOOLTIP_SIMPLE)===!0){var o=e.target;if("mouseenter"===t||"focus"===t){var a=findById(o.getAttribute(n.ATTR_DESCRIBEDBY),i);a&&a.setAttribute(n.ATTR_HIDDEN,"false")}if("mouseleave"===t||"blur"===t||"keydown"===t&&27===e.keyCode){var a=findById(o.getAttribute(n.ATTR_DESCRIBEDBY),i);a&&a.setAttribute(n.ATTR_HIDDEN,"true")}}}},!0)}),plugin};window.van11yAccessibleSimpleTooltipAria=main();var onLoad=function t(){var e=window.van11yAccessibleSimpleTooltipAria();e.attach(),document.removeEventListener("DOMContentLoaded",t)};document.addEventListener("DOMContentLoaded",onLoad);
