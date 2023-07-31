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




//	SISA_BotoneraPaneles   ===================================================================================

if(document.querySelector('#SISA_BotoneraPaneles')!=null){
	//alert("* * * * * who ya gonna call? * * * * *");

//	Implementado en:
//	reg_recs_intro.html			Pagina de solicitud
//	pagina_homes.html			Home general de los registros
//	pagina_homes_rfr.html		Home del registro RFR
//	pagina_homes-renis.html		Home del registro RENIS



	var SISAbp_seccion = "default";

	for (var index = 0; index < 12; index++) {
		$(this).find('#SISAbp_bot_op'+ index).click(function()	{	 SISApl_muestra(this.id);	});
		$(this).find('#SISAbp_bot_op'+ index).mouseover(function()	{
			if(this.id.substring(13, 15) != SISAbp_seccion){
				SISAbp_rollOver(this);
			}
		});
		$(this).find('#SISAbp_bot_op'+ index).mouseout(function()	{		
			if(this.id.substring(13, 15) != SISAbp_seccion){
				SISAbp_rollOut(this);
			}
		});
		console.log(index);
	}

	
	function SISAbp_rollOver(param){
		console.log("=> trae " + param);
		$(param).addClass("util_cursor_puntero");
		$(param).removeClass("util_col_blanco");
		$(param).children().addClass("util_textcolor_blanco");
		$(param).children().children().addClass("util_textcolor_blanco");
	}
	function SISAbp_rollOut(param){
		$(param).addClass("util_col_blanco");
		$(param).removeClass("util_cursor_puntero");
		$(param).children().removeClass("util_textcolor_blanco");
		$(param).children().children().removeClass("util_textcolor_blanco");
	}

	function SISAbp_desselecciona(){
		for (var index = 0; index < 20; index++) {
			//var element = array[index];
			$( "#SISAhom_op"+ index ).hide();
			$('#SISAbp_bot_op'+ index).addClass("util_col_blanco");
			$('#SISAbp_bot_op'+ index).children().removeClass("util_textcolor_blanco");
			$('#SISAbp_bot_op'+ index).children().children().removeClass("util_textcolor_blanco");
		}
	}



	function SISApl_muestra(param){
		var manda = param.substring(13, 15);
		console.log("=> mando " + manda);
		SISAbp_seccion = ( manda);
		SISAbp_desselecciona();
		$('#SISAbp_bot_op'+ manda).removeClass("util_col_blanco util_cursor_puntero");
		$('#SISAbp_bot_op'+ manda + ' *').addClass("util_textcolor_blanco");
		//$('#SISAbp_bot_op'+ manda).addClass("util_cursor_puntero");
		$("#SISAhom_op" + manda ).show();
	}


	//	Seteos iniciales
	SISAbp_desselecciona();
	SISApl_muestra("SISAbp_bot_op1");


}




if(document.querySelector('.subMenu')!=null){
	//alert("GhostBusters!!!!!");
	var SISAbp_seccionA = "default";

	for (var index = 0; index < 12; index++) {
		$(this).find('#SISAbp_bot_opA'+ index).click(function()	{	 SISApl_muestraA(this.id);	});
		$(this).find('#SISAbp_bot_opA'+ index).mouseover(function()	{
			console.log("Actual ID => " + SISAbp_seccionA);
			if(this.id.substring(13, 15) != SISAbp_seccionA){
				//SISAbp_rollOverA(this);
				console.log("RA => " + this);
				SISAbp_rollOverA(this);
			}
		});
		$(this).find('#SISAbp_bot_opA'+ index).mouseout(function()	{		
			if(this.id.substring(13, 15) != SISAbp_seccionA){
				//SISAbp_rollOutA(this);
				console.log("RB => " + this);
				SISAbp_rollOutA(this);
			}
		});
		console.log(index);
	}

	
	function SISAbp_rollOverA(param){
		console.log("SISAbp_rollOverA => recibe " + param);
		$(param).addClass("util_cursor_puntero");
		$(param).find('.icono').addClass("util_col_violeta");
		//$(param).children().addClass("util_textcolor_sisa2");
		//$(param).children().addClass("util_textcolor_sisa1");
		//$(param).children().children().addClass("util_textcolor_sisa2");
	}
	function SISAbp_rollOutA(param){
		console.log("SISAbp_rollOutA => recibe " + param);
		$(param).removeClass("util_cursor_puntero");
		$(param).find('.icono').addClass("util_col_violeta");
		//$(param).children().addClass("util_textcolor_sisa2");
		//$(param).children().children().removeClass("util_textcolor_sisa2");
		//$(param).children().removeClass("util_textcolor_sisa2");
	}

	function SISAbp_desseleccionaA(){
		for (var index = 0; index < 20; index++) {
			console.log(" => " + "#SISAhom_opA"+ index);
			//var element = array[index];
			$( "#SISAhom_opA"+ index ).hide();
			//$('#SISAbp_bot_opA'+ index).removeClass("util_col_violeta");
			$('#SISAbp_bot_opA'+ index).children().removeClass("util_textcolor_sisa2");
			$('#SISAbp_bot_opA'+ index).children().children().removeClass("util_textcolor_sisa2");
		}
	}



	function SISApl_muestraA(param){
		var manda = param.substring(13, 15);
		console.log("=> mando " + manda);
		SISAbp_seccionA = ( manda);
		SISAbp_desseleccionaA();
		$('#SISAbp_bot_opA'+ manda).addClass("util_cursor_puntero");
		$('#SISAbp_bot_opA'+ manda + ' *').addClass("util_textcolor_sisa2");
		//$('#SISAbp_bot_op'+ manda).addClass("util_cursor_puntero");
		$("#SISAhom_opA" + manda ).show();
	}


	//	Seteos iniciales
	SISAbp_desseleccionaA();


}


