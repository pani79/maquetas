// JavaScript Document






$(document).ready(function(){
// Cuando arranca el sript y esta todo listo... arranca el baile
//alert("who ya gonna call?");



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



//	Central de reportes   ===================================================================================

if(document.querySelector('#CentralDeReportes')!=null){

var mostrando = "default";
var reportes_seccion_tipo = "default";

//	Botonera al hacer click

//$('.registro:not(#codificaciones)').click(function()	{	
//	$( "#info_svih" ).show(); 
//	$( "#botonera_registros" ).css("display", "none");
//	mostrando = "registros";
//});
$('.boton_registro').click(function()	{	
	$( "#info_svih" ).show(); 
	$( "#botonera_registros" ).css("display", "none");
	mostrando = "registros";
});
$('.codificaciones').click(function()	{	
	$( "#info_codificaciones" ).show(); 
	$( "#botonera_registros" ).hide(); 
	escondeCodificacionesTipos();
	mostrando = "codificaciones";
});




//	Esta funcion solo deselecciona y oculta los elementos
function CdR_ConfiguracionDeInicio(){
	$("#botonera_registros").show();
	$( "#info_svih" ).hide();
	$( "#info_codificaciones" ).hide();
}
function CdR_botoneraMuestra(){
	$("#botonera_registros").show();
	alert("no hay FICHA en esta pagina");
}




$('.ul_sisa li').click(function()	{	window.open('mod_reportes_configuracion.html', '_self'); 	});
$('.ul_sisa li').mouseover(function()	{	$('.ul_sisa li').addClass("util_cursor_puntero");});
$('.ul_sisa li').mouseout(function()	{	$('.ul_sisa li').removeClass("util_cursor_puntero");});

function CdR_svih_seleccionaR(){
	reportes_seccion_tipo = "numericos";
		$('#reportes_svih_r > div').removeClass("util_col_desactivado");
		$('#reportes_svih_r > div').addClass("util_col_f_a1_cc1 util_efecto_sombra util_cursor_default");
		$('#reportes_svih_r h4').addClass("util_textcolor_sisa2 util_cursor_default");
		$(".i_reportes").show();
}
function CdR_svih_seleccionaL(){
	reportes_seccion_tipo = "listados";
		$('#reportes_svih_l > div').removeClass("util_col_desactivado");
		$('#reportes_svih_l > div').addClass("util_col_f_a1_cc2 util_efecto_sombra util_cursor_default");
		$('#reportes_svih_l h4').addClass("util_textcolor_sisa2 util_cursor_default");
		$(".i_listados").show();
}
function CdR_svih_seleccionaG(){
	reportes_seccion_tipo = "georeferenciacion";
		$('#reportes_svih_g > div').removeClass("util_col_desactivado");
		$('#reportes_svih_g > div').addClass("util_col_f_a1_cc4 util_efecto_sombra util_cursor_default");
		$('#reportes_svih_g h4').addClass("util_textcolor_sisa2 util_cursor_default");
		$(".i_georeferencicion").show();
}
function CdR_svih_seleccionaI(){
	reportes_seccion_tipo = "informes";
		$('#reportes_svih_i > div').removeClass("util_col_desactivado");
		$('#reportes_svih_i > div').addClass("util_col_f_a1_cc3 util_efecto_sombra util_cursor_default");
		$('#reportes_svih_i h4').addClass("util_textcolor_sisa2 util_cursor_default");
		$(".i_informes").show();
}

function CdR_svih_desselecciona(){
	$(".i_reportes").hide();
	$(".i_listados").hide();
	$(".i_georeferencicion").hide();
	$(".i_informes").hide();

	$('#reportes_svih_r > div').addClass("util_col_desactivado");
	$('#reportes_svih_r > div').removeClass("util_col_f_a1_cc1 util_efecto_sombra util_cursor_default");
	$('#reportes_svih_r h4').removeClass("util_textcolor_sisa2 util_cursor_default");
	$('#reportes_svih_l > div').addClass("util_col_desactivado");
	$('#reportes_svih_l > div').removeClass("util_col_f_a1_cc2 util_efecto_sombra util_cursor_default");
	$('#reportes_svih_l h4').removeClass("util_textcolor_sisa2 util_cursor_default");
	$('#reportes_svih_g > div').addClass("util_col_desactivado");
	$('#reportes_svih_g > div').removeClass("util_col_f_a1_cc4 util_efecto_sombra util_cursor_default");
	$('#reportes_svih_g h4').removeClass("util_textcolor_sisa2 util_cursor_default");		
	$('#reportes_svih_i > div').addClass("util_col_desactivado");
	$('#reportes_svih_i > div').removeClass("util_col_f_a1_cc3 util_efecto_sombra util_cursor_default");
	$('#reportes_svih_i h4').removeClass("util_textcolor_sisa2 util_cursor_default");
}





}





//	Tipos de Reportes ------------------------------------------------------------------------------------------------------------------


var reporte_tipo = "";

$(this).find('#infoReportes_bot_listados').click(function()			{
	tipoReportes_desselecciona();
	Reportes_muestra_listados();
});
$(this).find('#infoReportes_bot_listados').mouseover(function()	{
	if(reporte_tipo != "listados"){
		$('#infoReportes_bot_listados').addClass("util_col_f_a1_cc2");
		$('#infoReportes_bot_listados h4').addClass("util_textcolor_blanco");
		$('#infoReportes_bot_listados span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#infoReportes_bot_listados').mouseout(function()	{
	if(reporte_tipo != "listados"){
		$('#infoReportes_bot_listados').removeClass("util_col_f_a1_cc2");
		$('#infoReportes_bot_listados h4').removeClass("util_textcolor_blanco");
		$('#infoReportes_bot_listados span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#infoReportes_bot_numericos').click(function()			{
	tipoReportes_desselecciona();
	Reportes_muestra_numericos();
});
$(this).find('#infoReportes_bot_numericos').mouseover(function()	{
	if(reporte_tipo != "numericos"){
		$('#infoReportes_bot_numericos').addClass("util_col_f_a1_cc1"); 
		$('#infoReportes_bot_numericos h4').addClass("util_textcolor_blanco");
		$('#infoReportes_bot_numericos span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#infoReportes_bot_numericos').mouseout(function()	{
	if(reporte_tipo != "numericos"){
		$('#infoReportes_bot_numericos').removeClass("util_col_f_a1_cc1");
		$('#infoReportes_bot_numericos h4').removeClass("util_textcolor_blanco");
		$('#infoReportes_bot_numericos span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#infoReportes_bot_informes').click(function()			{
	tipoReportes_desselecciona();
	Reportes_muestra_informes();
});
$(this).find('#infoReportes_bot_informes').mouseover(function()	{
	if(reporte_tipo != "informes"){
		$('#infoReportes_bot_informes').addClass("util_col_f_a1_cc3");
		$('#infoReportes_bot_informes h4').addClass("util_textcolor_blanco");
		$('#infoReportes_bot_informes span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#infoReportes_bot_informes').mouseout(function()	{
	if(reporte_tipo != "informes"){
		$('#infoReportes_bot_informes').removeClass("util_col_f_a1_cc3");
		$('#infoReportes_bot_informes h4').removeClass("util_textcolor_blanco");
		$('#infoReportes_bot_informes span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#infoReportes_bot_geolocalizacion').click(function()			{
	tipoReportes_desselecciona();
	Reportes_muestra_geolocalizacion();
});
$(this).find('#infoReportes_bot_geolocalizacion').mouseover(function()	{
	if(reporte_tipo != "geolocalizacion"){
		$('#infoReportes_bot_geolocalizacion').addClass("util_col_f_a1_cc4");
		$('#infoReportes_bot_geolocalizacion h4').addClass("util_textcolor_blanco");
		$('#infoReportes_bot_geolocalizacion span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#infoReportes_bot_geolocalizacion').mouseout(function()	{
	if(reporte_tipo != "geolocalizacion"){
		$('#infoReportes_bot_geolocalizacion').removeClass("util_col_f_a1_cc4");
		$('#infoReportes_bot_geolocalizacion h4').removeClass("util_textcolor_blanco");
		$('#infoReportes_bot_geolocalizacion span').removeClass("util_textcolor_blanco");
	}
});


function tipoReportes_desselecciona(){
	$('#infoReportes_bot_listados').addClass("util_margen_iz40 util_cursor_puntero");
	$('#infoReportes_bot_listados .registro').removeClass("util_col_f_a1_cc2");
	$('#infoReportes_bot_listados .registro').addClass("util_col_desactivado");
	$("#infoReportes_bot_listados" ).removeClass("util_col_f_a1_cc2");
	$("#infoReportes_bot_listados h4").removeClass("util_textcolor_blanco");
	$("#infoReportes_bot_listados span").removeClass("util_textcolor_blanco");

	$('#infoReportes_bot_numericos').addClass("util_margen_iz40 util_cursor_puntero");
	$('#infoReportes_bot_numericos .registro').removeClass("util_col_f_a1_cc1");
	$('#infoReportes_bot_numericos .registro').addClass("util_col_desactivado");
	$("#infoReportes_bot_numericos" ).removeClass("util_col_f_a1_cc1");
	$("#infoReportes_bot_numericos h4").removeClass("util_textcolor_blanco");
	$("#infoReportes_bot_numericos span").removeClass("util_textcolor_blanco");
	
	$('#infoReportes_bot_informes').addClass("util_margen_iz40 util_cursor_puntero");
	$('#infoReportes_bot_informes .registro').removeClass("util_col_f_a1_cc3");
	$('#infoReportes_bot_informes .registro').addClass("util_col_desactivado");
	$("#infoReportes_bot_informes" ).removeClass("util_col_f_a1_cc3");
	$("#infoReportes_bot_informes h4").removeClass("util_textcolor_blanco");
	$("#infoReportes_bot_informes span").removeClass("util_textcolor_blanco");
	
	$('#infoReportes_bot_geolocalizacion').addClass("util_margen_iz40 util_cursor_puntero");
	$('#infoReportes_bot_geolocalizacion .registro').removeClass("util_col_f_a1_cc4");
	$('#infoReportes_bot_geolocalizacion .registro').addClass("util_col_desactivado");
	$("#infoReportes_bot_geolocalizacion" ).removeClass("util_col_f_a1_cc4");
	$("#infoReportes_bot_geolocalizacion h4").removeClass("util_textcolor_blanco");
	$("#infoReportes_bot_geolocalizacion span").removeClass("util_textcolor_blanco");


	$( "#tipo_listados" ).hide();
	$( "#tipo_numericos" ).hide();
	$( "#tipo_geolocalizacion" ).hide();
	$( "#tipo_informes" ).hide();
}


function Reportes_muestra_listados(){
	reporte_tipo = "listados";
	$("#infoReportes_bot_listados").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#infoReportes_bot_listados").addClass("util_col_f_a1_cc2");
	$("#infoReportes_bot_listados h4").addClass("util_textcolor_blanco");
	$("#infoReportes_bot_listados span").addClass("util_textcolor_blanco");
	$("#tipo_listados" ).show();
}

function Reportes_muestra_numericos(){
	reporte_tipo = "numericos";
	$("#infoReportes_bot_numericos").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#infoReportes_bot_numericos").addClass("util_col_f_a1_cc1");
	$("#infoReportes_bot_numericos h4").addClass("util_textcolor_blanco");
	$("#infoReportes_bot_numericos span").addClass("util_textcolor_blanco");
	$("#tipo_numericos" ).show();
}

function Reportes_muestra_informes(){
	reporte_tipo = "informes";
	$("#infoReportes_bot_informes").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#infoReportes_bot_informes").addClass("util_col_f_a1_cc3");
	$("#infoReportes_bot_informes h4").addClass("util_textcolor_blanco");
	$("#infoReportes_bot_informes span").addClass("util_textcolor_blanco");
	$("#tipo_informes" ).show();
}

function Reportes_muestra_geolocalizacion(){
	reporte_tipo = "geolocalizacion";
	$("#infoReportes_bot_geolocalizacion").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#infoReportes_bot_geolocalizacion").addClass("util_col_f_a1_cc4");
	$("#infoReportes_bot_geolocalizacion h4").addClass("util_textcolor_blanco");
	$("#infoReportes_bot_geolocalizacion span").addClass("util_textcolor_blanco");
	$("#tipo_geolocalizacion" ).show();
}



//	Seteos iniciales
	tipoReportes_desselecciona();
	Reportes_muestra_numericos();




//	.  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  

$(this).find('.CodificacionesBotonera').click(function()			{
	muestraCodificacionesTipos();
	escondeCodificacionesBotonera();
	mostrando = "codificacionesTipos";
});

function codificacionesReportes_desselecciona(){}

function muestraReportesSvih(){	$( "#info_svih" ).show(); }
function escondeReportesSvih(){	$( "#info_svih" ).hide(); }

function escondeCodificacionesTipos(){	$('.CodificacionesTipos').hide();}
function muestraCodificacionesTipos(){	$('.CodificacionesTipos').show();}
function escondeCodificacionesBotonera(){	$('.CodificacionesBotonera').hide();}
function muestraCodificacionesBotonera(){	$('.CodificacionesBotonera').show();}

//	.  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  

// botones VOLVER

//	CODIFICACIONES
$('#volver_reg').click(function()	{	
	if(mostrando == "default"){
		//alert(mostrando + " => default");
	}else if(mostrando == "registros"){
		//$("#botonera_registros").show();
		$( "#botonera_registros" ).css("display", "block");
		escondeReportesSvih();
		//alert(mostrando + " => volvemos al inicio");
	}else{
		//alert("otra cosa");
	}
});

$('#volver_cod').click(function()	{	
	if(mostrando == "default"){
		//alert(mostrando + " => default");
	}else if(mostrando == "codificaciones"){
		//alert(mostrando + " => volvemos al inicio");
		CdR_ConfiguracionDeInicio();
	}else if(mostrando == "codificacionesBotonera"){
		//alert(mostrando + " => volvemos al inicio");
	}else if(mostrando == "codificacionesTipos"){
		//alert(mostrando + " => volvemos a mostrar la botonera");
		escondeCodificacionesTipos();
		muestraCodificacionesBotonera();
		escondeReportesSvih();
		mostrando = "codificaciones";
	}else{
		//alert(mostrando + " => otra cosa");
	}
});




//	Seteos iniciales
//	Para que aparezcan por default cerradas
//	CdR_desselecciona();
	CdR_ConfiguracionDeInicio();
	CdR_svih_desselecciona();

//	Seteos iniciales
	codificacionesReportes_desselecciona();
	escondeCodificacionesTipos();




});