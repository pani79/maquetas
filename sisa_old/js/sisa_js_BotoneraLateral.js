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




//	SISA_BotoneraLateral   ===================================================================================

if(document.querySelector('#SISA_BotoneraLateral')!=null){

var serviciosweb_seccion = "default";




$(this).find('#SISAbl_bot_op1').click(function()	{	 SISAbl_muestra_op1();	});
$(this).find('#SISAbl_bot_op1').mouseover(function()	{
	if(SISAbl_seccion != "op1"){
		$('#SISAbl_bot_op1').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op1 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op1').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op1').mouseout(function()	{
	if(SISAbl_seccion != "op1"){
		$('#SISAbl_bot_op1').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op1 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op1').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op2').click(function()	{	SISAbl_muestra_op2();	});
$(this).find('#SISAbl_bot_op2').mouseover(function()	{
	if(SISAbl_seccion != "op2"){
		$('#SISAbl_bot_op2').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op2 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op2').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op2').mouseout(function()	{
	if(SISAbl_seccion != "op2"){
		$('#SISAbl_bot_op2').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op2 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op2').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op3').click(function()	{	SISAbl_muestra_op3();	});
$(this).find('#SISAbl_bot_op3').mouseover(function()	{
	if(SISAbl_seccion != "op3"){
		$('#SISAbl_bot_op3').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op3 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op3').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op3').mouseout(function()	{
	if(SISAbl_seccion != "op3"){
		$('#SISAbl_bot_op3').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op3 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op3').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op4').click(function()	{	SISAbl_muestra_op4();	});
$(this).find('#SISAbl_bot_op4').mouseover(function()	{
	if(SISAbl_seccion != "op4"){
		$('#SISAbl_bot_op4').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op4 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op4').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op4').mouseout(function()	{
	if(SISAbl_seccion != "op4"){
		$('#SISAbl_bot_op4').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op4 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op4').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op5').click(function()	{	SISAbl_muestra_op5();	});
$(this).find('#SISAbl_bot_op5').mouseover(function()	{
	if(SISAbl_seccion != "op5"){
		$('#SISAbl_bot_op5').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op5 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op5').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op5').mouseout(function()	{
	if(SISAbl_seccion != "op5"){
		$('#SISAbl_bot_op5').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op5 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op5').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op6').click(function()	{	SISAbl_muestra_op6();	});
$(this).find('#SISAbl_bot_op6').mouseover(function()	{
	if(SISAbl_seccion != "op6"){
		$('#SISAbl_bot_op6').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op6 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op6').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op6').mouseout(function()	{
	if(SISAbl_seccion != "op6"){
		$('#SISAbl_bot_op6').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op6 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op6').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op7').click(function()	{	SISAbl_muestra_op7();	});
$(this).find('#SISAbl_bot_op7').mouseover(function()	{
	if(SISAbl_seccion != "op7"){
		$('#SISAbl_bot_op7').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op7 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op7').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op7').mouseout(function()	{
	if(SISAbl_seccion != "op7"){
		$('#SISAbl_bot_op7').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op7 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op7').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op8').click(function()	{	SISAbl_muestra_op8();	});
$(this).find('#SISAbl_bot_op8').mouseover(function()	{
	if(SISAbl_seccion != "op8"){
		$('#SISAbl_bot_op8').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op8 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op8').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op8').mouseout(function()	{
	if(SISAbl_seccion != "op8"){
		$('#SISAbl_bot_op8').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op8 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op8').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op9').click(function()	{	SISAbl_muestra_op9();	});
$(this).find('#SISAbl_bot_op9').mouseover(function()	{
	if(SISAbl_seccion != "op9"){
		$('#SISAbl_bot_op9').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op9 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op9').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op9').mouseout(function()	{
	if(SISAbl_seccion != "op9"){
		$('#SISAbl_bot_op9').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op9 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op9').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op10').click(function()	{	SISAbl_muestra_op10();	});
$(this).find('#SISAbl_bot_op10').mouseover(function()	{
	if(SISAbl_seccion != "op10"){
		$('#SISAbl_bot_op10').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op10 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op10').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op10').mouseout(function()	{
	if(SISAbl_seccion != "op10"){
		$('#SISAbl_bot_op10').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op10 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op10').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op11').click(function()	{	SISAbl_muestra_op11();	});
$(this).find('#SISAbl_bot_op11').mouseover(function()	{
	if(SISAbl_seccion != "op11"){
		$('#SISAbl_bot_op11').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op11 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op11').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op11').mouseout(function()	{
	if(SISAbl_seccion != "op11"){
		$('#SISAbl_bot_op11').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op11 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op11').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op12').click(function()	{	SISAbl_muestra_op12();	});
$(this).find('#SISAbl_bot_op12').mouseover(function()	{
	if(SISAbl_seccion != "op12"){
		$('#SISAbl_bot_op12').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op12 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op12').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op12').mouseout(function()	{
	if(SISAbl_seccion != "op12"){
		$('#SISAbl_bot_op12').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op12 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op12').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op13').click(function()	{	SISAbl_muestra_op13();	});
$(this).find('#SISAbl_bot_op13').mouseover(function()	{
	if(SISAbl_seccion != "op13"){
		$('#SISAbl_bot_op13').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op13 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op13').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op13').mouseout(function()	{
	if(SISAbl_seccion != "op13"){
		$('#SISAbl_bot_op13').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op13 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op13').removeClass("util_cursor_puntero");
	}
});

$(this).find('#SISAbl_bot_op14').click(function()	{	SISAbl_muestra_op14();	});
$(this).find('#SISAbl_bot_op14').mouseover(function()	{
	if(SISAbl_seccion != "op14"){
		$('#SISAbl_bot_op14').removeClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op14 *').removeClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op14').addClass("util_cursor_puntero");
	}
});
$(this).find('#SISAbl_bot_op14').mouseout(function()	{
	if(SISAbl_seccion != "op14"){
		$('#SISAbl_bot_op14').addClass("util_margen_iz40 util_col_blanco");
		$('#SISAbl_bot_op14 *').addClass("util_textcolor_sisa4");
		$('#SISAbl_bot_op14').removeClass("util_cursor_puntero");
	}
});


function SISAbl_desselecciona(){
	$('#SISAbl_bot_op1').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op1 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op2').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op2 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op3').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op3 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op4').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op4 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op5').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op5 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op6').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op6 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op7').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op7 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op8').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op8 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op9').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op9 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op10').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op10 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op11').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op11 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op12').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op12 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op13').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op13 *').addClass("util_textcolor_sisa4");
	$('#SISAbl_bot_op14').addClass("util_margen_iz40 util_col_blanco util_cursor_puntero");
	$('#SISAbl_bot_op14 *').addClass("util_textcolor_sisa4");
	
	$( "#sec_op0" ).hide();// la default (si tiene)
	$( "#sec_op1" ).hide();
	$( "#sec_op2" ).hide();
	$( "#sec_op3" ).hide();
	$( "#sec_op4" ).hide();
	$( "#sec_op5" ).hide();
	$( "#sec_op6" ).hide();
	$( "#sec_op7" ).hide();
	$( "#sec_op8" ).hide();
	$( "#sec_op9" ).hide();
	$( "#sec_op10" ).hide();
	$( "#sec_op11" ).hide();
	$( "#sec_op12" ).hide();
	$( "#sec_op13" ).hide();
	$( "#sec_op14" ).hide();
}



function SISAbl_muestra_op0(){
	SISAbl_seccion = "op0";
	SISAbl_desselecciona();
	$("#sec_op0" ).show();
	// Como es la default no tiene botones y aparece una sola vez
}

function SISAbl_muestra_op1(){
	SISAbl_seccion = "op1";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op1").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op1 *').removeClass("util_textcolor_sisa4");
	$("#sec_op1" ).show();
}

function SISAbl_muestra_op2(){
	SISAbl_seccion = "op2";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op2").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op2 *').removeClass("util_textcolor_sisa4");
	$("#sec_op2" ).show();
}

function SISAbl_muestra_op3(){
	SISAbl_seccion = "op3";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op3").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op3 *').removeClass("util_textcolor_sisa4");
	$("#sec_op3" ).show();
}

function SISAbl_muestra_op4(){
	SISAbl_seccion = "op4";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op4").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op4 *').removeClass("util_textcolor_sisa4");
	$("#sec_op4" ).show();
}

function SISAbl_muestra_op5(){
	SISAbl_seccion = "op5";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op5").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op5 *').removeClass("util_textcolor_sisa4");
	$("#sec_op5" ).show();
}

function SISAbl_muestra_op6(){
	SISAbl_seccion = "op6";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op6").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op6 *').removeClass("util_textcolor_sisa4");
	$("#sec_op6" ).show();
}

function SISAbl_muestra_op7(){
	SISAbl_seccion = "op7";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op7").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op7 *').removeClass("util_textcolor_sisa4");
	$("#sec_op7" ).show();
}

function SISAbl_muestra_op8(){
	SISAbl_seccion = "op8";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op8").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op8 *').removeClass("util_textcolor_sisa4");
	$("#sec_op8" ).show();
}

function SISAbl_muestra_op9(){
	SISAbl_seccion = "op9";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op9").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op9 *').removeClass("util_textcolor_sisa4");
	$("#sec_op9" ).show();
}

function SISAbl_muestra_op10(){
	SISAbl_seccion = "op10";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op10").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op10 *').removeClass("util_textcolor_sisa4");
	$("#sec_op10" ).show();
}

function SISAbl_muestra_op11(){
	SISAbl_seccion = "op11";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op11").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op11 *').removeClass("util_textcolor_sisa4");
	$("#sec_op11" ).show();
}

function SISAbl_muestra_op12(){
	SISAbl_seccion = "op12";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op12").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op12 *').removeClass("util_textcolor_sisa4");
	$("#sec_op12" ).show();
}

function SISAbl_muestra_op13(){
	SISAbl_seccion = "op13";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op13").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op13 *').removeClass("util_textcolor_sisa4");
	$("#sec_op13" ).show();
}

function SISAbl_muestra_op14(){
	SISAbl_seccion = "op14";
	SISAbl_desselecciona();
	$("#SISAbl_bot_op14").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$('#SISAbl_bot_op14 *').removeClass("util_textcolor_sisa4");
	$("#sec_op14" ).show();
}



//	Seteos iniciales

SISAbl_desselecciona();
// Si estamos en la ficha del profesional
if((document.querySelector('#Profesional')!=null) || 
(document.querySelector('#Biblioteca')!=null) || 
(document.querySelector('#Reportes')!=null)) {
SISAbl_muestra_op1();
}else if((document.querySelector('#Refes_programas')!=null)) {
SISAbl_muestra_op14();
}else{
	SISAbl_muestra_op0(); // la default (si tiene)
}

}else{

}



});