//	SISA_panelesLaterales	homes_v2   ===================================================================================



if(document.querySelector('.homes_v2')!=null){
	//alert("GhostBusters!!!!!");
	var SISApanelesLaterales_seccion = "default";

	for (var index = 0; index < 12; index++) {
		$(this).find('#SISAbp_bot_op'+ index).click(function()	{	 SISApl_muestraA(this.id);	});
		$(this).find('#SISAbp_bot_op'+ index).mouseover(function()	{
			console.log("Actual ID => " + SISApanelesLaterales_seccion);
			if(this.id.substring(13, 15) != SISApanelesLaterales_seccion){
				//SISAbp_rollOver(this);
				console.log("RA => " + this);
				SISAbp_rollOver(this);
			}
		});
		$(this).find('#SISAbp_bot_op'+ index).mouseout(function()	{		
			if(this.id.substring(13, 15) != SISApanelesLaterales_seccion){
				//SISAbp_rollOutA(this);
				console.log("RB => " + this);
				SISAbp_rollOut(this);
			}
		});
		console.log(index);
	}

	
	function SISAbp_rollOver(param){
		console.log("SISAbp_rollOver => recibe " + param);
		$(param).addClass("util_cursor_puntero");
		$(param).addClass("util_col_f_a1_cc3");
		//$(param).find('.color').css("opacity", ".95");
		$(param).find('.texto h3').addClass("util_textcolor_blanco");
		//$(param).find('.icono').addClass("util_col_violeta");
		
		//$(param).children().addClass("util_textcolor_sisa2");
		//$(param).children().addClass("util_textcolor_sisa1");
		//$(param).children().children().addClass("util_textcolor_sisa2");
	}
	function SISAbp_rollOut(param){
		console.log("SISAbp_rollOut => recibe " + param);
		$(param).removeClass("util_cursor_puntero");
		$(param).removeClass("util_col_f_a1_cc3");
		//$(param).find('.color').css("opacity", ".6");
		$(param).find('.texto h3').removeClass("util_textcolor_blanco");
		//$(param).find('.icono').addClass("util_col_violeta");
		
		//$(param).children().addClass("util_textcolor_sisa2");
		//$(param).children().children().removeClass("util_textcolor_sisa2");
		//$(param).children().removeClass("util_textcolor_sisa2");
	}

	function SISAbp_desselecciona(){
		for (var index = 0; index < 20; index++) {
			console.log(" => " + "#SISAhom_opA"+ index);
			//var element = array[index];

			//$('#SISAbp_bot_op'+ index).removeClass("util_cursor_puntero");
			//$('#SISAbp_bot_op'+ index).removeClass("util_col_f_a1_cc3");
			//$('#SISAbp_bot_op'+ index).find('.icono *:first-child').removeClass("util_textcolor_blanco");
			//$('#SISAbp_bot_op'+ index).find('h3').removeClass("util_textcolor_blanco");



		$('#SISAbp_bot_op'+ index).removeClass("util_cursor_puntero");
		$('#SISAbp_bot_op'+ index).removeClass("util_col_f_a1_cc3");
		//$(param).find('.color').css("opacity", ".6");
		$('#SISAbp_bot_op'+ index).find('.texto h3').removeClass("util_textcolor_blanco");



			$("#SISAhom_op" + index ).hide();
		}
	}



	function SISApl_muestraA(param){
		var manda = param.substring(13, 15);
		console.log("=> mando " + manda);
		SISApanelesLaterales_seccion = ( manda);
		SISAbp_desselecciona();
		
		$('#SISAbp_bot_op'+ manda).addClass("util_cursor_puntero");
		$('#SISAbp_bot_op'+ manda).addClass("util_col_f_a1_cc3");
		//$(param).find('.color').css("opacity", ".95");
		$('#SISAbp_bot_op'+ manda).find('.texto h3').addClass("util_textcolor_blanco");


		$("#SISAhom_op" + manda ).show();
	}



	//	Seteos iniciales
	SISAbp_desselecciona();


}


//	SISA_panelesLaterales	homes_v3   ===================================================================================



