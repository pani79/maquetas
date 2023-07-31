// JavaScript Document






$(document).ready(function(){
// Cuando arranca el sript y esta todo listo... arranca el baile




// .....................................:,:::,:....................................
// ..................................:,........,:~.................................
// ................................,..?????????:..,:...............................
// ..............................,..??????????????,.,:.............................
// ............................:..??????????????????,.,:...........................
// ..........................:,.~?????????????????????..,~.........................
// ........................:,..I?????????????????????+,...,........................
// .......................,..I?:.~????????????????=.~????+.,.......................
// .....................,,.???????..????????????..=????????.:......................
// ....................:,.??+..:??????????????????????....??.,=....................
// ...................:,.~?:......??????I:??:~?????+.......??.,....................
// ..................:::.+?.........+??=.?..??..,..........??.,,~..................
// .................,:::.??............?+....=?~...........??.,:,~.................
// ................::::,.??...........??..+?..=?=..........??..::,.................
// ................::::..??.......,?????.:??=.I??????????,.??=.,:::................
// ...............,:::..??,I???????????????????????????????,??..:::~...............
// ...............::::.????????????.???????????????.,??????????.::::...............
// ..............,:::..??????????.=?????????????????=.?????????~.:::,..............
// ..............:,::.I????????..?????+.?=.?,.+???????..????????.,::,..............
// .............::::,.????????.????..??.??.?++?..??????..???????.,:::,.............
// ............,::::..I?????,.I??+.?,??~??.????=?..????...+????~.,:::::............
// ............:::::...????...??,?.?~~.........:?=?~??.....????...::::,............
// ...........~::::,...???.......?~..............:?.........??....,::::............
// ...........,::::,....+...............................~?=.......,::::,...........
// ..........~:::::........??........~???+I?+?..........????......,:::::...........
// ..........::::::......=???......????+?,,???.?=......,????.......::::::..........
// ..........::::::.....~????....+?I?.:+??????.=.??....?????.......::::::..........
// .........:::::::.....:????.....?,?????????????,.....?????.......:::::,..........
// .........::::::.......????...:??????????????????...=????I.......::::::,.........
// ........:::::::.......??????????????????????????????????~.......::::::,.........
// ........,::::::.......??????????????????????????????????........:::::::.........
// ........::::::,.......??????????????????????????????????........:::::::........:
// ........::::::,......~?????????????.........+???????????........::::::::.......:
// .......:::::::.......:??????????,..............??????????.......:::::::~.....:::
// .......,::::::........,???????:..................I??????........:::::::,...~..::
// .......:::::::..........????.......................:+=..........:::::::,..:.~,,:
// ......,:::::::..................................................:::::::,...:,:::
// ......,:::::::.................................................:::::::::,.:,:,,.
// ......::::::::,................................................:::::::::.,:,,:..
// ......:::::::::...............................................::::::::::,:,:,...
// .....,::::::::::.............................................,::::::::::,:::....
// .....,::::::::::,............................................::::::::::::,:.....
// ....,:::::::::::::.........................................,:::::::::::::,,....=
// ...~:::::::::::::::.......................................,::::::::::::::,....=?
// ...:?,::::::::::::::,....................................::::::::::::::::::..=??
// ...:::::::::::::::::::.................................,:::::::::::::::::::,~???
// .:,::::::::::::::::::::,..............................,:::::::::::::::::::::,,??
// ::...~::,:::::::::::::::,...........................,:::::::::::::::::,:..:??=:?
// ..........~:::::::::::::::,......................,::::::::::::::::,::,....+?????
// ..............,,::::::::::::,..................,::::::::::::::::,:::,,...=??????
// .................:::::::::::::,..............::::::::::::::::,~:::::,...,???????
// ....................:::::::::::::,........,:,:::::::::::::,=~.~:,:::,...=???????
// .......................~,:::::::::::::,,,,,,::::::::::::.....~,:::::....???????~
// ............................~,:::::::::::::::::::,,:........~,::,:,,...,??????+.
// ..................................=,:,,,:::,:..............:,,:::,:,...~?????I:.
// ...........................................................=:,:::,:,...=??????..




//	SISA_panelPasos   ===================================================================================

if(document.querySelector('#SISA_panelPasos')!=null){
	//alert("* * * * * who ya gonna call? ==> panelPasos");

	
	var pagina;
	if(document.querySelector('#reportes_configuracion_numericos')!=null){
		pagina = "reportes_configuracion_numericos";
	}


	var panelPasos_seccion = "default";
	var pasos = [0, 0, 0, 0, 0];
	var pasosRequeridos = [0, 0, 0, 1, 0];

	for (var index = 0; index < 12; index++) {
		$(this).find('#paso_'+ index).click(function()	{	pp_activaPaso(this);	});
		$(this).find('#paso_'+ index).mouseover(function()	{
			if(this.id.substring(5, 7) != panelPasos_seccion){
				pp_rollOver(this);
			}
		});
		$(this).find('#paso_'+ index).mouseout(function()	{		
			if(this.id.substring(5, 7) != panelPasos_seccion){
				pp_rollOut(this);
			}
		});
		console.log(index);
	}

	
	function pp_rollOver(param){
		console.log("Rov => trae " + param);
		var item = param.id.substring(5, 7);		
		console.log("proceso => " + item);	
		console.log(panelPasos_seccion+"<=>"+item);
		if(item != panelPasos_seccion){
			$('#paso_'+ item + ' .color').addClass("util_col_f_a1_cc3 util_cursor_puntero");
			//$('#paso_'+ item + ' .color').removeClass("util_cursor_puntero");
		}
	}
	function pp_rollOut(param){
		console.log("Rou => trae " + param);
		var item = param.id.substring(5, 7);		
		console.log("proceso => " + item);
		
		if(item != panelPasos_seccion){
			$('#paso_'+ item + ' .color').removeClass("util_col_f_a1_cc3 util_cursor_puntero");
			//$('#paso_'+ item + ' .color').addClass("util_cursor_puntero");
		}
	}

	function pp_desactivaPasos(param){
		for (var index = 0; index < 20; index++) {
			//var element = array[index];
			
			console.log("desactivo => " + "#seccionPaso_"+ index );
			$( "#seccionPaso_"+ index ).hide();
			if(index > param){
				$('#paso_'+ param).addClass("util_cursor_puntero");
				$('#paso_'+ param + ' div').removeClass("util_col_pos");
			}
		}
	}

	function pp_activaPaso(param){
		console.log("=> pp_activaPaso ="+param);
		var manda = param.id.substring(5, 6);
		console.log("=> mando " + manda);
		pp_desactivaPasos(manda);
		panelPasos_seccion = ( manda);
		$('#paso_'+ manda + '.color').addClass("util_col_pos");
		$('#paso_'+ manda).removeClass("util_cursor_puntero");
		$("#seccionPaso_" + manda ).show();
	}

	
	function revisaPasosOk(manda){
		//alert("==> revisaPasosOk=>"+manda);
		var objeto = '#paso_'+ manda + '.colorFondo';
		//alert(objeto);

		
		$('#paso_'+ manda + ' .color').addClass("util_col_pos");
		$('#paso_'+ manda + ' .colorFondo').addClass("util_col_pos");
		$('#paso_'+ manda + ' .nexo_i').addClass("util_col_pos");
		$('#paso_'+ (manda-1) + ' .nexo_d').addClass("util_col_pos");


		var resultado = 0;
		var validacion = true;
		for (i=0; i<pasos.length; i++){
			if(pasos[i] == 1) resultado++;
			console.log(validacion + "  ("+ i  + ") <= " + pasosRequeridos);
			if(pasosRequeridos[i] == 0) validacion = false;
		}
		//alert(pasos.length+"<===>"+resultado+"<===>"+validacion);
		
		
		if(validacion == true){
			$('.SISA_panelPasos .info .icono').addClass("util_col_naranja");
			$('.SISA_panelPasos .info .icono span').removeClass("icon-bot_ico_cancelar");
			$('.SISA_panelPasos .info .icono span').addClass("icon-bot_ico_atencion");
			$('.SISA_panelPasos .info .texto h3').text("Pre-inscripción a Concurso de Residencias habilitada");
			$('.SISA_panelPasos .info .texto p').text("Todavia faltan algunos datos para poder hacer la busqueda guachin.");
		}
		if(pasos.length == resultado){
			$('.SISA_panelPasos .info .icono').removeClass("util_col_naranja");
			$('.SISA_panelPasos .info .icono').addClass("util_col_pos");
			$('.SISA_panelPasos .info .icono span').removeClass("icon-bot_ico_cancelar");
			$('.SISA_panelPasos .info .icono span').removeClass("icon-bot_ico_atencion");
			$('.SISA_panelPasos .info .icono span').addClass("icon-bot_ico_aceptar");
			$('.SISA_panelPasos .info .texto h3').text("Pre-inscripción a Concurso de Residencias completada");
			$('.SISA_panelPasos .info .texto p').text("Gracias guachin!!!");
		}
	}

	$('#paso_1_ok').click(function()	{	pasos[0] = 1; pasosRequeridos[0] = 1; revisaPasosOk(1);	});
	$('#paso_2_ok').click(function()	{	pasos[1] = 1; pasosRequeridos[1] = 1; revisaPasosOk(2);	});
	$('#paso_3_ok').click(function()	{	pasos[2] = 1; pasosRequeridos[2] = 1; revisaPasosOk(3);	});
	$('#paso_4_ok').click(function()	{	pasos[3] = 1; revisaPasosOk(4);	});
	$('#paso_5_ok').click(function()	{	pasos[4] = 1;  pasosRequeridos[4] = 1; revisaPasosOk(5);	});
	

	
	
	
	//	Seteos iniciales
	pp_desactivaPasos();
	if(pagina == "reportes_configuracion_numericos"){
		//alert("si");
		pp_activaPaso(document.querySelector('#paso_1'));
	}

}


if(document.querySelector('.SISA_panelPasos_v2')!=null){
	//alert("* * * * * who ya gonna call? ==> panelPasos");

	
	var _menu = $('.SISA_panelPasos_v2 .menu');
	var _configuracion  = $('.SISA_panelPasos_v2 .configuracion');	
	var _pasos = [false, false, false];
	var _pasoConfiguracion = 1;
	
	
	
	function confReporte_configuraMenu(){
		console.log("!=> " + _menu );
		for (var index = 1; index <= _pasos.length; index++) {
			//_menu.addClass("util_col_f_a1_1");
			_menu.find('#paso_'+ index).mouseover(function()	{					
			console.log("-=> " + (this.id.substring(5, 7) != _pasoConfiguracion));		
				if(this.id.substring(5, 7) != _pasoConfiguracion){
					confReporte_rollOver(this);
				}
			});
			_menu.find('#paso_'+ index).mouseout(function()	{					
				console.log("-=> " + (this.id.substring(5, 7) != _pasoConfiguracion));					
				if(this.id.substring(5, 7) != _pasoConfiguracion){
					confReporte_rollOut(this);
				}
			});
			_menu.find('#paso_'+ index).click(function()	{					
				console.log("-=> " + (this.id.substring(5, 7) != _pasoConfiguracion));					
				if(this.id.substring(5, 7) != _pasoConfiguracion){
					confReporte_activaPaso(this.id.substring(5, 7));
					valida(this.id.substring(5, 7));
				}
			});
		}
	}
	
	function confReporte_desactivaPasos(){
		for (var index = 0; index < _pasos.length; index++) {			
			console.log("desactivo => " + "#seccionPaso_"+ index );
			$( "#seccionPaso_"+ (index + 1) ).hide();
			$(_menu).find(".color").removeClass("mod_sisa util_cursor_puntero util_cursor_default");
			$(_menu).find(".color > *").removeClass("util_textcolor_blanco");
			/*
				if(index > param){
					$('#paso_'+ param).addClass("util_cursor_puntero");
					$('#paso_'+ param + ' div').removeClass("util_col_pos");
				}
			*/
		}
	}
	
	function confReporte_resetea(){
		confReporte_desactivaPasos();
		$( "#bot_resetear" ).show();
		$( "#bot_enviar" ).hide();
		$(_menu).find(".aceptar").hide();
		$(_menu).find(".advertencia").show();
		$(_menu).find("#seleccion").hide();
		$(_menu).find("#columnas").hide();
		$(_menu).find("#orden").hide();
	}

	function valida(param){			
		console.log("=> validando" );
		_pasos[param-1] = true;
		$("#paso_"+param).find(".colorFondo").css("background-color", "#006633");
		$("#paso_"+param).find(".nexo_d").css("background-color", "#006633");
		
		console.log("v => " + ("#paso_"+(Number(param) + 1)));
		$("#paso_"+(Number(param)  + 1)).find(".nexo_i").css("background-color", "#006633");
		var resultado = 0;
		for (index = 0; index < _pasos.length; index++){
			if(_pasos[index] == true){	resultado++;}
		}
		if(resultado == _pasos.length){	
			$(_menu).find(".advertencia").hide();
			$(_menu).find(".aceptar").show();
			$(_menu).find(".estado h3").text("Configuración completa");
			$(_menu).find("#bot_enviar").show();
		}
		if(_pasos[0]  == true){			$(_menu).find("#seleccion").show();		}
		if(_pasos[1]  == true){			$(_menu).find("#columnas").show();		}
		if(_pasos[2]  == true){			$(_menu).find("#orden").show();			}
		console.log(" => " + _pasos);
		console.log(_pasos.length + " <=> " + resultado);
		
	}
	
	function confReporte_activaPaso(param){
		confReporte_desactivaPasos();
		_pasoConfiguracion = param;
		$( "#seccionPaso_"+ (param) ).show();	
		$("#paso_"+param).find(".color").addClass("mod_sisa util_cursor_default");
		$("#paso_"+param).find(".color > *").addClass("util_textcolor_blanco");
	}
	
	function confReporte_rollOver(param){
		console.log("confReporte_rollOver => " + param );
		$(param).find(".color").addClass("mod_sisa util_cursor_puntero");
		$(param).find(".color > *").addClass("util_textcolor_blanco");
	}
	
	function confReporte_rollOut(param){
		console.log("confReporte_rollOver => " + param );
		$(param).find(".color").removeClass("mod_sisa util_cursor_puntero");
		$(param).find(".color > *").removeClass("util_textcolor_blanco");
	}

	/*
		for (var index = 0; index < 12; index++) {
			$(this).find('#paso_'+ index).click(function()	{	pp_activaPaso(this);	});
			$(this).find('#paso_'+ index).mouseover(function()	{
				if(this.id.substring(5, 7) != panelPasos_seccion){
					pp_rollOver(this);
				}
			});
			$(this).find('#paso_'+ index).mouseout(function()	{		
				if(this.id.substring(5, 7) != panelPasos_seccion){
					pp_rollOut(this);
				}
			});
			console.log(index);
		}

		
		function pp_rollOver(param){
			console.log("Rov => trae " + param);
			var item = param.id.substring(5, 7);		
			console.log("proceso => " + item);	
			console.log(panelPasos_seccion+"<=>"+item);
			if(item != panelPasos_seccion){
				$('#paso_'+ item + ' .color').addClass("util_col_f_a1_cc3 util_cursor_puntero");
			}
		}
		function pp_rollOut(param){
			console.log("Rou => trae " + param);
			var item = param.id.substring(5, 7);		
			console.log("proceso => " + item);
			
			if(item != panelPasos_seccion){
				$('#paso_'+ item + ' .color').removeClass("util_col_f_a1_cc3 util_cursor_puntero");
			}
		}

		function pp_desactivaPasos(param){
			for (var index = 0; index < 20; index++) {
				
				console.log("desactivo => " + "#seccionPaso_"+ index );
				$( "#seccionPaso_"+ index ).hide();
				if(index > param){
					$('#paso_'+ param).addClass("util_cursor_puntero");
					$('#paso_'+ param + ' div').removeClass("util_col_pos");
				}
			}
		}

		function pp_activaPaso(param){
			console.log("=> pp_activaPaso ="+param);
			var manda = param.id.substring(5, 6);
			console.log("=> mando " + manda);
			pp_desactivaPasos(manda);
			panelPasos_seccion = ( manda);
			$('#paso_'+ manda + '.color').addClass("util_col_pos");
			$('#paso_'+ manda).removeClass("util_cursor_puntero");
			$("#seccionPaso_" + manda ).show();
		}

		
		function revisaPasosOk(manda){
			var objeto = '#paso_'+ manda + '.colorFondo';

			
			$('#paso_'+ manda + ' .color').addClass("util_col_pos");
			$('#paso_'+ manda + ' .colorFondo').addClass("util_col_pos");
			$('#paso_'+ manda + ' .nexo_i').addClass("util_col_pos");
			$('#paso_'+ (manda-1) + ' .nexo_d').addClass("util_col_pos");


			var resultado = 0;
			var validacion = true;
			for (i=0; i<pasos.length; i++){
				if(pasos[i] == 1) resultado++;
				console.log(validacion + "  ("+ i  + ") <= " + pasosRequeridos);
				if(pasosRequeridos[i] == 0) validacion = false;
			}
			
			
			if(validacion == true){
				$('.SISA_panelPasos .info .icono').addClass("util_col_naranja");
				$('.SISA_panelPasos .info .icono span').removeClass("icon-bot_ico_cancelar");
				$('.SISA_panelPasos .info .icono span').addClass("icon-bot_ico_atencion");
				$('.SISA_panelPasos .info .texto h3').text("Pre-inscripción a Concurso de Residencias habilitada");
				$('.SISA_panelPasos .info .texto p').text("Todavia faltan algunos datos para poder hacer la busqueda guachin.");
			}
			if(pasos.length == resultado){
				$('.SISA_panelPasos .info .icono').removeClass("util_col_naranja");
				$('.SISA_panelPasos .info .icono').addClass("util_col_pos");
				$('.SISA_panelPasos .info .icono span').removeClass("icon-bot_ico_cancelar");
				$('.SISA_panelPasos .info .icono span').removeClass("icon-bot_ico_atencion");
				$('.SISA_panelPasos .info .icono span').addClass("icon-bot_ico_aceptar");
				$('.SISA_panelPasos .info .texto h3').text("Pre-inscripción a Concurso de Residencias completada");
				$('.SISA_panelPasos .info .texto p').text("Gracias guachin!!!");
			}
		}

		$('#paso_1_ok').click(function()	{	pasos[0] = 1; pasosRequeridos[0] = 1; revisaPasosOk(1);	});
		$('#paso_2_ok').click(function()	{	pasos[1] = 1; pasosRequeridos[1] = 1; revisaPasosOk(2);	});
		$('#paso_3_ok').click(function()	{	pasos[2] = 1; pasosRequeridos[2] = 1; revisaPasosOk(3);	});
		$('#paso_4_ok').click(function()	{	pasos[3] = 1; revisaPasosOk(4);	});
		$('#paso_5_ok').click(function()	{	pasos[4] = 1;  pasosRequeridos[4] = 1; revisaPasosOk(5);	});
	*/
	
	//	Seteos iniciales
	confReporte_configuraMenu();
	confReporte_activaPaso(_pasoConfiguracion);
	$(_menu).find("#bot_enviar").hide();
	$(_menu).find(".aceptar").hide();
	$(_menu).find("#seleccion").hide();
	$(_menu).find("#columnas").hide();
	$(_menu).find("#orden").hide();
	/*
	pp_desactivaPasos();
	if(pagina == "reportes_configuracion_numericos"){
		pp_activaPaso(document.querySelector('#paso_1'));
	}
	*/
}



});
