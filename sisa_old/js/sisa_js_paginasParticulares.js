// JavaScript Document






$(document).ready(function(){
// Cuando arranca el sript y esta todo listo... arranca el baile
// alert("who ya gonna call?");



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



	//	Acerca de Sisa   ===================================================================================

	if(document.querySelector('.AcercaDeSisa')!=null){

		$(this).find('.registrosEnSisa .registrosEnSisaBotonera .SISA_panel_simple').click( 0, function() {
			$( ".registrosEnSisa .registrosEnSisaInfo" ).show();
			$( ".registrosEnSisa .registrosEnSisaBotonera" ).hide();
		});

		$(this).find('.registrosEnSisa .registrosEnSisaInfo .volver').click( 0, function() {
			//alert("who ya gonna call?");
			$( ".registrosEnSisa .registrosEnSisaInfo" ).hide();
			$( ".registrosEnSisa .registrosEnSisaBotonera" ).show();
		});

		//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
		$( ".registrosEnSisa .registrosEnSisaInfo" ).hide();

	};
	

		//	CCC   ===================================================================================
		//	PanelCCC

		
		if(document.querySelector('#PanelCCC')!=null){
			$('.clickeable').click(function()	{	window.open('pagina_panelControlLucho_salida.html', '_self'); 	});
		};
	
		//	Nomivac   ===================================================================================
	
		if(document.querySelector('.Nomivac_agrupado')!=null){
	
			//alert("Nomivac_agrupado");
			
			$(this).find('#SISAbl_bot_op1').click(function()	{
				//alert("who ya gonna call?");
				$( ".notificacion" ).show();
				$( ".monitoreo" ).hide();
			});
			$(this).find('#SISAbl_bot_op2').click(function()	{
				//alert("ghostbusters!!");
				$( ".notificacion" ).hide();
				$( ".monitoreo" ).show();
			});

			function notificacionEscondeOpResidentes(){
				$('#residenteA').hide();
				$('#residenteB').hide();
				$('#residenteC').hide();
			}
			$(this).find('.residentes #radio01').click(function()	{
				notificacionEscondeOpResidentes();
				$( "#residenteA" ).show();
			});
			$(this).find('.residentes #radio02').click(function()	{
				notificacionEscondeOpResidentes();
				$( "#residenteB" ).show();
			});
			$(this).find('.residentes #radio03').click(function()	{
				notificacionEscondeOpResidentes();
				$( "#residenteC" ).show();
			});
			
	
			//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
			$( ".notificacion" ).hide();
			$( ".monitoreo" ).hide();
			notificacionEscondeOpResidentes();
	
			//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
		
		};
		

	/*
	===================================================================================

	SNVS

	*/		
		
	
		if(document.querySelector('.SNVS_grilla')!=null){
	
			//alert("SNVS_grilla");
			
			$(this).find('#SISAbl_bot_op1').click(function()	{
				//alert("who ya gonna call?");
				$( ".notificacion" ).show();
				$( ".monitoreo" ).hide();
			});
			$(this).find('#SISAbl_bot_op2').click(function()	{
				//alert("ghostbusters!!");
				$( ".notificacion" ).hide();
				$( ".monitoreo" ).show();
			});
	
			
	
			//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
			$( ".notificacion" ).hide();
			$( ".monitoreo" ).hide();
	
		};


		//	 SNVS - Combinar eventos  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


		if(document.querySelector('#SNVS_convinarEventos')!=null){
			
			//alert("soy SNVS_convinarEventos");
			$('.menu li').click(
					function(){
						let elid = $(this).attr('id').substring(4, 5);
						//alert("+ " + elid);
						OcultaYMuestraSecciones(elid);
					}
			);

			function OcultaYMuestraSecciones(id) {
				$('.eventoAlternativo .seccion').each(function () { 
					var item = this;
					$(item).hide();
				});	
				$('.menu li').each(function () { 
					var boton = this;
					$(boton).removeClass("util_col_f_a1_cc5 util_cursor_default");
					$(boton).addClass("util_col_f_a1_4 util_cursor_puntero");
				});	

				//alert('.eventoAlternativo .secc_' + id);
				$('.eventoAlternativo .secc_' + id).show();
				$('#bot_' + id).removeClass("util_col_f_a1_4 util_cursor_puntero");
				$('#bot_' + id).addClass("util_col_f_a1_cc5 util_cursor_default");
			};

			OcultaYMuestraSecciones("1");
		}


		//	 SNVS - Combinar eventos (version nueva)   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


		if(document.querySelector('#SNVS_convinarEventos_verNue')!=null){
			
			//alert("soy SNVS_convinarEventos !");
			
			$('.combinar .evento').mouseover(function () { 
				//let elid = $(this).attr('id').substring(4, 5);
				var elemento = this;
				$(elemento).addClass('util_cursor_puntero');
				$(elemento).find('.cabeceraNueva').addClass('reg_snvs');
				$(elemento).find('.seccion .titulo').addClass('reg_snvs');
				//SenialaEventoOculta();
				//SenialaEvento(elemento);
				Oculta();
				Muestra(elemento);
			});	

			$('.combinar .evento').mouseout(function () { 
				//SenialaEventoOculta();
				var elemento = this;
				$(elemento).removeClass('util_cursor_puntero');
				$(elemento).find('.cabeceraNueva').removeClass('reg_snvs');
				$(elemento).find('.seccion .titulo').removeClass('reg_snvs');
				Oculta();
			});	
			
			function SenialaEvento(objeto) {
				//alert(objeto);
				$(objeto).find('.seleccion').addClass("util_display_block");
				$(objeto).find('.seleccion span').addClass("icon-bot_ico_aceptar");				
			};

			function SenialaEventoOculta() {
				$('.combinar .evento .seleccion').each(function () { 
					var item = this;
					$(item).removeClass("util_display_block");
					$(item).addClass("util_display_none");
				});
			};
			
			function Muestra(objeto) {				
				$(objeto).find('.seleccion').css({'color': 'white'});
				$(objeto).find('.seleccion span').removeClass("icon-bot_ico_cancelar");	
				$(objeto).find('.seleccion span').addClass("icon-bot_ico_aceptar");	
				/* 
					$('.combinar .evento .seleccionador').each(function () { 
						var item = this;
						$(objeto).css('display', 'block');
					});
				 */
			};
			
			function Oculta() {
				$('.combinar .evento .seleccion').each(function () { 
					var item = this;
					$(item).css({'color': 'gray'});
				});
			};
		}



		//	 Búsqueda VIH - SNVS  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

		if(document.querySelector('#busquedaSnvsVih')!=null){
			
			
			//	Botonera al hacer click
			$(this).find('.botonera_busquedarapida').click(function()	{	MuestraBusquedaRapida();	});
			$(this).find('.botonera_busquedaavanzada').click(function()	{	MuestraBusquedaAvanzada(); });
			
			$(this).find('.busqueda .boton').click(function()	{	MuestraResultado();	});
			$(this).find('.busqueda .svih .bot_al').click(function()	{	MuestraResultadoSvih();	});
			$(this).find('.busqueda .snvs .bot_al').click(function()	{	MuestraResultadoSnvs();	});
			
			//	Esta funcion solo deselecciona y oculta los elementos
			function padron_desselecciona(){	$("#busquedanormal").hide();	$("#busquedaavanzada").hide();	}
			
			
			function MuestraBusquedaAvanzada(){	$(".busquedaavanzada").show();$(".botonera_busquedarapida").show(); $(".busquedanormal").hide(); $(".botonera_busquedaavanzada").hide();	}
			function MuestraBusquedaRapida(){	$(".busquedanormal").show();$(".botonera_busquedaavanzada").show(); $(".busquedaavanzada").hide(); $(".botonera_busquedarapida").hide();	}
			function MuestraResultado(){	$('.busqueda .svih').show(); $('.busqueda .snvs').show();	}
			function MuestraResultadoSvih(){	$(".busquedaComparacion .reg_svih").show();	}
			function MuestraResultadoSnvs(){	$(".busquedaComparacion .reg_snvs").show();	}
			
			
			//	Seteos iniciales
			//	Para que aparezcan por default cerradas
			MuestraBusquedaRapida();

			
			$('.busqueda .svih').hide();
			$('.busqueda .snvs').hide();

			$(".busquedaComparacion .reg_svih").hide();
			$(".busquedaComparacion .reg_snvs").hide();	
		}

		
		//	 Búsqueda VIH - SNVS (v2) => APOCRIFO (css)

		if(document.querySelector('#busquedaSnvsVih_v2')!=null){
			
			
			//	Botonera al hacer click
			$(this).find('.botonera_busquedarapida').click(function()	{	MuestraBusquedaRapida();	});
			$(this).find('.botonera_busquedaavanzada').click(function()	{	MuestraBusquedaAvanzada(); });
			
			$(this).find('.busqueda .boton').click(function()	{	MuestraResultado()	});
			
			//	Esta funcion solo deselecciona y oculta los elementos
			function padron_desselecciona(){	$("#busquedanormal").hide();	$("#busquedaavanzada").hide();	}
			
			
			function MuestraBusquedaAvanzada(){	$(".busquedaavanzada").show();$(".botonera_busquedarapida").show(); $(".busquedanormal").hide(); $(".botonera_busquedaavanzada").hide();	}
			function MuestraBusquedaRapida(){	$(".busquedanormal").show();$(".botonera_busquedaavanzada").show(); $(".busquedaavanzada").hide(); $(".botonera_busquedarapida").hide();	}
			function MuestraResultado(){	$(".busquedaResultados").show();	}
			
			
			//	Seteos iniciales
			//	Para que aparezcan por default cerradas
			MuestraBusquedaRapida();	
		}

		//	 Búsqueda VIH - SNVS (v3) => APOCRIFO (css)

		if(document.querySelector('#busquedaSnvsVih_v3')!=null){
			
			
			//	Botonera al hacer click
			$(this).find('.botonera_busquedarapida').click(function()	{	MuestraBusquedaRapida();	});
			$(this).find('.botonera_busquedaavanzada').click(function()	{	MuestraBusquedaAvanzada(); });
			
			$(this).find('.buscar .boton').click(function()	{	$(".busquedaResultados").show();	});
			//$(this).find('.busqueda .boton').click(function()	{	MuestraResultado();	});
			$(this).find('.busquedaResultados .bot_al').click(function()	{	 $(".busquedaComparacion").show();	});
			
			//	Esta funcion solo deselecciona y oculta los elementos
			function padron_desselecciona(){	$("#busquedanormal").hide();	$("#busquedaavanzada").hide();	}
			
			
			function MuestraBusquedaAvanzada(){	$(".busquedaavanzada").show();$(".botonera_busquedarapida").show(); $(".busquedanormal").hide(); $(".botonera_busquedaavanzada").hide();	}
			function MuestraBusquedaRapida(){	$(".busquedanormal").show();$(".botonera_busquedaavanzada").show(); $(".busquedaavanzada").hide(); $(".botonera_busquedarapida").hide();	}
			function MuestraResultado(){	$(".busquedaResultados").show();	}
			function MuestraComparacion(){	alert('changos!'); $(".busquedaComparacion").show();	}
			
			
			//	Seteos iniciales
			//	Para que aparezcan por default cerradas
			MuestraBusquedaRapida();	
		}
	


		


	//	RECS   ===================================================================================

	if(document.querySelector('.recs')!=null){

		//alert("* * * * * who ya gonna call? * * * * *");
		
		$(this).find('#bot_prof').click(function()	{
			$( "#recs_muestrainfomedico" ).show();
		});
		$(this).find('#recs_bot_infobusqueda').click(function()	{
			$( "#recs_infobusqueda" ).show();
		});

		

		//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
		$( "#recs_muestrainfomedico" ).hide();
		$( "#recs_infobusqueda" ).hide();
	};



	
	//	Solapas Formulario  ===================================================================================

	if(document.querySelector('#SolapasFormulario')!=null){
		//alert("* * * * * who ya gonna call? * * * * * Solapas!!!");

		
		$('.pieDeFormulario .boton_neg').click( 0, function() {
			//alert("Catastrofe!!!!");
			validacionNegativa();
		});
		$(".FormularioEdicion .item > *").click( 0, function(e) {
			//alert("Catastrofe!!!!");
			if(e.target != ("div")){
				foco(e);
			}else{
				console.log("no deberias ver esto => " + e.target);
			}			
		});

		
		function validacionNegativa(){
			$('.FormularioEdicion .item').each(function (index, value) { 
				var item = this;
				console.log("no deberias ver esto => " + item);
				//$('.FormularioEdicion .item').addClass("error"); 
				if($(item).find("input").length > 0){
					$(item).addClass("error"); 
				}else if($(item).find("select").val("-seleccione-")){
					//console.log("=> " + $(item).find("select").val());
					$(item.parentElement).addClass("error"); 
				}
			});			
		}

		function foco(e){
			$(e.target.parentElement.parentElement).each(function (index, value) { 
				$('* > *').removeClass("foco"); 
			});			
			//console.log(e.target);
			//console.log(e.target.nodeName);
			if(e.target.nodeName == "INPUT"){
				$(e.target.parentElement).addClass("foco"); 
			}else if(e.target.nodeName == "SELECT"){
				$(e.target.parentElement).addClass("foco"); 
			}else if(e.target.nodeName == "OPTION"){
				$(e.target.parentElement.parentElement).addClass("foco"); 
			}
		}
		//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
		
	};


	//	Formulario - validacion ===================================================================================

	if(document.querySelector('#Formularios')!=null){
		//alert("* * * * * who ya gonna call? * * * * * Solapas!!!");
		
		$('.pieDeFormulario .boton_neg').click( 0, function() {
			//alert("Catastrofe!!!!");
			validacionNegativa();
		});
		$(".Formulario_v2 .item > *").click( 0, function(e) {
			//alert("Catastrofe!!!!");
			if(e.target != ("div")){
				foco(e);
			}else{
				console.log("no deberias ver esto => " + e.target);
			}			
		});

		
		function validacionNegativa(){
			alert("* * * * * who ya gonna call? * * * * * Valida!!!");
			$('.Formulario_v2 .item').each(function (index, value) { 
				var item = this;
				console.log("no deberias ver esto => " + item);
				//$('.Formulario_v2 .item').addClass("error"); 
				if($(item).find("input").length > 0){
					$(item).addClass("error"); 
				}else if($(item).find("select").val("-seleccione-")){
					$(item.parentElement).addClass("error"); 
				}
				
				/*
				if($(item).find("input").length > 0){
					$(item).addClass("error"); 
				}else if($(item).find("select").val("-seleccione-")){
					$(item.parentElement).addClass("error"); 
				}
				*/
			});			
		}

		function foco(e){
			$(e.target.parentElement.parentElement).each(function (index, value) { 
				$('* > *').removeClass("foco"); 
			});			
			//console.log(e.target);
			//console.log(e.target.nodeName);
			if(e.target.nodeName == "INPUT"){
				$(e.target.parentElement).addClass("foco"); 
			}else if(e.target.nodeName == "SELECT"){
				$(e.target.parentElement).addClass("foco"); 
			}else if(e.target.nodeName == "OPTION"){
				$(e.target.parentElement.parentElement).addClass("foco"); 
			}
		}
		//	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
		
	};


	//	 Usuarios  ===================================================================================

	if (document.querySelector('.usuarios') != null) {
		//alert(" NE " );

		var lugarDondeAgregamosLosPanelesRegistros = $('.usuarios .registros');
		var lugarDondeAgregamosLosPanelesModulos  = $('.usuarios .modulos');
		
		var registrosAbiertos = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		var registros = [
			["bndo", "BNDO", "Registro Nacional del Banco de Drogas Oncológicas", "icon-reg_bndo", "reg_bndo"],
			["ccc", "CCC", "Registro Nacional de Cardiopatías Congénitas", "icon-reg_ccc", "reg_ccc"],
			["deis", "DEIS", "Dirección de Estadísticas e Información de Salud", "icon-reg_deis", "reg_deis"],
			["epf", "EPF", "Registro de enfermedades poco frecuentes", "icon-reg_epf", "reg_epf"],
			["esavi", "ESAVI", "Evento Supuestamente Atribuible a la Vacunación e Inmunización", "icon-reg_esavi", "reg_nomivac"],
			["ieh", "IEH", "Registro de atención de primer nivel y su receta médica", "icon-reg_ieh", "reg_ieh"],
			["iepna", "IEPNA", "Registro de atención de primer nivel y su receta médica", "icon-reg_iepna", "reg_iepna"],
			["medicamentos", "Medicamentos", "Programa Medicamentos", "icon-reg_remediar", "reg_remediar"],
			["nomivac", "Nomivac", "Registro Federal de Vacunación Nominalizado", "icon-reg_nomivac", "reg_nomivac"],
			["ongs", "ONGs", "Organizaciones Civiles, o No gubernamentales", "icon-reg_ongs", "reg_ongs"],
			["paierc", "PAIERC", "Programa de Abordaje Integral de la Enfermedad Renal Crónica", "icon-reg_paierc", "reg_paierc"],
			["pfis", "PFIS", "Programa Federal Incluir Salud", "icon-reg_pfis", "reg_pfis"],
			["pnh", "PNH", "Programa Nacional de Detección Temprana y Atención de la Hipoacusia", "icon-reg_pnh", "reg_pnh"],
			["pnt", "PNT", "Paquete Perinatal de Alta Complejidad", "icon-reg_pnt", "reg_pnt"],
			["pronahep", "PRONAHEP", "Programa Nacional de Hepatitis", "icon-reg_pronahep", "reg_pronahep"],
			["prosane", "PROSANE", "Programa Nacional de Salud Escolar", "icon-reg_prosane", "reg_prosane"],
			["recs", "RECS", "Registro de Electrodependientes por cuestiones de salud", "icon-reg_recs", "reg_recs"],
			["redes", "REDES", "Programa REDES", "icon-reg_redes", "reg_redes"],
			["redos", "REDOS", "Registro Nacional de Donantes de Sangre", "icon-reg_redos", "reg_redos"],
			["refecv", "REFECV", "Registro Federal de Enfermedades Cardiovasculares", "icon-reg_refecv", "reg_refecv"],
			["refes", "REFES", "Registro Federal de Establecimientos de Salud", "icon-reg_refes", "reg_refes"],
			["refeps", "REFEPS", "Red Federal de Registros de Profesionales de la Salud", "icon-reg_refeps", "reg_refeps"],
			["rehab", "RFR", "Red Federal de Rehabilitación", "icon-reg_rehab", "reg_rehab"],
			["renac", "RENAC", "Registro Nacional de Anomalías Congénitas", "icon-reg_renac", "reg_renac"],
			["svih", "SVIH", "Dirección de SIDA y ETS", "icon-reg_svih", "reg_svih"],
			["", "", "", "icon-reg_", "reg_"],
			["", "", "", "icon-reg_", "reg_"],
			["", "", "", "icon-reg_", "reg_"],
			["", "", "", "icon-reg_", "reg_"],
			["", "", "", "icon-reg_", "reg_"],
			["", "", "", "icon-reg_", "reg_"]
		];
		var modulosAbiertos = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		var modulos = [
			["aud", "AUDITORIA", "Auditoría", "icon-mod_auditoria", "mod_sisa"],
			["cap", "CAPACITACIÓN", "Gestión de cursos e incripciones", "icon-mod_capacitacion", "mod_sisa"],
			["cod", "CODIFICACIONES", "Codificaciones auxiliares", "icon-bot_ico_basededatos_configurar", "mod_sisa"],
			["min", "MINISTERIOS", "Ministerio de salud", "icon-mod_ministerios", "mod_sisa"],
			["not", "NOTICIAS", "Noticias del SISA y sus registros", "icon-mod_noticias", "mod_sisa"],
			["pad", "PADRÓN", "Acceso al padrón de ciudadanos del SISA", "icon-mod_padron", "mod_ficha"],
			["ref", "REFERENTES", "Autoridades, referentes y soporte técnico", "icon-mod_autoridadesyreferentes", "mod_sisa"],
			["ufi", "UFIS", "Mesa de trabajo UFIS", "icon-reg_ufis", "mod_sisa"],
			["", "", "", "icon-reg_", "reg_"]
		];
		/*

		*/

		//var lax = '<div class="SISA_panel_2h"><div class="cabeza mod_sisa"><div class="icono"><span class="icon-mod_sisageneral"></span></div><div class="texto"><h3 class="util_textcolor_negativo">Capacidad de delegar permisos</h3><p class="util_textcolor_negativo">Los unicornios siempre estan.</p></div><div class="botones"><span id="expandir" class="icon-bot_ico_archivos_descargar"></span><span id="colapsar" class="icon-bot_ico_archivos_exportar"></span></div></div><div class="info"><div class="row"><div class="col-xs-12"><div class="checboxes"><div class="item"><label><input type="checkbox" id="cbox2" value="first_checkbox">Gestión y consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox3" value="first_checkbox">Consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox4" value="first_checkbox">Red de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox5" value="first_checkbox">Red de establecimientos (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox6" value="first_checkbox">Red de profesionales (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox7" value="first_checkbox">Red de profesionales (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox8" value="first_checkbox">Subredes de establecimientos (lectura)</label></div><div class="item"><label><input type="checkbox" id="cbox9" value="first_checkbox">Subredes de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox10" value="first_checkbox">Codificaciones auxiliares (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox11" value="first_checkbox">Codificaciones auxiliares (gestión)</label></div></div></div></div></div></div>';

		$(".SISA_panel_modulo_48").click(function(event)	{	MuestraRecuadroM(event.target);	});	  
		$(".SISA_panel_registro_48").click(function(event)	{	MuestraRecuadro(event.target);	});	  
		//$(".SISA_panel_registro_48").click(function(event)	{	MuestraRecuadro(event.target);	});
		//$("#popUpIntCerrar").click(function()	{	SistemasAdicionalesOculta();	});
		$(".registros > .registro .itemBotonera span").click(function(event)	{	SistemasAdicionalesMuestra(event);	});
		$(".modulos > .registro .itemBotonera span").click(function(event)	{	SistemasAdicionalesMuestra(event);	});

		
		function MuestraRecuadro(target){
			var el_id = target.index;
			$("#rec_" + target.id).toggle();
			console.log(target.id);
			console.log(registros[target.id][3]);
		}
		function MuestraRecuadroM(target){
			var el_id = target.index;
			$("#mod_" + target.id).toggle();
			console.log(target.id);
			console.log(modulos[target.id][3]);
		}
		
		function GeneraRecuadros(){
			//alert(" / GeneraRecuadros" );
			//$(lugarDondeAgregamosLosPaneles).append( lax );

			for (var index = 0; index < registros.length; index++) {
				var coloca = '<div class="SISA_panel_2h" id="rec_' + index + '"><div class="cabeza ' + registros[index][4] + '"><div class="icono"><span class=' + registros[index][3] + '></span></div><div class="texto"><h3 class="util_textcolor_negativo">' + registros[index][1] + '</h3><p class="util_textcolor_negativo">' + registros[index][2] + '</p></div><div class="botones"><span id="expandir" class="icon-bot_ico_int_menu_flecha util_rot_90"></span><span id="colapsar" class="icon-bot_ico_int_menu_flecha util_rot_90n"></span></div></div><div class="info" id="info"><div class="info_colapsableGamma util_col_f_a1_7"><div class="tituloMini"><h4>Capacidad de delegar permisos</h4><div class="item"><label><input type="checkbox" id="checkboxDelegar" value="first_checkbox"></label></div></div><div class="infoMini"><div class="detalle"><p>Este mecanismo permite asignarle permisos a la muchachada.</p><div class="row"><div class="col-xs-12"><div class="checboxes"><div class="item"><label><input type="checkbox" id="cbox2" value="first_checkbox">Gestión y consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox3" value="first_checkbox">Consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox4" value="first_checkbox">Red de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox5" value="first_checkbox">Red de establecimientos (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox11" value="first_checkbox">Codificaciones auxiliares (gestión)</label></div></div></div></div></div></div></div><div class="row"><div class="col-xs-12"><div class="checboxes"><div class="item"><label><input type="checkbox" id="cbox2" value="first_checkbox">Gestión y consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox3" value="first_checkbox">Consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox4" value="first_checkbox">Red de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox5" value="first_checkbox">Red de establecimientos (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox6" value="first_checkbox">Red de profesionales (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox7" value="first_checkbox">Red de profesionales (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox8" value="first_checkbox">Subredes de establecimientos (lectura)</label></div><div class="item"><label><input type="checkbox" id="cbox9" value="first_checkbox">Subredes de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox10" value="first_checkbox">Codificaciones auxiliares (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox11" value="first_checkbox">Codificaciones auxiliares (gestión)</label></div></div></div></div></div></div>';
				$(lugarDondeAgregamosLosPanelesRegistros).append( coloca);
				var item = "#rec_" + index;
				var itemb = "#rec_" + index + " .info_colapsableGamma";
				$("#rec_" + index).hide();
				
				//$("#rec_" + index).find(".info").hide();
				$("#rec_" + index).find(".cabeza > .botones > #expandir").hide();
				$("#rec_" + index).find(".cabeza > .botones > #colapsar").show();
				$("#rec_" + index).find(".cabeza").css("border-radius", "4px");
		
				$("#rec_" + index + " .info_colapsableGamma").find(".info").hide();
				$("#rec_" + index + " .info_colapsableGamma").find("#colapsar").hide();

				$(item).find(".botones").click(function(){
					var la_id = this.parentElement.parentElement.id.substring(4, 10);
					console.log(" 1 = " + registrosAbiertos[la_id]);
					if(registrosAbiertos[la_id] == false){
						console.log(" 1 = abrimo");
						registrosAbiertos[la_id] = true;
						$("#rec_" + la_id).find("#info").show();
						$("#rec_" + la_id).find(".cabeza > .botones > #expandir").hide();
						$("#rec_" + la_id).find(".cabeza > .botones > #colapsar").show();
						$("#rec_" + la_id).find(".cabeza").css("border-radius", "4px 4px 0px 0px");
						$("#rec_" + la_id + " .info_colapsableGamma").find(".info").hide();
						$("#rec_" + la_id + " .info_colapsableGamma").find("#expandir").show();
						$("#rec_" + la_id + " .info_colapsableGamma").find("#colapsar").hide();
					}else if(registrosAbiertos[la_id] == true){
						console.log(" 1 = cerramo");
						registrosAbiertos[la_id] = false;
						$("#rec_" + la_id).find("#info").hide();
						$("#rec_" + la_id).find(".cabeza > .botones > #expandir").show();
						$("#rec_" + la_id).find(".cabeza > .botones > #colapsar").hide();
						$("#rec_" + la_id).find(".cabeza").css("border-radius", "4px");
					}else{
						alert("Rompiste algo mostro!");
					}
				});

				$(itemb).find("#checkboxDelegar").click(function(){
					console.log(" -" + $(this.parentElement));
					$(this.parentElement.parentElement.parentElement.parentElement).find(".infoMini").toggle();
					
				});
				$(itemb).find(".infoMini").toggle();

			}	

			for (var index = 0; index < modulos.length; index++) {
				console.log("M -" + $(index));
				var coloca = '<div class="SISA_panel_2h" id="mod_' + index + '"><div class="cabeza ' + modulos[index][4] + '"><div class="icono"><span class=' + modulos[index][3] + '></span></div><div class="texto"><h3 class="util_textcolor_negativo">' + modulos[index][1] + '</h3><p class="util_textcolor_negativo">' + modulos[index][2] + '</p></div><div class="botones"><span id="expandir" class="icon-bot_ico_int_menu_flecha util_rot_90"></span><span id="colapsar" class="icon-bot_ico_int_menu_flecha util_rot_90n"></span></div></div><div class="info" id="info"><div class="info_colapsableGamma util_col_f_a1_7"><div class="tituloMini"><h4>Capacidad de delegar permisos</h4><div class="item"><label><input type="checkbox" id="checkboxDelegar" value="first_checkbox"></label></div></div><div class="infoMini"><div class="detalle"><p>Este mecanismo permite asignarle permisos a la muchachada.</p><div class="row"><div class="col-xs-12"><div class="checboxes"><div class="item"><label><input type="checkbox" id="cbox2" value="first_checkbox">Gestión y consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox3" value="first_checkbox">Consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox4" value="first_checkbox">Red de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox5" value="first_checkbox">Red de establecimientos (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox11" value="first_checkbox">Codificaciones auxiliares (gestión)</label></div></div></div></div></div></div></div><div class="row"><div class="col-xs-12"><div class="checboxes"><div class="item"><label><input type="checkbox" id="cbox2" value="first_checkbox">Gestión y consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox3" value="first_checkbox">Consulta del Registro Federal de Vacunación Nominalizado</label></div><div class="item"><label><input type="checkbox" id="cbox4" value="first_checkbox">Red de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox5" value="first_checkbox">Red de establecimientos (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox6" value="first_checkbox">Red de profesionales (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox7" value="first_checkbox">Red de profesionales (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox8" value="first_checkbox">Subredes de establecimientos (lectura)</label></div><div class="item"><label><input type="checkbox" id="cbox9" value="first_checkbox">Subredes de establecimientos (gestión)</label></div><div class="item"><label><input type="checkbox" id="cbox10" value="first_checkbox">Codificaciones auxiliares (consulta)</label></div><div class="item"><label><input type="checkbox" id="cbox11" value="first_checkbox">Codificaciones auxiliares (gestión)</label></div></div></div></div></div></div>';
				$(lugarDondeAgregamosLosPanelesModulos).append( coloca);
				var item = "#mod_" + index;
				var itemb = "#mod_" + index + " .info_colapsableGamma";
				$("#mod_" + index).hide();
				
				//$("#mod_" + index).find(".info").hide();
				$("#mod_" + index).find(".cabeza > .botones > #expandir").hide();
				$("#mod_" + index).find(".cabeza > .botones > #colapsar").show();
				$("#mod_" + index).find(".cabeza").css("border-radius", "4px");
		
				$("#mod_" + index + " .info_colapsableGamma").find(".info").hide();
				$("#mod_" + index + " .info_colapsableGamma").find("#colapsar").hide();

				$(item).find(".botones").click(function(){
					var la_id = this.parentElement.parentElement.id.substring(4, 10);
					console.log(" 1 = " + modulosAbiertos[la_id]);
					if(modulosAbiertos[la_id] == false){
						console.log(" 1 = abrimo");
						modulosAbiertos[la_id] = true;
						$("#mod_" + la_id).find("#info").show();
						$("#mod_" + la_id).find(".cabeza > .botones > #expandir").hide();
						$("#mod_" + la_id).find(".cabeza > .botones > #colapsar").show();
						$("#mod_" + la_id).find(".cabeza").css("border-radius", "4px 4px 0px 0px");
						$("#mod_" + la_id + " .info_colapsableGamma").find(".info").hide();
						$("#mod_" + la_id + " .info_colapsableGamma").find("#expandir").show();
						$("#mod_" + la_id + " .info_colapsableGamma").find("#colapsar").hide();
					}else if(modulosAbiertos[la_id] == true){
						console.log(" 1 = cerramo");
						modulosAbiertos[la_id] = false;
						$("#mod_" + la_id).find("#info").hide();
						$("#mod_" + la_id).find(".cabeza > .botones > #expandir").show();
						$("#mod_" + la_id).find(".cabeza > .botones > #colapsar").hide();
						$("#mod_" + la_id).find(".cabeza").css("border-radius", "4px");
					}else{
						alert("Rompiste algo mostro!");
					}
				});

				$(itemb).find("#checkboxDelegar").click(function(){
					console.log(" -" + $(this.parentElement));
					$(this.parentElement.parentElement.parentElement.parentElement).find(".infoMini").toggle();
					
				});
				$(itemb).find(".infoMini").toggle();

			}	
		}
		GeneraRecuadros();
	}
	



});