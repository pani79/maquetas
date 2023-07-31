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




//	SISA_Solapas   ===================================================================================

if(document.querySelector('#SISA_Solapas')!=null){


	//alert("SISA_Solapas");
	var SISAsol_seccion = "op1";




	$(this).find('#SISAsol_bot_op1').click(function()	{	 SISAsol_muestra_op1();	});
	$(this).find('#SISAsol_bot_op1').mouseover(function()	{
		if(SISAsol_seccion != "op1"){
			$('#SISAsol_bot_op1 .texto *').css("color", "white");
			$('#SISAsol_bot_op1 > div').css("background-color", "rgba(255,255,255,0)");
			$('#SISAsol_bot_op1 .esquina').css("background-color", "rgba(170,170,170,0)");
			$('#SISAsol_bot_op1').addClass("util_cursor_puntero");
			$('#SISAsol_bot_op1').removeClass("util_margen_ar20");
		}
	});
	$(this).find('#SISAsol_bot_op1').mouseout(function()	{
		if(SISAsol_seccion != "op1"){
			$('#SISAsol_bot_op1 .texto *').css("color", "#333");
			$('#SISAsol_bot_op1 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op1 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op1').removeClass("util_cursor_puntero");
			$('#SISAsol_bot_op1').addClass("util_margen_ar20");
		}
	});

	$(this).find('#SISAsol_bot_op2').click(function()	{	 SISAsol_muestra_op2();	});
	$(this).find('#SISAsol_bot_op2').mouseover(function()	{
		if(SISAsol_seccion != "op2"){
			$('#SISAsol_bot_op2 .texto *').css("color", "white");
			$('#SISAsol_bot_op2 > div').css("background-color", "rgba(255,255,255,0)");
			$('#SISAsol_bot_op2 .esquina').css("background-color", "rgba(170,170,170,0)");
			$('#SISAsol_bot_op2').addClass("util_cursor_puntero");
			$('#SISAsol_bot_op2').removeClass("util_margen_ar20");
		}
	});
	$(this).find('#SISAsol_bot_op2').mouseout(function()	{
		if(SISAsol_seccion != "op2"){
			$('#SISAsol_bot_op2 .texto *').css("color", "#333");
			$('#SISAsol_bot_op2 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op2 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op2').removeClass("util_cursor_puntero");
			$('#SISAsol_bot_op2').addClass("util_margen_ar20");
		}
	});

	$(this).find('#SISAsol_bot_op3').click(function()	{	 SISAsol_muestra_op3();	});
	$(this).find('#SISAsol_bot_op3').mouseover(function()	{
		if(SISAsol_seccion != "op3"){
			$('#SISAsol_bot_op3 .texto *').css("color", "white");
			$('#SISAsol_bot_op3 > div').css("background-color", "rgba(255,255,255,0)");
			$('#SISAsol_bot_op3 .esquina').css("background-color", "rgba(170,170,170,0)");
			$('#SISAsol_bot_op3').addClass("util_cursor_puntero");
			$('#SISAsol_bot_op3').removeClass("util_margen_ar20");
		}
	});
	$(this).find('#SISAsol_bot_op3').mouseout(function()	{
		if(SISAsol_seccion != "op3"){
			$('#SISAsol_bot_op3 .texto *').css("color", "#333");
			$('#SISAsol_bot_op3 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op3 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op3').removeClass("util_cursor_puntero");
			$('#SISAsol_bot_op3').addClass("util_margen_ar20");
		}
	});

	$(this).find('#SISAsol_bot_op4').click(function()	{	 SISAsol_muestra_op4();	});
	$(this).find('#SISAsol_bot_op4').mouseover(function()	{
		if(SISAsol_seccion != "op4"){
			$('#SISAsol_bot_op4 .texto *').css("color", "white");
			$('#SISAsol_bot_op4 > div').css("background-color", "rgba(255,255,255,0)");
			$('#SISAsol_bot_op4 .esquina').css("background-color", "rgba(170,170,170,0)");
			$('#SISAsol_bot_op4').addClass("util_cursor_puntero");
			$('#SISAsol_bot_op4').removeClass("util_margen_ar20");
		}
	});
	$(this).find('#SISAsol_bot_op4').mouseout(function()	{
		if(SISAsol_seccion != "op4"){
			$('#SISAsol_bot_op4 .texto *').css("color", "#333");
			$('#SISAsol_bot_op4 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op4 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op4').removeClass("util_cursor_puntero");
			$('#SISAsol_bot_op4').addClass("util_margen_ar20");
		}
	});

	function SISAsol_desselecciona(){
		
			$('#SISAsol_bot_op1 .texto *').css("color", "#333");
			$('#SISAsol_bot_op1 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op1 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op1').addClass("util_margen_ar20");
			
			$('#SISAsol_bot_op2 .texto *').css("color", "#333");
			$('#SISAsol_bot_op2 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op2 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op2').addClass("util_margen_ar20");
			
			$('#SISAsol_bot_op3 .texto *').css("color", "#333");
			$('#SISAsol_bot_op3 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op3 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op3').addClass("util_margen_ar20");
			
			$('#SISAsol_bot_op4 .texto *').css("color", "#333");
			$('#SISAsol_bot_op4 > div').css("background-color", "rgba(255,255,255,1)");
			$('#SISAsol_bot_op4 .esquina').css("background-color", "rgba(170,170,170,1)");
			$('#SISAsol_bot_op4').addClass("util_margen_ar20");
		
	//	$( "#SISAsol_op0" ).hide();// la default (si tiene)
		$( "#SISAsol_op1" ).hide();
		$( "#SISAsol_op2" ).hide();
		$( "#SISAsol_op3" ).hide();
		$( "#SISAsol_op4" ).hide();
	}



	function SISAsol_muestra_op0(){
		SISAsol_seccion = "op0";
		SISAbl_desselecciona();
		$("#SISAsol_op0" ).show();
		// Como es la default no tiene botones y aparece una sola vez
	}

	function SISAsol_muestra_op1(){
		SISAsol_seccion = "op1";
		SISAsol_desselecciona();
		$("#SISAsol_op1" ).show();
		$('#SISAsol_bot_op1 .texto *').css("color", "white");
		$('#SISAsol_bot_op1 > div').css("background-color", "rgba(255,255,255,0)");
		$('#SISAsol_bot_op1 .esquina').css("background-color", "rgba(170,170,170,0)");
		$('#SISAsol_bot_op1').removeClass("util_cursor_puntero");
		$('#SISAsol_bot_op1').removeClass("util_margen_ar20");
	}

	function SISAsol_muestra_op2(){
		SISAsol_seccion = "op2";
		SISAsol_desselecciona();
		$("#SISAsol_op2" ).show();
		$('#SISAsol_bot_op2 .texto *').css("color", "white");
		$('#SISAsol_bot_op2 > div').css("background-color", "rgba(255,255,255,0)");
		$('#SISAsol_bot_op2 .esquina').css("background-color", "rgba(170,170,170,0)");
		$('#SISAsol_bot_op2').removeClass("util_cursor_puntero");
		$('#SISAsol_bot_op2').removeClass("util_margen_ar20");
	}

	function SISAsol_muestra_op3(){
		SISAsol_seccion = "op3";
		SISAsol_desselecciona();
		$("#SISAsol_op3" ).show();
		$('#SISAsol_bot_op3 .texto *').css("color", "white");
		$('#SISAsol_bot_op3 > div').css("background-color", "rgba(255,255,255,0)");
		$('#SISAsol_bot_op3 .esquina').css("background-color", "rgba(170,170,170,0)");
		$('#SISAsol_bot_op3').removeClass("util_cursor_puntero");
		$('#SISAsol_bot_op3').removeClass("util_margen_ar20");
	}

	function SISAsol_muestra_op4(){
		SISAsol_seccion = "op4";
		SISAsol_desselecciona();
		$("#SISAsol_op4" ).show();
		$('#SISAsol_bot_op4 .texto *').css("color", "white");
		$('#SISAsol_bot_op4 > div').css("background-color", "rgba(255,255,255,0)");
		$('#SISAsol_bot_op4 .esquina').css("background-color", "rgba(170,170,170,0)");
		$('#SISAsol_bot_op4').removeClass("util_cursor_puntero");
		$('#SISAsol_bot_op4').removeClass("util_margen_ar20");
	}




	//	Seteos iniciales

	SISAsol_desselecciona();
	SISAsol_muestra_op1();
}