if(document.querySelector('.homes_v3')!=null){
	//alert("GhostBusters!!!!! 3");
	var SISA_h_v3_PL_seccion = "default";

	for (var index = 0; index < 12; index++) {
		$(this).find('#SISAbp_bot_op'+ index).click(function()	{	 SISA_h_v3_pl_muestra(this.id);	});
		$(this).find('#SISAbp_bot_op'+ index).mouseover(function()	{
			console.log("Actual ID => " + SISA_h_v3_PL_seccion);
			if(this.id.substring(13, 15) != SISA_h_v3_PL_seccion){
				//SISAbp_rollOver(this);
				console.log("RA => " + this);
				SISAbp_rollOver(this);
			}
		});
		$(this).find('#SISAbp_bot_op'+ index).mouseout(function()	{		
			if(this.id.substring(13, 15) != SISA_h_v3_PL_seccion){
				//SISAbp_rollOut(this);
				console.log("RB => " + this);
				SISAbp_rollOut(this);
			}
		});
		
		$(this).find('#SISAbp_bot_opB'+ index).mouseover(function()	{
			console.log("Actual ID => " + SISA_h_v3_PL_seccion);
			if(this.id.substring(13, 15) != SISA_h_v3_PL_seccion){
				//SISAbp_rollOver(this);
				console.log("RA => " + this);
				SISAbp_rollOverB(this);
			}
		});
		$(this).find('#SISAbp_bot_opB'+ index).mouseout(function()	{		
			if(this.id.substring(13, 15) != SISA_h_v3_PL_seccion){
				//SISAbp_rollOutA(this);
				console.log("RB => " + this);
				SISAbp_rollOutB(this);
			}
		});
		console.log(index);
	}

	
	function SISAbp_rollOver(param){
		console.log("SISAbp_rollOver => recibe " + param);
		$(param).addClass("util_cursor_puntero");
		$(param).addClass("util_col_f_a1_cc3");
		$(param).find('.icono *:first-child').addClass("util_textcolor_blanco");
		$(param).find('h3').addClass("util_textcolor_blanco");
		$(param).find('h4').addClass("util_textcolor_blanco");
	}
	function SISAbp_rollOut(param){
		console.log("SISAbp_rollOutA => recibe " + param);
		$(param).removeClass("util_cursor_puntero");
		$(param).removeClass("util_col_f_a1_cc3");
		$(param).find('.icono *:first-child').removeClass("util_textcolor_blanco");
		$(param).find('h3').removeClass("util_textcolor_blanco");
		$(param).find('h4').removeClass("util_textcolor_blanco");
	}
	
	function SISAbp_rollOverB(param){
		$(param).addClass("util_cursor_puntero");
		$(param).find('h3').addClass("util_textcolor_sisa2");
		$(param).find('span').addClass("util_textcolor_sisa2");
	}
	function SISAbp_rollOutB(param){
		$(param).removeClass("util_cursor_puntero");
		$(param).find('h3').removeClass("util_textcolor_sisa2");
		$(param).find('span').removeClass("util_textcolor_sisa2");
	}

	function SISA_h_v3_pl_desselecciona(){
		for (var index = 0; index < 20; index++) {
			console.log(" => " + "#SISAhom_opA"+ index);
			//$( "#SISAhom_opA"+ index ).hide();
			//$('#SISAbp_bot_op'+ index).children().removeClass("util_textcolor_sisa2");
			//$('#SISAbp_bot_op'+ index).children().children().removeClass("util_textcolor_sisa2");

			$('#SISAbp_bot_op'+ index).removeClass("util_cursor_puntero");
			$('#SISAbp_bot_op'+ index).removeClass("util_col_f_a1_cc3");
			$('#SISAbp_bot_op'+ index).find('.icono *:first-child').removeClass("util_textcolor_blanco");
			$('#SISAbp_bot_op'+ index).find('h3').removeClass("util_textcolor_blanco");
			$('#SISAbp_bot_op'+ index).find('h4').removeClass("util_textcolor_blanco");
			$("#SISAhom_op" + index ).hide();
		}
	}

	function SISA_h_v3_pl_muestra(param){
		var manda = param.substring(13, 15);
		console.log("=> mando " + manda);
		SISA_h_v3_PL_seccion = ( manda);
		SISA_h_v3_pl_desselecciona();

		$('#SISAbp_bot_op'+ manda).addClass("util_cursor_puntero");
		$('#SISAbp_bot_op'+ manda).addClass("util_col_f_a1_cc3");
		$('#SISAbp_bot_op'+ manda).find('.icono *:first-child').addClass("util_textcolor_blanco");
		$('#SISAbp_bot_op'+ manda).find('h3').addClass("util_textcolor_blanco");
		$('#SISAbp_bot_op'+ manda).find('h4').addClass("util_textcolor_blanco");


		$("#SISAhom_op" + manda ).show();
	}


	//	Seteos iniciales
	SISA_h_v3_pl_muestra("SISAhom_op1");


}


});
