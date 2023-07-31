// JavaScript Document






$(document).ready(function(){
    // Cuando arranca el sript y esta todo listo... arranca el baile
    
    
    //                      __---__
    //                   _-       _--______
    //              __--( /     \ )XXXXXXXXXXXXX_
    //            --XXX(   O   O  )XXXXXXXXXXXXXXX-
    //           /XXX(       U     )        XXXXXXX\
    //         /XXXXX(              )--_  XXXXXXXXXXX\
    //        /XXXXX/ (      O     )   XXXXXX   \XXXXX\
    //        XXXXX/   /            XXXXXX   \__ \XXXXX----
    //        XXXXXX__/          XXXXXX         \__----  -
    //---___  XXX__/          XXXXXX      \__         ---
    //  --  --__/   ___/\  XXXXXX            /  ___---=
    //    -_    ___/    XXXXXX              '--- XXXXXX
    //      --\/XXX\ XXXXXX                      /XXXXX
    //        \XXXXXXXXX                        /XXXXX/
    //         \XXXXXX                        _/XXXXX/
    //           \XXXXX--__/              __-- XXXX/
    //            --XXXXXXX---------------  XXXXX--
    //               \XXXXXXXXXXXXXXXXXXXXXXXX-
    //                 --XXXXXXXXXXXXXXXXXX-
    //           * * * * * who ya gonna call? * * * * *
    //                 * * * ghostbusters!! * * *
    
    
    
    
    
    
    //	Barra lateral   ===================================================================================
    // Accesos frecuentes
    
    // boton barra lateral
    $(this).find('#accesosfrecuentes').click( 0, function() {
        $( "#accesosfrecuentes_info" ).toggle( 0, function() {});
        $( "#accesosfrecuentes h2" ).toggle( 0, function() {});
    });
    
    // paneles
    $(this).find('#_bld_accfrec_panel_1').click(function() {
        $( "#_bld_accfrec_panel_1 .panel-body" ).toggle( 0, function() {});
    });
    $(this).find('#_bld_accfrec_panel_2').click(function() {
        $( "#_bld_accfrec_panel_2 .panel-body" ).toggle( 0, function() {});
    });
    $(this).find('#_bld_accfrec_panel_3').click(function() {
        $( "#_bld_accfrec_panel_3 .panel-body" ).toggle( 0, function() {});
    });
    $(this).find('#_bld_accfrec_panel_4').click(function() {
        $( "#_bld_accfrec_panel_4 .panel-body" ).toggle( 0, function() {});
    });
    
    
    
    // Comunidad SISA
    //$(this).find('#comunidadsisa').click(function() {
    //    $( "#comunidadsisa_info" ).toggle( 0, function() {});
    //    $( "#comunidadsisa h2" ).toggle( 0, function() {});
    //});
    


    //  autoridades

    $(this).find('#autoridades').click(function() {
        $( "#autoridades_info" ).toggle( 0, function() {});
        $( "#autoridades h2" ).toggle( 0, function() {});
    });


    //  capacitacion

    $(this).find('#capacitacion').click(function() {
        $( "#capacitacion_info" ).toggle( 0, function() {});
        $( "#capacitacion h2" ).toggle( 0, function() {});
    });
    


    //	Informacion colapsable   ===================================================================================
    
    //	Base
    if(document.querySelector('.info_colapsable')!=null){
        
        $(this).find(".info_colapsable").click(function(){
            $(this).find("p").toggle();
            $(this).find("ul").toggle();
            $(this).find("#icono").toggleClass("util_rot_90");
            $(this).toggleClass("util_rec_br util_efecto_sombra util_padding_10");
        });
    
        $(this).find('.info_colapsable p').hide();
        $(this).find('.info_colapsable ul').hide();
    }    
    
    //	Icono
    if(document.querySelector('.info_colapsable_icono')!=null){
        console.log(" => info_colapsable_icono ");
    
        $(this).find(".info_colapsable_icono > .cabecera").click(function(){
            var item = this;
            var itemPadre = this.parentElement;
            console.log(" => recibo " + item);
            //$(e.target).find(".iconos > span").toggle();
            //$(e.target).find(".info").toggle();
            $(item).find(".iconos > span").toggle();
            $(itemPadre).find(".info").toggle();
            //$(item.parentElement.parentElement).find(".info").toggle();
        });
    
        //$(this).find('.info_colapsable p').hide();
        //$(this).find('.info_colapsable ul').hide();
    }
    
    //	Alpha
    if(document.querySelector('.info_colapsableAlpha')!=null){
        var info_colapsableAlpha1 = "C";
        var colapsableAlpha;
    
        $(this).find(".info_colapsableAlpha").click(function(){
            
            var item = this;
            colapsableAlpha = this;
    
            if(info_colapsableAlpha1 == "E"){
                info_colapsableAlpha_colapsa(item);
            } else if(info_colapsableAlpha1 == "C"){
                info_colapsableAlpha_expande(item);
            } else {
                alert(info_colapsableAlpha1);
            }
        });
    
    
        function info_colapsableAlpha_colapsa(param){
            info_colapsableAlpha1 = "C";
            //alert("colapsa " + param);
            $(param).find(".detalle").hide();
            $(param).find(".info").css("margin-left", "14px");
            $(param).find("h2").css("font-size", "14px");
            $(param).find("h2").css("margin-bottom", "0px");
            $(param).find("span").css("font-size", "16px");
        }
        function info_colapsableAlpha_expande(param){
            info_colapsableAlpha1 = "E";
            //alert("expande " + param);
            $(param).find(".detalle").show();
            $(param).find(".info").css("margin-left", "20px");
            $(param).find("h2").css("font-size", "18px");
            $(param).find("h2").css("margin-bottom", "10px");
            $(param).find("span").css("font-size", "32px");
        }
    
        $(this).find(".info_colapsableAlpha .info").css("margin-left", "14px");
        $(this).find(".info_colapsableAlpha .detalle").hide();
        $(this).find(".info_colapsableAlpha h2").css("font-size", "14px");
        $(this).find(".info_colapsableAlpha h2").css("margin-bottom", "0px");
        $(this).find(".info_colapsableAlpha span").css("font-size", "16px");
    }
    
    //	Beta
    if(document.querySelector('.info_colapsableBeta')!=null){
        var info_colapsableBeta1 = "C";
    
        $(this).find(".info_colapsableBeta").click(function(){
            console.log(info_colapsableBeta1 + " =< ");
                    
            var item = this;
            if(info_colapsableBeta1 == "E"){
                info_colapsableBeta_colapsa(item);
            } else if(info_colapsableBeta1 == "C"){
                info_colapsableBeta_expande(item);
            } else {
                alert(info_colapsableBeta1);
            }
        });
    
    
        function info_colapsableBeta_colapsa(param){
                //alert("* * * * * who ya gonna call? * * * * * colapsa");
            
            console.log(info_colapsableBeta1 + " => recibo " + param);
            info_colapsableBeta1 = "C";
            $(param).find(".detalle").hide();
            $(param).find("h2").css("font-size", "14px");
            $(param).find("h2").css("margin-bottom", "0px");
            $(param).find("h2").css("margin-top", "4px");
            $(param).find(".icono_accion").addClass('util_rot_90');
            $(param).find(".icono_accion").removeClass('util_rot_90n');
            $(param).find(".icono_accion").css("margin-top", "8px");
        }
        function info_colapsableBeta_expande(param){
                //alert("* * * * * who ya gonna call? * * * * * expande");
            console.log(info_colapsableBeta1 + " => recibo " + param);
            info_colapsableBeta1 = "E";
            $(param).find(".detalle").show();
            $(param).find("h2").css("font-size", "18px");
            $(param).find("h2").css("margin-bottom", "10px");
            $(param).find("h2").css("margin-top", "0px");
            $(param).find(".icono_accion").addClass('util_rot_90n');
            $(param).find(".icono_accion").removeClass('util_rot_90');
            $(param).find(".icono_accion").css("margin-top", "0px");
        }
        info_colapsableBeta_colapsa($(this).find(".info_colapsableBeta"));
    }
    
    
    //	Beta V2
    if(document.querySelector('.info_colapsableBeta_v2')!=null){
        var muestraInfo = false;
    
        $(this).find(".info_colapsableBeta_v2").click(function(){
            console.log(muestraInfo + " =< ");
                    
            var item = this;
            if(muestraInfo == true){
                info_colapsableBeta_v2_colapsa(item);
            } else if(muestraInfo == false){
                info_colapsableBeta_v2_expande(item);
            } else {
                alert(muestraInfo);
            }
        });
    
    
        function info_colapsableBeta_v2_colapsa(param){
                //alert("* * * * * who ya gonna call? * * * * * colapsa");
            
            console.log(muestraInfo + " => recibo " + param);
            muestraInfo = false;
            $(param).find(".detalle").hide();
            $(param).find(".icono_accion span").toggle();
        }
        function info_colapsableBeta_v2_expande(param){
                //alert("* * * * * who ya gonna call? * * * * * expande");
            console.log(muestraInfo + " => recibo " + param);
            muestraInfo = true;
            $(param).find(".detalle").show();
            $(param).find(".icono_accion span").toggle();
        }
        $(this).find(".info_colapsableBeta_v2 .icono_accion span:first-child").toggle();
        info_colapsableBeta_v2_colapsa($(this).find(".info_colapsableBeta_v2"));
    }
    
    //	Gamma
    if(document.querySelector('.info_colapsableGamma')!=null){
        var info_colapsableGamma = false;
    
        $(this).find(".info_colapsableGamma").click(function(){
            console.log(info_colapsableGamma + " =< ");
                    
            var item = this;
            if(info_colapsableGamma == true){
                info_colapsableGamma_colapsa(item);
            } else if(info_colapsableGamma == false){
                info_colapsableGamma_expande(item);
            } else {
                alert(info_colapsableGamma);
            }
        });
    
    
        function info_colapsableGamma_colapsa(param){
            //alert("* * * * * who ya gonna call? * * * * * colapsa");
            
            //console.log(info_colapsableGamma + " => recibo " + param);
            info_colapsableGamma = false;
    
            $(param).find(".detalle").hide();
            $(param).find("#expandir").show();
            $(param).find("#colapsar").hide();
        }
        function info_colapsableGamma_expande(param){
            
            //console.log(info_colapsableGamma + " => recibo " + param);
            info_colapsableGamma = true;
    
            $(param).find(".detalle").show();
            $(param).find("#expandir").hide();
            $(param).find("#colapsar").show();
        }
        
        info_colapsableGamma_colapsa($(this).find(".info_colapsableGamma"));
    }
    
    
    
    
    
    
    
    
    
    //	SISA_panel_2h    = = = = = = = = = = = = = = = = = = = = = = = =

    if(document.querySelector('.SISA_panel_2h')!=null){
        var SISA_panel_2h = false;
    
        $(this).find(".SISA_panel_2h .botones").click(function(){
            console.log(SISA_panel_2h + " =< ");
            var itemb = this.parentElement.parentElement;
            console.log(itemb);
            var item = this.parentElement.parentElement;
    
            if(SISA_panel_2h == true){
                SISA_panel_2h_colapsa(item);
            } else if(SISA_panel_2h == false){
                SISA_panel_2h_expande(item);
            } else {
                alert(SISA_panel_2h);
            }
        });
        
        function SISA_panel_2h_colapsa(param){
            SISA_panel_2h = false;
            $(param).find(".info").hide();
            $(param).find("#expandir").show();
            $(param).find("#colapsar").hide();
            $(param).find(".cabeza").css("border-radius", "4px");
        }
        function SISA_panel_2h_expande(param){
            SISA_panel_2h = true;    
            $(param).find(".info").show();
            $(param).find("#expandir").hide();
            $(param).find("#colapsar").show();
            $(param).find(".cabeza").css("border-radius", "4px 4px 0px 0px");           
        }
            
        SISA_panel_2h_colapsa($(this).find(".SISA_panel_2h"));
    }
    
    
    //	SISA_panel_2h_v2  .  .  .  .  .  .  .  .  .  .  .  .  .  .  

    if(document.querySelector('.SISA_panel_2h_v2')!=null){
       var SISA_panel_2h_v2 = false;
    
        $(this).find(".SISA_panel_2h_v2 > .solapa").click(function(){
            console.log(SISA_panel_2h_v2 + " =< ");
            var item = this.parentElement;
            //console.log(item);
            if(SISA_panel_2h_v2 == true){
                SISA_panel_2h_v2_colapsa(item);
            } else if(SISA_panel_2h_v2 == false){
                SISA_panel_2h_v2_expande(item);
            } else {
                alert(SISA_panel_2h_v2);
            }
        });
        
        function SISA_panel_2h_v2_colapsa(param){
            SISA_panel_2h_v2 = false;
            $(param).find(".info").hide();
            $(param).find(".solapa").css("border-radius", "4px");
        }
        function SISA_panel_2h_v2_expande(param){
            SISA_panel_2h_v2 = true;
            $(param).find(".info").show();
            $(param).find(".info").css("display", "flex");
            $(param).find(".solapa").css("border-radius", "4px 4px 0px 0px");
        }
        
        SISA_panel_2h_v2_colapsa($(this).find(".SISA_panel_2h_v2"));
    }
    
    

    //	info_desplegable  = = = = = = = = = = = = = = = = = = = = = = = =

    if (document.querySelector('.info_desplegable') != null) {
    
        $(this).find(".info_desplegable .info_desplegable_boton").click(function () {
            $(this).parent().find(".info").toggle();
        });
    
        $(this).find('.info_desplegable .info').hide();
    
    }
    
    
    
    //	Recuadro Herramientas   ===================================================================================
    
    if (document.querySelector('.recuadroHerramientas') != null) {
        
            var recuadroHerramientas = document.querySelector('.recuadroHerramientas');
            var herramientas = document.querySelector('.recuadroHerramientas .base');
            var opcionDeMenuseleccionada = false;
        
            $(recuadroHerramientas).mouseover(function()	{	
                $(this).find(".base").css("padding", "10px");
                $(this).find(".base > div span").css("font-size", "32px");
                $(this).find(".base:hover > div:not(.inicial)").css("display", "flex");
                $(this).find(".base:hover > .inicial").css("display", "none");
            });
            $(recuadroHerramientas).mouseout(function()	{	
                $(this).find(".base").css("padding", "4px");
                $(this).find(".base > div span").css("font-size", "16px");
                $(this).find(".base:hover > div:not(.inicial)").css("display", "none");
                $(this).find(".base:hover > .inicial").css("display", "flex");
            //	if(opcionDeMenuseleccionada === false){	MiniMenuCierra();}
            });
        
            $('#bot_auditoria').mouseover(function()	{	botonMouseOver(this);	});
            $('#bot_auditoria').mouseout(function()	{		botonMouseOut(this);	});
            $('#bot_ayuda').mouseover(function()	{		botonMouseOver(this);	});
            $('#bot_ayuda').mouseout(function()	{			botonMouseOut(this);	});
            $('#bot_constancias').mouseover(function()	{	botonMouseOver(this);	});
            $('#bot_constancias').mouseout(function()	{	botonMouseOut(this);	});
            $('#bot_unicorn').mouseover(function()	{	botonMouseOver(this);	});
            $('#bot_unicorn').mouseout(function()	{	botonMouseOut(this);	});
        
            $(recuadroHerramientas).find('#bot_ayuda').click(function()	{	
                MiniMenuCierraOpciones();
                MiniMenuAbre();	
                $('#menu_ayuda').show();
            });
            $(recuadroHerramientas).find('#bot_auditoria').click(function()	{		
                MiniMenuCierraOpciones();
                MiniMenuAbre();	
                $('#menu_auditoria').show();
            });
            $(recuadroHerramientas).find('#bot_constancias').click(function()	{		
                MiniMenuCierraOpciones();
                MiniMenuAbre();	
                $('#menu_constancias').show();
            });
            $(recuadroHerramientas).find('#bot_unicorn').click(function()	{	
                MiniMenuCierra();
            });
        
            //$(recuadroHerramientas).find('#SISA_popUpInterno').mouseout(function()	{	
            //	MiniMenuCierra();
            //});
            
            function botonMouseOver(param){	
                $(param).css("cursor", "pointer");
                $(param).css("background-color", "white");
                $(param).find("span").css("color", "#3366ff");
            }
            function botonMouseOut(param){	
                $(param).css("cursor", "default");
                $(param).css("background-color", "#3366ff");
                $(param).find("span").css("color", "white");
                if(opcionDeMenuseleccionada === false){	MiniMenuCierra();	}
            }
            
            function MiniMenuAbre(){				$('.miniMenu').show(); opcionDeMenuseleccionada = true;	}
            function MiniMenuCierra(){				$('.miniMenu').hide(); opcionDeMenuseleccionada = false;	}
            function MiniMenuCierraOpciones(){		$(recuadroHerramientas).find( '.miniMenu > div' ).hide();	}
            
            $('.miniMenu').hide();
            $('#menu_ayuda').hide();
            $('#menu_auditoria').hide();
            $('#menu_constancias').hide();
        }
        
 
    
    
    //	Formularios   ===================================================================================
    

    //	Radio buttons  . . . . . . . . . . . . . . . . . . . . . . . . 

    if (document.querySelector('.form_rb_fila') != null) {    
        $(this).find(".form_rb_fila span").click(function () {
            $(this).addClass("util_col_pos");
        });
    }else if (document.querySelector('.form_rb') != null) {        
        $(this).find(".form_rb span").click(function () {
            $(this).addClass("util_col_pos");
        });
    }
    
    
    

    //	Formulario_v2 (boton doble)  . . . . . . . . . . . . . . . . . . . . . . . . 

    if (document.querySelector('.bot_doble') != null) {    
        $(this).find(".bot_doble").click(function () {
            $(this).find("span").toggle();
        });
        $(this).find(".bot_doble span:first-child").hide ();
    }
        
            
    
    
    
    
    
    //	Tooltip   ===================================================================================
     
     $('[data-toggle="tooltip"]').tooltip();   
    
    
    
    //	Seteos iniciales generales   ===================================================================================
    
    
    //	esto oculata los paneles cuando carga la pagina.
    
    //	Accesos frecuentes
        $( "#accesosfrecuentes_info").hide();
        $( "#accesosfrecuentes h2").hide();
    
        $( "#_bld_accfrec_panel_1 .panel-body").hide();
        $( "#_bld_accfrec_panel_2 .panel-body").hide();
        $( "#_bld_accfrec_panel_3 .panel-body").hide();
        $( "#_bld_accfrec_panel_4 .panel-body").hide();
    
    //	capacitacion SISA
    $( "#capacitacion_info").hide();
    $( "#capacitacion h2").hide();

    //	autoridades SISA
        $( "#autoridades_info").hide();
        $( "#autoridades h2").hide();

    //	Comunidad SISA
    //    $( "#comunidadsisa_info").hide();
    //    $( "#comunidadsisa h2").hide();
        
        
    
    
    
    
    
    
    
    });
    