//	SISA_Solapas_formularios   ===================================================================================

if(document.querySelector('#SISA_Solapas_formularios')!=null){

	//alert("SISA_Solapas_formularios");
	var SISAsol_seccion = "2";

	for (var index = 0; index < 12; index++) {
		$(this).find('#SISAsol_bot_op'+ index).click(function()	{	 SISAsol_muestra(this, this.id.substring(14, 16));	});
		$(this).find('#SISAsol_bot_op'+ index).mouseover(function()	{
			console.log("ROv=>" + SISAsol_seccion + "/"+this.id.substring(14, 16));
			if(this.id.substring(14, 16) != SISAsol_seccion){
				SISAsol_rollOver(this);
			}
		});
		$(this).find('#SISAsol_bot_op'+ index).mouseout(function()	{		
			console.log("ROu=>" + SISAsol_seccion + "/"+this.id.substring(14, 16));
			if(this.id.substring(14, 16) != SISAsol_seccion){
				SISAsol_rollOut(this);
			}
		});
		//console.log(index);
	}

	function SISAsol_rollOver(param){
			//alert(" // " + param);
		//console.log("=> trae " + param);
		//console.log("=> con /" + param.id.substring(14, 16) + "/");
		
		$(param).find(".esquina").css("border-radius", "4px 0px 0px 0px");
		$(param).find(".esquina").removeClass("util_col_desactivado");
		$(param).css("width", "200px");
		$(param).css("z-index", "-2");
		$(param).addClass("util_cursor_puntero");
		$(param).find("h3").css("display", "block");
		$(param).children().addClass("util_textcolor_blanco");
		$(param).children().children().addClass("util_textcolor_blanco");
	}

	function SISAsol_rollOut(param){
		//$(param).css("width", "52px");
		$(param).find(".esquina").css("border-radius", "4px 4px 0px 0px");
		$(param).find(".esquina").addClass("util_col_desactivado");
		$(param).css("width", "52px");
		$(param).css("z-index", "-1");
		$(param).find("h3").css("display", "none");
		$(param).removeClass("util_cursor_puntero");
		$(param).children().removeClass("util_textcolor_blanco");
		$(param).children().children().removeClass("util_textcolor_blanco");
	}

	function SISAsol_muestra(param, indice){
		//console.log("SISAsol_muestra = vamo a mostrar " + param);
		//$(param).css("width", "52px");
				
		var seccionAmostrar = indice;
		for (var index = 0; index < 12; index++) {
			//$(this).find('#SISAhom_op'+ index).hide();
			if(index != indice){
				$('#SISAsol_op'+ index).hide();
				SISAsol_rollOut('#SISAsol_bot_op'+ index);
			}
			//console.log(index);
		}
		
		$('#SISAsol_op'+ seccionAmostrar).show();
		//console.log(' - -- - - - '+ (('#SISAsol_op'+ seccionAmostrar+'#')));
		//console.log(' - -- - - -> '+ seccionAmostrar);

		SISAsol_seccion = indice;
		//console.log(' puse - - -> '+ SISAsol_seccion + '/=/ manda - - ->' + param);

		
		$(param).find(".esquina").css("border-radius", "4px 0px 0px 0px");
		$(param).find(".esquina").removeClass("util_col_desactivado");
		$(param).css("width", "200px");
		$(param).css("z-index", "-2");
		$(param).find("h3").css("display", "block");
		$(param).children().addClass("util_textcolor_blanco");
		$(param).children().children().addClass("util_textcolor_blanco");

	}

	SISAsol_muestra("#SISAsol_bot_op1", 1);







}




});
