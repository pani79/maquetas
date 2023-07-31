// JavaScript Document






$(document).ready(function(){
// Cuando arranca el sript y esta todo listo... arranca el baile




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
$(this).find('#comunidadsisa').click(function() {
	$( "#comunidadsisa_info" ).toggle( 0, function() {});
	$( "#comunidadsisa h2" ).toggle( 0, function() {});
});


//	PopUps   ===================================================================================

// popup de inicio de sesion
$(this).find('#loguearse').click(function(e){
         e.preventDefault();
         window.location = "home_logon.html";    
});





//	Accesos frecuentes   ===================================================================================

// Este codigo maquiavelico es para cuando el nombre del registro es muy largo, 
// se toma una parte y se agregan los "..." al final

if(document.querySelector('#accesosfrecuentes_seccion')!=null){

var _accFrec_regDesc1 = document.querySelector('#accFrec_regDesc1').innerHTML;
//alert(_accFrec_regDesc1.length);
if(_accFrec_regDesc1.length > 50){
	var _accFrec_regDesc1_mod = _accFrec_regDesc1.substring(0, 50);
	_accFrec_regDesc1_mod += ' ...';
	document.querySelector('#accFrec_regDesc1').innerHTML = _accFrec_regDesc1_mod;
}
var _accFrec_regDesc2 = document.querySelector('#accFrec_regDesc2').innerHTML;
//alert(_accFrec_regDesc2.length);
if(_accFrec_regDesc2.length > 50){
	var _accFrec_regDesc2_mod = _accFrec_regDesc2.substring(0, 50);
	_accFrec_regDesc2_mod += ' ...';
	document.querySelector('#accFrec_regDesc2').innerHTML = _accFrec_regDesc2_mod;
}
var _accFrec_regDesc3 = document.querySelector('#accFrec_regDesc3').innerHTML;
//alert(_accFrec_regDesc3.length);
if(_accFrec_regDesc3.length > 50){
	var _accFrec_regDesc3_mod = _accFrec_regDesc3.substring(0, 50);
	_accFrec_regDesc3_mod += ' ...';
	document.querySelector('#accFrec_regDesc3').innerHTML = _accFrec_regDesc3_mod;
}
var _accFrec_regDesc4 = document.querySelector('#accFrec_regDesc4').innerHTML;
//alert(_accFrec_regDesc4.length);
if(_accFrec_regDesc4.length > 50){
	var _accFrec_regDesc4_mod = _accFrec_regDesc4.substring(0, 50);
	_accFrec_regDesc4_mod += ' ...';
	document.querySelector('#accFrec_regDesc4').innerHTML = _accFrec_regDesc4_mod;
}

}




//	Informacion colapsable   ===================================================================================


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

if(document.querySelector('.info_desplegable')!=null){

$(this).find(".info_desplegable .info_desplegable_boton").click(function(){
	$(this).parent().find(".info").toggle();
});

}
$(this).find('.info_desplegable .info').hide();





//	Listas   ===================================================================================

// Este codigo maquiavelico es para cuando el nombre del registro es muy largo, 
// se toma una parte y se agregan los "..." al final

if(document.querySelector('#lista_seccion')!=null){
//	alert("encontre la lista");


//	Esto hace que los botones de cerrar de los submenues cierren las secciones correspondientes,tambien añade un estilo al boton de la barra que lo selecciona o deselecciona
$(this).find('#lista_exportarreportes_bot_cerrar').click(function() {	$("#lista_exportarreportes").hide(); $("#lista_cabeza_btn_exportarlista").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_exportarreportes1_bot_cerrar').click(function() {	$("#lista_exportarreportes1").hide(); $("#lista_cabeza_btn_exportarlista1").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_referenciacolumnas_bot_cerrar').click(function() {	$("#lista_referenciacolumnas").hide(); $("#lista_cabeza_btn_referenciadecolumnas").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_referenciacolumnas1_bot_cerrar').click(function() {	$("#lista_referenciacolumnas1").hide(); $("#lista_cabeza_btn_referenciadecolumnas1").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_configuracioncolumnas_bot_cerrar').click(function() {	$("#lista_configuracioncolumnas").hide(); $("#lista_configuracioncolumnas_bot").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_configuracioncolumnas1_bot_cerrar').click(function() {	$("#lista_configuracioncolumnas1").hide(); $("#lista_configuracioncolumnas1_bot").toggleClass("util_borde_seleccion util_rec_br");});

//	Esto hace que los botones de la barra abran y cierren los submenues correspondientes,tambien añade un estilo al boton que lo selecciona o deselecciona
$(this).find('#lista_cabeza_btn_exportarlista').click(function() {			$( "#lista_exportarreportes" ).toggle( 0, function() {}); $("#lista_cabeza_btn_exportarlista").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_cabeza_btn_exportarlista1').click(function() {			$( "#lista_exportarreportes1" ).toggle( 0, function() {}); $("#lista_cabeza_btn_exportarlista1").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_cabeza_btn_referenciadecolumnas').click(function() {	$( "#lista_referenciacolumnas" ).toggle( 0, function() {}); $("#lista_cabeza_btn_referenciadecolumnas").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_cabeza_btn_referenciadecolumnas1').click(function() {	$( "#lista_referenciacolumnas1" ).toggle( 0, function() {}); $("#lista_cabeza_btn_referenciadecolumnas1").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_configuracioncolumnas_bot').click(function() {			$( "#lista_configuracioncolumnas" ).toggle( 0, function() {}); $("#lista_configuracioncolumnas_bot").toggleClass("util_borde_seleccion util_rec_br");});
$(this).find('#lista_configuracioncolumnas1_bot').click(function() {		$( "#lista_configuracioncolumnas1" ).toggle( 0, function() {}); $("#lista_configuracioncolumnas1_bot").toggleClass("util_borde_seleccion util_rec_br");});

//	Ampliar / reducir texto
$('#lista_fuentereducir_bot').click(function() {		reduceLista()	});
$('#lista_fuentereducir1_bot').click(function() {		reduceLista()	});
$('#lista_fuenteagrandar_bot').click(function() {		ampliaLista()	});
$('#lista_fuenteagrandar1_bot').click(function() {		ampliaLista()	});

var listaFuente = 14;

function reduceLista(){
	if(listaFuente >= 12){
		listaFuente -= 2;
//		alert("Reduce " +listaFuente );
		$("#la_lista").css("fontSize", listaFuente);
		chequeaEstadoBotonesLista();
	}
}

function ampliaLista(){
	if(listaFuente <= 16){
		listaFuente += 2;
//		alert("Agranda " +listaFuente);
		$("#la_lista").css("fontSize", listaFuente);
		chequeaEstadoBotonesLista();
	}
}

function chequeaEstadoBotonesLista(){
	if(listaFuente <= 10){
		$('#lista_fuentereducir_bot').addClass("bot_al_des");
		$('#lista_fuentereducir1_bot').addClass("bot_al_des");
	} else if(listaFuente >= 12){
		$('#lista_fuentereducir_bot').removeClass("bot_al_des");
		$('#lista_fuentereducir1_bot').removeClass("bot_al_des");
	}
	if(listaFuente >= 18){
		$('#lista_fuenteagrandar_bot').addClass("bot_al_des");
		$('#lista_fuenteagrandar1_bot').addClass("bot_al_des");
	}else if(listaFuente <= 16){
		$('#lista_fuenteagrandar_bot').removeClass("bot_al_des");
		$('#lista_fuenteagrandar1_bot').removeClass("bot_al_des");
	}
}


//	Seteos iniciales
//	Para que aparezcan por default cerradas
	$( "#lista_referenciacolumnas").hide();
	$( "#lista_exportarreportes").hide();
	$( "#lista_configuracioncolumnas").hide();
	$( "#lista_referenciacolumnas1").hide();
	$( "#lista_exportarreportes1").hide();
	$( "#lista_configuracioncolumnas1").hide();

}else{
//	alert("no hay lista en esta pagina");
}


//	Ficha del ciudadano   ======================================================================================================================================================================

if(document.querySelector('#fichaCiudadano')!=null){


//	Solapas e info general ------------------------------------------------------------------------------------------------------------------
var ficha_seccion = "ciudadano";

//	Botonera al hacer click
$(this).find('#contenidoFicha_botonera_ciudadano').click(function()			{
	fichaCiudadano_desseleccona();
	fichaCiudadano_muestra_ciudadano();
});
$(this).find('#contenidoFicha_botonera_nucleoFamiliar').click(function()		{
	fichaCiudadano_desseleccona();
	fichaCiudadano_muestra_NucleoFamiliar();
});
$(this).find('#contenidoFicha_botonera_prestaciones').click(function()	{
	fichaCiudadano_desseleccona();
	fichaCiudadano_muestra_prestaciones();
});
$(this).find('#contenidoFicha_botonera_documentos').click(function()	{
	fichaCiudadano_desseleccona();
	fichaCiudadano_muestra_documentos();
});

//	Botonera al hacer MouseOver y MouseOut
$(this).find('#contenidoFicha_botonera_ciudadano').mouseover(function()	{
	if(ficha_seccion != "ciudadano"){
		$('#contenidoFicha_botonera_ciudadano').addClass("util_col_f_a1_cc1");
		$('#contenidoFicha_botonera_ciudadano .registro').removeClass("util_col_desactivado");
		$('#contenidoFicha_botonera_ciudadano .registro').addClass("util_col_f_a1_cc1");
		$('#contenidoFicha_botonera_bot_ciudadano h3').addClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_ciudadano p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#contenidoFicha_botonera_nucleoFamiliar').mouseover(function()	{
	if(ficha_seccion != "NucleoFamiliar"){
		$('#contenidoFicha_botonera_nucleoFamiliar').addClass("util_col_f_a1_cc3");
		$('#contenidoFicha_botonera_nucleoFamiliar .registro').removeClass("util_col_desactivado");
		$('#contenidoFicha_botonera_nucleoFamiliar .registro').addClass("util_col_f_a1_cc3");
		$('#contenidoFicha_botonera_bot_nucleoFamiliar h3').addClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_nucleoFamiliar p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#contenidoFicha_botonera_prestaciones').mouseover(function()	{
	if(ficha_seccion != "prestaciones"){
		$('#contenidoFicha_botonera_prestaciones').addClass("util_col_f_a1_cc2");
		$('#contenidoFicha_botonera_prestaciones .registro').removeClass("util_col_desactivado");
		$('#contenidoFicha_botonera_prestaciones .registro').addClass("util_col_f_a1_cc2");
		$('#contenidoFicha_botonera_bot_prestaciones h3').addClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_prestaciones p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#contenidoFicha_botonera_documentos').mouseover(function()	{
	if(ficha_seccion != "documentos"){
		$('#contenidoFicha_botonera_documentos').addClass("util_col_f_a1_cc4");
		$('#contenidoFicha_botonera_documentos .registro').removeClass("util_col_desactivado");
		$('#contenidoFicha_botonera_documentos .registro').addClass("util_col_f_a1_cc4");
		$('#contenidoFicha_botonera_bot_documentos h3').addClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_documentos p').addClass("util_textcolor_blanco");
	}
});

$(this).find('#contenidoFicha_botonera_ciudadano').mouseout(function()	{
	if(ficha_seccion != "ciudadano"){
		$('#contenidoFicha_botonera_ciudadano').removeClass("util_col_f_a1_cc1");
		$('#contenidoFicha_botonera_ciudadano .registro').removeClass("util_col_f_a1_cc1");
		$('#contenidoFicha_botonera_ciudadano .registro').addClass("util_col_desactivado");
		$('#contenidoFicha_botonera_bot_ciudadano h3').removeClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_ciudadano p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#contenidoFicha_botonera_nucleoFamiliar').mouseout(function()	{
	if(ficha_seccion != "NucleoFamiliar"){
		$('#contenidoFicha_botonera_nucleoFamiliar').removeClass("util_col_f_a1_cc3");
		$('#contenidoFicha_botonera_nucleoFamiliar .registro').removeClass("util_col_f_a1_cc3");
		$('#contenidoFicha_botonera_nucleoFamiliar .registro').addClass("util_col_desactivado");
		$('#contenidoFicha_botonera_bot_nucleoFamiliar h3').removeClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_nucleoFamiliar p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#contenidoFicha_botonera_prestaciones').mouseout(function()	{
	if(ficha_seccion != "prestaciones"){
		$('#contenidoFicha_botonera_prestaciones').removeClass("util_col_f_a1_cc2");
		$('#contenidoFicha_botonera_prestaciones .registro').removeClass("util_col_f_a1_cc2");
		$('#contenidoFicha_botonera_prestaciones .registro').addClass("util_col_desactivado");
		$('#contenidoFicha_botonera_bot_prestaciones h3').removeClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_prestaciones p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#contenidoFicha_botonera_documentos').mouseout(function()	{
	if(ficha_seccion != "documentos"){
		$('#contenidoFicha_botonera_documentos').removeClass("util_col_f_a1_cc4");
		$('#contenidoFicha_botonera_documentos .registro').removeClass("util_col_f_a1_cc4");
		$('#contenidoFicha_botonera_documentos .registro').addClass("util_col_desactivado");
		$('#contenidoFicha_botonera_bot_documentos h3').removeClass("util_textcolor_blanco");
		$('#contenidoFicha_botonera_bot_documentos p').removeClass("util_textcolor_blanco");
	}
});

//	iconos de informacion
$(this).find('#fichaCiudadano_info_btn').click(function() {	$( "#fichaCiudadano_info" ).toggle( 0, function() {});		});
$(this).find('#fichaCiudadano_info_btn1').click(function() {	$( "#fichaCiudadano_info1" ).toggle( 0, function() {});		});


//	Esta funcion solo deselecciona los botones
function fichaCiudadano_desseleccona(){
	$('#contenidoFicha_botonera_ciudadano').addClass("util_margen_ar20 util_cursor_puntero");
	$('#contenidoFicha_botonera_ciudadano .registro').removeClass("util_col_f_a1_cc1");
	$('#contenidoFicha_botonera_ciudadano .registro').addClass("util_col_desactivado");
	$("#contenidoFicha_botonera_ciudadano" ).removeClass("util_col_f_a1_cc1");
	$("#contenidoFicha_botonera_bot_ciudadano h3").removeClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_ciudadano p").removeClass("util_textcolor_blanco");

	$('#contenidoFicha_botonera_nucleoFamiliar').addClass("util_margen_ar20 util_cursor_puntero");
	$('#contenidoFicha_botonera_nucleoFamiliar .registro').removeClass("util_col_f_a1_cc3");
	$('#contenidoFicha_botonera_nucleoFamiliar .registro').addClass("util_col_desactivado");
	$("#contenidoFicha_botonera_nucleoFamiliar" ).removeClass("util_col_f_a1_cc3");
	$("#contenidoFicha_botonera_bot_nucleoFamiliar h3").removeClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_nucleoFamiliar p").removeClass("util_textcolor_blanco");

	$('#contenidoFicha_botonera_prestaciones').addClass("util_margen_ar20 util_cursor_puntero");
	$('#contenidoFicha_botonera_prestaciones .registro').removeClass("util_col_f_a1_cc2");
	$('#contenidoFicha_botonera_prestaciones .registro').addClass("util_col_desactivado");
	$("#contenidoFicha_botonera_prestaciones" ).removeClass("util_col_f_a1_cc2");
	$("#contenidoFicha_botonera_bot_prestaciones h3").removeClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_prestaciones p").removeClass("util_textcolor_blanco");

	
	$('#contenidoFicha_botonera_documentos').addClass("util_margen_ar20 util_cursor_puntero");
	$('#contenidoFicha_botonera_documentos .registro').removeClass("util_col_f_a1_cc4");
	$('#contenidoFicha_botonera_documentos .registro').addClass("util_col_desactivado");
	$("#contenidoFicha_botonera_documentos" ).removeClass("util_col_f_a1_cc4");
	$("#contenidoFicha_botonera_bot_documentos h3").removeClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_documentos p").removeClass("util_textcolor_blanco");
	
	$( "#infoFicha_panel_Ciudadano" ).hide();
	$( "#infoFicha_panel_NucleoFamiliar" ).hide();
	$( "#infoFicha_panel_Prestaciones" ).hide();
	$( "#infoFicha_panel_Documentos" ).hide();
}

//	Estas funciones muestran lo que se selecciona
function fichaCiudadano_muestra_ciudadano(){
	ficha_seccion = "ciudadano";
	$("#contenidoFicha_botonera_ciudadano").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#contenidoFicha_botonera_ciudadano").addClass("util_col_f_a1_cc1");
	$("#contenidoFicha_botonera_ciudadano .registro").removeClass("util_col_desactivado");
	$("#contenidoFicha_botonera_ciudadano .registro").addClass("util_col_f_a1_cc1");
	$("#contenidoFicha_botonera_bot_ciudadano h3").addClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_ciudadano p").addClass("util_textcolor_blanco");
	$( "#infoFicha_panel_Ciudadano" ).show();
}

function fichaCiudadano_muestra_NucleoFamiliar(){
	ficha_seccion = "NucleoFamiliar";
	$("#contenidoFicha_botonera_nucleoFamiliar").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#contenidoFicha_botonera_nucleoFamiliar").addClass("util_col_f_a1_cc3");
	$("#contenidoFicha_botonera_nucleoFamiliar .registro").removeClass("util_col_desactivado");
	$("#contenidoFicha_botonera_nucleoFamiliar .registro").addClass("util_col_f_a1_cc3");
	$("#contenidoFicha_botonera_bot_nucleoFamiliar h3").addClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_nucleoFamiliar p").addClass("util_textcolor_blanco");
	$( "#infoFicha_panel_NucleoFamiliar" ).show();
}

function fichaCiudadano_muestra_prestaciones(){
	ficha_seccion = "prestaciones";
	$("#contenidoFicha_botonera_prestaciones").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#contenidoFicha_botonera_prestaciones").addClass("util_col_f_a1_cc2");
	$("#contenidoFicha_botonera_prestaciones .registro").removeClass("util_col_desactivado");
	$("#contenidoFicha_botonera_prestaciones .registro").addClass("util_col_f_a1_cc2");
	$("#contenidoFicha_botonera_bot_prestaciones h3").addClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_prestaciones p").addClass("util_textcolor_blanco");
	$( "#infoFicha_panel_Prestaciones" ).show();
}

function fichaCiudadano_muestra_documentos(){
	ficha_seccion = "documentos";
	$("#contenidoFicha_botonera_documentos").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#contenidoFicha_botonera_documentos").addClass("util_col_f_a1_cc4");
	$("#contenidoFicha_botonera_documentos .registro").removeClass("util_col_desactivado");
	$("#contenidoFicha_botonera_documentos .registro").addClass("util_col_f_a1_cc4");
	$("#contenidoFicha_botonera_bot_documentos h3").addClass("util_textcolor_blanco");
	$("#contenidoFicha_botonera_bot_documentos p").addClass("util_textcolor_blanco");
	$( "#infoFicha_panel_Documentos" ).show();
}


//	Solapa Ciudadano ------------------------------------------------------------------------------------------------------------------


var ficha_secciudadano_seccion = "";

$(this).find('#ficha_ciudadano_bot_datospers').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_datosPersonales();
});
$(this).find('#ficha_ciudadano_bot_datospers').mouseover(function()	{
	if(ficha_secciudadano_seccion != "datosPersonales"){
		$('#ficha_ciudadano_bot_datospers').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_datospers h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_datospers span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_datospers').mouseout(function()	{
	if(ficha_secciudadano_seccion != "datosPersonales"){
		$('#ficha_ciudadano_bot_datospers').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_datospers h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_datospers span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#ficha_ciudadano_bot_infocontacto').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_infoContacto();
});
$(this).find('#ficha_ciudadano_bot_infocontacto').mouseover(function()	{
	if(ficha_secciudadano_seccion != "infoContacto"){
		$('#ficha_ciudadano_bot_infocontacto').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_infocontacto h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_infocontacto span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_infocontacto').mouseout(function()	{
	if(ficha_secciudadano_seccion != "infoContacto"){
		$('#ficha_ciudadano_bot_infocontacto').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_infocontacto h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_infocontacto span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#ficha_ciudadano_bot_infovital').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_infovital();
});
$(this).find('#ficha_ciudadano_bot_infovital').mouseover(function()	{
	if(ficha_secciudadano_seccion != "infovital"){
		$('#ficha_ciudadano_bot_infovital').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_infovital h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_infovital span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_infovital').mouseout(function()	{
	if(ficha_secciudadano_seccion != "infovital"){
		$('#ficha_ciudadano_bot_infovital').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_infovital h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_infovital span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#ficha_ciudadano_bot_domicilio').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_domicilio();
});
$(this).find('#ficha_ciudadano_bot_domicilio').mouseover(function()	{
	if(ficha_secciudadano_seccion != "domicilio"){
		$('#ficha_ciudadano_bot_domicilio').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_domicilio h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_domicilio span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_domicilio').mouseout(function()	{
	if(ficha_secciudadano_seccion != "domicilio"){
		$('#ficha_ciudadano_bot_domicilio').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_domicilio h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_domicilio span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#ficha_ciudadano_bot_cobsocial').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_cobsocial();
});
$(this).find('#ficha_ciudadano_bot_cobsocial').mouseover(function()	{
	if(ficha_secciudadano_seccion != "cobsocial"){
		$('#ficha_ciudadano_bot_cobsocial').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_cobsocial h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_cobsocial span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_cobsocial').mouseout(function()	{
	if(ficha_secciudadano_seccion != "cobsocial"){
		$('#ficha_ciudadano_bot_cobsocial').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_cobsocial h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_cobsocial span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#ficha_ciudadano_bot_nivformacion').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_nivformacion();
});
$(this).find('#ficha_ciudadano_bot_nivformacion').mouseover(function()	{
	if(ficha_secciudadano_seccion != "nivformacion"){
		$('#ficha_ciudadano_bot_nivformacion').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_nivformacion h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_nivformacion span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_nivformacion').mouseout(function()	{
	if(ficha_secciudadano_seccion != "nivformacion"){
		$('#ficha_ciudadano_bot_nivformacion').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_nivformacion h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_nivformacion span').removeClass("util_textcolor_blanco");
	}
});

$(this).find('#ficha_ciudadano_bot_sitlaboral').click(function()			{
	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_sitlaboral();
});
$(this).find('#ficha_ciudadano_bot_sitlaboral').mouseover(function()	{
	if(ficha_secciudadano_seccion != "sitlaboral"){
		$('#ficha_ciudadano_bot_sitlaboral').addClass("mod_sisa");
		$('#ficha_ciudadano_bot_sitlaboral h4').addClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_sitlaboral span').addClass("util_textcolor_blanco");
	}
});
$(this).find('#ficha_ciudadano_bot_sitlaboral').mouseout(function()	{
	if(ficha_secciudadano_seccion != "sitlaboral"){
		$('#ficha_ciudadano_bot_sitlaboral').removeClass("mod_sisa");
		$('#ficha_ciudadano_bot_sitlaboral h4').removeClass("util_textcolor_blanco");
		$('#ficha_ciudadano_bot_sitlaboral span').removeClass("util_textcolor_blanco");
	}
});

function seccionCiudadano_desselecciona(){
	$('#ficha_ciudadano_bot_datospers').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_datospers .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_datospers .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_datospers" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_datospers h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_datospers span").removeClass("util_textcolor_blanco");

	$('#ficha_ciudadano_bot_infocontacto').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_infocontacto .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_infocontacto .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_infocontacto" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_infocontacto h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_infocontacto span").removeClass("util_textcolor_blanco");
	
	$('#ficha_ciudadano_bot_infovital').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_infovital .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_infovital .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_infovital" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_infovital h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_infovital span").removeClass("util_textcolor_blanco");
	
	$('#ficha_ciudadano_bot_domicilio').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_domicilio .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_domicilio .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_domicilio" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_domicilio h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_domicilio span").removeClass("util_textcolor_blanco");
	
	$('#ficha_ciudadano_bot_cobsocial').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_cobsocial .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_cobsocial .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_cobsocial" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_cobsocial h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_cobsocial span").removeClass("util_textcolor_blanco");
	
	$('#ficha_ciudadano_bot_nivformacion').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_nivformacion .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_nivformacion .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_nivformacion" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_nivformacion h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_nivformacion span").removeClass("util_textcolor_blanco");
	
	$('#ficha_ciudadano_bot_sitlaboral').addClass("util_margen_iz40 util_cursor_puntero");
	$('#ficha_ciudadano_bot_sitlaboral .registro').removeClass("mod_sisa");
	$('#ficha_ciudadano_bot_sitlaboral .registro').addClass("util_col_desactivado");
	$("#ficha_ciudadano_bot_sitlaboral" ).removeClass("mod_sisa");
	$("#ficha_ciudadano_bot_sitlaboral h4").removeClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_sitlaboral span").removeClass("util_textcolor_blanco");


	$( "#sec_ciudadano_datospersonales" ).hide();
	$( "#sec_ciudadano_contactopersonal" ).hide();
	$( "#sec_ciudadano_infovital" ).hide();
	$( "#sec_ciudadano_domicilio" ).hide();
	$( "#sec_ciudadano_cobsocial" ).hide();
	$( "#sec_ciudadano_nivformacion" ).hide();
	$( "#sec_ciudadano_sitlaboral" ).hide();
}


function fichaCiudadano_ciudadano_muestra_datosPersonales(){
	ficha_secciudadano_seccion = "datosPersonales";
	$("#ficha_ciudadano_bot_datospers").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_datospers").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_datospers h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_datospers span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_datospersonales" ).show();
}

function fichaCiudadano_ciudadano_muestra_infoContacto(){
	ficha_secciudadano_seccion = "infoContacto";
	$("#ficha_ciudadano_bot_infocontacto").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_infocontacto").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_infocontacto h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_infocontacto span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_contactopersonal" ).show();
}

function fichaCiudadano_ciudadano_muestra_infovital(){
	ficha_secciudadano_seccion = "infovital";
	$("#ficha_ciudadano_bot_infovital").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_infovital").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_infovital h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_infovital span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_infovital" ).show();
}

function fichaCiudadano_ciudadano_muestra_cobsocial(){
	ficha_secciudadano_seccion = "cobsocial";
	$("#ficha_ciudadano_bot_cobsocial").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_cobsocial").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_cobsocial h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_cobsocial span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_cobsocial" ).show();
}

function fichaCiudadano_ciudadano_muestra_domicilio(){
	ficha_secciudadano_seccion = "domicilio";
	$("#ficha_ciudadano_bot_domicilio").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_domicilio").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_domicilio h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_domicilio span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_domicilio" ).show();
}

function fichaCiudadano_ciudadano_muestra_nivformacion(){
	ficha_secciudadano_seccion = "nivformacion";
	$("#ficha_ciudadano_bot_nivformacion").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_nivformacion").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_nivformacion h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_nivformacion span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_nivformacion" ).show();
}

function fichaCiudadano_ciudadano_muestra_sitlaboral(){
	ficha_secciudadano_seccion = "sitlaboral";
	$("#ficha_ciudadano_bot_sitlaboral").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_ciudadano_bot_sitlaboral").addClass("mod_sisa");
	$("#ficha_ciudadano_bot_sitlaboral h4").addClass("util_textcolor_blanco");
	$("#ficha_ciudadano_bot_sitlaboral span").addClass("util_textcolor_blanco");
	$("#sec_ciudadano_sitlaboral" ).show();
}


//	Seteos iniciales
	fichaCiudadano_desseleccona();
	fichaCiudadano_muestra_ciudadano();

	seccionCiudadano_desselecciona();
	fichaCiudadano_ciudadano_muestra_datosPersonales();



//	Solapa Nucleo familiar ------------------------------------------------------------------------------------------------------------------


$(this).find('#nucleoFamiliar_agregar').click(function()			{
	$("#infoFicha_panel_NucleoFamiliar_editar" ).show();
	$("#infoFicha_panel_NucleoFamiliar_agregar" ).hide();
});
$(this).find('#nucleoFamiliar_cancelar').click(function()			{
	$("#infoFicha_panel_NucleoFamiliar_editar" ).hide();
	$("#infoFicha_panel_NucleoFamiliar_agregar" ).show();
});


//	Seteos iniciales
$("#infoFicha_panel_NucleoFamiliar_editar" ).hide();






//	Solapa Ciudadano ------------------------------------------------------------------------------------------------------------------


var ficha_secprestaciones_seccion = "default";

$(this).find('#ficha_prestaciones_bot_nomivac').click(function()			{
	fichaCiudadano_Prestaciones_muestra_nomivac();
});
$(this).find('#ficha_prestaciones_bot_nomivac').mouseover(function()	{
	if(ficha_secprestaciones_seccion != "nomivac"){
		$('#ficha_prestaciones_bot_nomivac').removeClass("util_margen_iz40 util_cursor_puntero");
	}
});
$(this).find('#ficha_prestaciones_bot_nomivac').mouseout(function()	{
	if(ficha_secprestaciones_seccion != "nomivac"){
		$('#ficha_prestaciones_bot_nomivac').addClass("util_margen_iz40 util_cursor_puntero");
	}
});

$(this).find('#ficha_prestaciones_bot_svih').click(function()			{
	fichaCiudadano_Prestaciones_muestra_svih();
});
$(this).find('#ficha_prestaciones_bot_svih').mouseover(function()	{
	if(ficha_secprestaciones_seccion != "svih"){
		$('#ficha_prestaciones_bot_svih').removeClass("util_margen_iz40 util_cursor_puntero");
	}
});
$(this).find('#ficha_prestaciones_bot_svih').mouseout(function()	{
	if(ficha_secprestaciones_seccion != "svih"){
		$('#ficha_prestaciones_bot_svih').addClass("util_margen_iz40 util_cursor_puntero");
	}
});

$(this).find('#ficha_prestaciones_bot_sivile').click(function()			{
	fichaCiudadano_Prestaciones_muestra_sivile();
});
$(this).find('#ficha_prestaciones_bot_sivile').mouseover(function()	{
	if(ficha_secprestaciones_seccion != "sivile"){
		$('#ficha_prestaciones_bot_sivile').removeClass("util_margen_iz40 util_cursor_puntero");
	}
});
$(this).find('#ficha_prestaciones_bot_sivile').mouseout(function()	{
	if(ficha_secprestaciones_seccion != "sivile"){
		$('#ficha_prestaciones_bot_sivile').addClass("util_margen_iz40 util_cursor_puntero");
	}
});

$(this).find('#ficha_prestaciones_bot_remediar').click(function()			{
	fichaCiudadano_Prestaciones_muestra_remediar();
});
$(this).find('#ficha_prestaciones_bot_remediar').mouseover(function()	{
	if(ficha_secprestaciones_seccion != "remediar"){
		$('#ficha_prestaciones_bot_remediar').removeClass("util_margen_iz40 util_cursor_puntero");
	}
});
$(this).find('#ficha_prestaciones_bot_remediar').mouseout(function()	{
	if(ficha_secprestaciones_seccion != "remediar"){
		$('#ficha_prestaciones_bot_remediar').addClass("util_margen_iz40 util_cursor_puntero");
	}
});


function seccionPrestaciones_desselecciona(){
	$('#ficha_prestaciones_bot_svih').addClass("util_margen_iz40 util_cursor_puntero");
	//$("#ficha_prestaciones_contenedor .marcador").removeClass("reg_svih");
	$('#ficha_prestaciones_bot_nomivac').addClass("util_margen_iz40 util_cursor_puntero");
	//$("#ficha_prestaciones_contenedor .marcador").removeClass("reg_nomivac");
	$('#ficha_prestaciones_bot_sivile').addClass("util_margen_iz40 util_cursor_puntero");
	//$("#ficha_prestaciones_contenedor .marcador").removeClass("reg_sivile");
	$('#ficha_prestaciones_bot_remediar').addClass("util_margen_iz40 util_cursor_puntero");

	$( "#sec_prestaciones_default" ).hide();
	$( "#sec_prestaciones_nomivac" ).hide();
	$( "#sec_prestaciones_svih" ).hide();
	$( "#sec_prestaciones_sivile" ).hide();
	$( "#sec_prestaciones_remediar" ).hide();
}





function fichaCiudadano_Prestaciones_muestra_default(){
	ficha_secprestaciones_seccion = "default";
	seccionPrestaciones_desselecciona();
	$("#sec_prestaciones_default" ).show();
}

function fichaCiudadano_Prestaciones_muestra_svih(){
	ficha_secprestaciones_seccion = "svih";
	seccionPrestaciones_desselecciona();
	$("#ficha_prestaciones_bot_svih").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_prestaciones_contenedor .marcador").addClass("reg_svih");
	$("#sec_prestaciones_svih" ).show();
}

function fichaCiudadano_Prestaciones_muestra_nomivac(){
	ficha_secprestaciones_seccion = "nomivac";
	seccionPrestaciones_desselecciona();
	$("#ficha_prestaciones_bot_nomivac").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_prestaciones_contenedor .marcador").addClass("reg_nomivac");
	$("#sec_prestaciones_nomivac" ).show();
}

function fichaCiudadano_Prestaciones_muestra_sivile(){
	ficha_secprestaciones_seccion = "sivile";
	seccionPrestaciones_desselecciona();
	$("#ficha_prestaciones_bot_sivile").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_prestaciones_contenedor .marcador").addClass("reg_sivile");
	$("#sec_prestaciones_sivile" ).show();
}

function fichaCiudadano_Prestaciones_muestra_remediar(){
	ficha_secprestaciones_seccion = "remediar";
	seccionPrestaciones_desselecciona();
	$("#ficha_prestaciones_bot_remediar").removeClass("util_margen_iz40 util_cursor_puntero");
	$("#ficha_prestaciones_contenedor .marcador").addClass("reg_remediar");
	$("#sec_prestaciones_remediar" ).show();
}


//	Seteos iniciales
	seccionPrestaciones_desselecciona();
	fichaCiudadano_Prestaciones_muestra_default();



//	alert("FICHA en esta pagina");
}else{
//	alert("no hay FICHA en esta pagina");

}







//	Central de reportes   ===================================================================================

if(document.querySelector('#CentralDeReportes')!=null){


var reportes_seccion_tipo = "default";

//	Botonera al hacer click
$('.registro').click(function()	{	$( "#info_svih" ).show(); $( "#botonera_registros" ).hide(); });

//	Boton volver
$('.icon-bot_ico_volver').click(function()	{ alert("FICHA en esta pagina"); $( "#info_svih" ).hide();});


//	Esta funcion solo deselecciona y oculta los elementos
function CdR_botoneraEsconde(){
	$( "#info_svih" ).hide();
	$( "#info_svih" ).hide();
}
function CdR_botoneraMuestra(){
	$("#botonera_registros").show();
	alert("no hay FICHA en esta pagina");
}
function CdR_configuracionEsconde(){	$( "#reportesConfiguracion" ).hide();}
function CdR_configuracionMuestra(){	$( "#info_svih" ).addClass("util_display_none"); $( "#reportesConfiguracion" ).show();}


$('#reportes_svih_l').click(function()	{	CdR_svih_desselecciona(); CdR_svih_seleccionaL();	});
$('#reportes_svih_l').mouseover(function()	{	
	if(reportes_seccion_tipo != "listados"){
		$('#reportes_svih_l > div').removeClass("util_col_desactivado");
		$('#reportes_svih_l > div').addClass("util_col_f_a1_cc2 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_l h4').addClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});
$('#reportes_svih_l').mouseout(function()	{		
	if(reportes_seccion_tipo != "listados"){
		$('#reportes_svih_l > div').addClass("util_col_desactivado");
		$('#reportes_svih_l > div').removeClass("util_col_f_a1_cc2 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_l h4').removeClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});

$('#reportes_svih_r').click(function()	{	CdR_svih_desselecciona(); CdR_svih_seleccionaR();	});
$('#reportes_svih_r').mouseover(function()	{	
	if(reportes_seccion_tipo != "numericos"){
		$('#reportes_svih_r > div').removeClass("util_col_desactivado");
		$('#reportes_svih_r > div').addClass("util_col_f_a1_cc1 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_r h4').addClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});
$('#reportes_svih_r').mouseout(function()	{		
	if(reportes_seccion_tipo != "numericos"){
		$('#reportes_svih_r > div').addClass("util_col_desactivado");
		$('#reportes_svih_r > div').removeClass("util_col_f_a1_cc1 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_r h4').removeClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});

$('#reportes_svih_g').click(function()	{	CdR_svih_desselecciona(); CdR_svih_seleccionaG();	});
$('#reportes_svih_g').mouseover(function()	{	
	if(reportes_seccion_tipo != "georeferenciacion"){
		$('#reportes_svih_g > div').removeClass("util_col_desactivado");
		$('#reportes_svih_g > div').addClass("util_col_f_a1_cc4 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_g h4').addClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});
$('#reportes_svih_g').mouseout(function()	{		
	if(reportes_seccion_tipo != "georeferenciacion"){
		$('#reportes_svih_g > div').addClass("util_col_desactivado");
		$('#reportes_svih_g > div').removeClass("util_col_f_a1_cc4 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_g h4').removeClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});

$('#reportes_svih_i').click(function()	{	CdR_svih_desselecciona(); CdR_svih_seleccionaI();	});
$('#reportes_svih_i').mouseover(function()	{	
	if(reportes_seccion_tipo != "informes"){
		$('#reportes_svih_i > div').removeClass("util_col_desactivado");
		$('#reportes_svih_i > div').addClass("util_col_f_a1_cc3 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_i h4').addClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});
$('#reportes_svih_i').mouseout(function()	{		
	if(reportes_seccion_tipo != "informes"){
		$('#reportes_svih_i > div').addClass("util_col_desactivado");
		$('#reportes_svih_i > div').removeClass("util_col_f_a1_cc3 util_efecto_sombra util_cursor_puntero");
		$('#reportes_svih_i h4').removeClass("util_textcolor_sisa2 util_cursor_puntero");
	}
});


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



//	Seteos iniciales
//	Para que aparezcan por default cerradas
//	CdR_desselecciona();
	CdR_botoneraEsconde();
	CdR_svih_desselecciona();
	CdR_configuracionEsconde();
}

//	Central de reportes   - config-----------------------------------------------------------------------------

if(document.querySelector('#CentralDeReportes')!=null){

$('#volver').click(function()	{	window.open('mod_reportes.html', '_self'); 	});


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

}

/*
===================================================================================

Padrón de ciudadanos   

*/

if(document.querySelector('#padrondeciudadanos')!=null){


//	Botonera al hacer click
$(this).find('#padron_botonera_busquedarapida').click(function()			{
	alert("p");
	padron_desseleccona();
	$( "#padron_busquedanormal" ).show();
});
$(this).find('#padron_botonera_busquedaavanzada').click(function()			{
	alert("p");	
	padron_desseleccona();
	$( "#padron_busquedaavanzada" ).show();
});
$(this).find('#padron_botonera_busquedalector').click(function()		{
	alert("p");		
	padron_desseleccona();
	$( "#padron_busquedalector" ).show();
});

//	Esta funcion solo deselecciona y oculta los elementos
function padron_desseleccona(){
	$("#padron_busquedanormal").hide();
	$("#padron_busquedaavanzada").hide();
	$("#padron_busquedalector").hide();
}

//	Seteos iniciales
//	Para que aparezcan por default cerradas
	padron_desseleccona();
	$("#padron_busquedanormal").show();
}



//	Agenda Sanitaria   ===================================================================================

if(document.querySelector('#agendaSanitaria')!=null){

var agenda_seccion = "establecimientos";


//	Botonera al hacer click
$(this).find('#agendaSanitaria_panel_refes').click(function()			{
	agendaSanitaria_desseleccona();
	agendaSanitaria_muestra_establecimientos();
});
$(this).find('#agendaSanitaria_panel_refeps').click(function()		{
	agendaSanitaria_desseleccona();
	agendaSanitaria_muestra_NucleoFamiliar();
});
$(this).find('#agendaSanitaria_panel_ministerios').click(function()	{
	agendaSanitaria_desseleccona();
	agendaSanitaria_muestra_ministerios();
});
$(this).find('#agendaSanitaria_panel_residencias').click(function()	{
	agendaSanitaria_desseleccona();
	agendaSanitaria_muestra_residencias();
});

//	Botonera al hacer MouseOver y MouseOut
$(this).find('#agendaSanitaria_panel_refes').mouseover(function()	{
	if(agenda_seccion != "establecimientos"){
		$('#agendaSanitaria_panel_refes').addClass("reg_refes");
		$('#agendaSanitaria_panel_refes .registro').removeClass("util_col_desactivado");
		$('#agendaSanitaria_panel_refes .registro').addClass("reg_refes");
		$('#agendaSanitaria_bot_refes h3').addClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_refes p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#agendaSanitaria_panel_refeps').mouseover(function()	{
	if(agenda_seccion != "NucleoFamiliar"){
		$('#agendaSanitaria_panel_refeps').addClass("reg_refeps");
		$('#agendaSanitaria_panel_refeps .registro').removeClass("util_col_desactivado");
		$('#agendaSanitaria_panel_refeps .registro').addClass("reg_refeps");
		$('#agendaSanitaria_bot_refeps h3').addClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_refeps p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#agendaSanitaria_panel_ministerios').mouseover(function()	{
	if(agenda_seccion != "ministerios"){
		$('#agendaSanitaria_panel_ministerios').addClass("mod_sisa");
		$('#agendaSanitaria_panel_ministerios .registro').removeClass("util_col_desactivado");
		$('#agendaSanitaria_panel_ministerios .registro').addClass("mod_sisa");
		$('#agendaSanitaria_bot_ministerios h3').addClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_ministerios p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#agendaSanitaria_panel_residencias').mouseover(function()	{
	if(agenda_seccion != "residencias"){
		$('#agendaSanitaria_panel_residencias').addClass("reg_residencias");
		$('#agendaSanitaria_panel_residencias .registro').removeClass("util_col_desactivado");
		$('#agendaSanitaria_panel_residencias .registro').addClass("reg_residencias");
		$('#agendaSanitaria_bot_residencias h3').addClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_residencias p').addClass("util_textcolor_blanco");
	}
});

$(this).find('#agendaSanitaria_panel_refes').mouseout(function()	{
	if(agenda_seccion != "establecimientos"){
		$('#agendaSanitaria_panel_refes').removeClass("reg_refes");
		$('#agendaSanitaria_panel_refes .registro').removeClass("reg_refes");
		$('#agendaSanitaria_panel_refes .registro').addClass("util_col_desactivado");
		$('#agendaSanitaria_bot_refes h3').removeClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_refes p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#agendaSanitaria_panel_refeps').mouseout(function()	{
	if(agenda_seccion != "NucleoFamiliar"){
		$('#agendaSanitaria_panel_refeps').removeClass("reg_refeps");
		$('#agendaSanitaria_panel_refeps .registro').removeClass("reg_refeps");
		$('#agendaSanitaria_panel_refeps .registro').addClass("util_col_desactivado");
		$('#agendaSanitaria_bot_refeps h3').removeClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_refeps p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#agendaSanitaria_panel_ministerios').mouseout(function()	{
	if(agenda_seccion != "ministerios"){
		$('#agendaSanitaria_panel_ministerios').removeClass("mod_sisa");
		$('#agendaSanitaria_panel_ministerios .registro').removeClass("mod_sisa");
		$('#agendaSanitaria_panel_ministerios .registro').addClass("util_col_desactivado");
		$('#agendaSanitaria_bot_ministerios h3').removeClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_ministerios p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#agendaSanitaria_panel_residencias').mouseout(function()	{
	if(agenda_seccion != "residencias"){
		$('#agendaSanitaria_panel_residencias').removeClass("reg_residencias");
		$('#agendaSanitaria_panel_residencias .registro').removeClass("reg_residencias");
		$('#agendaSanitaria_panel_residencias .registro').addClass("util_col_desactivado");
		$('#agendaSanitaria_bot_residencias h3').removeClass("util_textcolor_blanco");
		$('#agendaSanitaria_bot_residencias p').removeClass("util_textcolor_blanco");
	}
});

//	iconos de informacion
$(this).find('#agendaSanitaria_info_btn').click(function() {	$( "#agendaSanitaria_info" ).toggle( 0, function() {});		});
$(this).find('#agendaSanitaria_info_btn1').click(function() {	$( "#agendaSanitaria_info1" ).toggle( 0, function() {});		});

//	Esta funcion solo deselecciona los botones
function agendaSanitaria_desseleccona(){
	$('#agendaSanitaria_panel_refes').addClass("util_margen_ar20 util_cursor_puntero");
	$('#agendaSanitaria_panel_refes .registro').removeClass("reg_refes");
	$('#agendaSanitaria_panel_refes .registro').addClass("util_col_desactivado");
	$("#agendaSanitaria_panel_refes" ).removeClass("reg_refes");
	$("#agendaSanitaria_bot_refes h3").removeClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_refes p").removeClass("util_textcolor_blanco");

	$('#agendaSanitaria_panel_refeps').addClass("util_margen_ar20 util_cursor_puntero");
	$('#agendaSanitaria_panel_refeps .registro').removeClass("reg_refeps");
	$('#agendaSanitaria_panel_refeps .registro').addClass("util_col_desactivado");
	$("#agendaSanitaria_panel_refeps" ).removeClass("reg_refeps");
	$("#agendaSanitaria_bot_refeps h3").removeClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_refeps p").removeClass("util_textcolor_blanco");

	$('#agendaSanitaria_panel_ministerios').addClass("util_margen_ar20 util_cursor_puntero");
	$('#agendaSanitaria_panel_ministerios .registro').removeClass("mod_sisa");
	$('#agendaSanitaria_panel_ministerios .registro').addClass("util_col_desactivado");
	$("#agendaSanitaria_panel_ministerios" ).removeClass("mod_sisa");
	$("#agendaSanitaria_bot_ministerios h3").removeClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_ministerios p").removeClass("util_textcolor_blanco");

	
	$('#agendaSanitaria_panel_residencias').addClass("util_margen_ar20 util_cursor_puntero");
	$('#agendaSanitaria_panel_residencias .registro').removeClass("reg_residencias");
	$('#agendaSanitaria_panel_residencias .registro').addClass("util_col_desactivado");
	$("#agendaSanitaria_panel_residencias" ).removeClass("reg_residencias");
	$("#agendaSanitaria_bot_residencias h3").removeClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_residencias p").removeClass("util_textcolor_blanco");
	
	$( "#agendaSanitaria_busca_establecimiento" ).hide();
	$( "#agendaSanitaria_busca_profesional" ).hide();
	$( "#agendaSanitaria_busca_ministerio" ).hide();
	$( "#agendaSanitaria_busca_residencia" ).hide();
}

//	Estas funciones muestran lo que se selecciona
function agendaSanitaria_muestra_establecimientos(){
	agenda_seccion = "establecimientos";
	$("#agendaSanitaria_panel_refes").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#agendaSanitaria_panel_refes").addClass("reg_refes");
	$("#agendaSanitaria_panel_refes .registro").removeClass("util_col_desactivado");
	$("#agendaSanitaria_panel_refes .registro").addClass("reg_refes");
	$("#agendaSanitaria_bot_refes h3").addClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_refes p").addClass("util_textcolor_blanco");
	$( "#agendaSanitaria_busca_establecimiento" ).show();
}

function agendaSanitaria_muestra_NucleoFamiliar(){
	agenda_seccion = "NucleoFamiliar";
	$("#agendaSanitaria_panel_refeps").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#agendaSanitaria_panel_refeps").addClass("reg_refeps");
	$("#agendaSanitaria_panel_refeps .registro").removeClass("util_col_desactivado");
	$("#agendaSanitaria_panel_refeps .registro").addClass("reg_refeps");
	$("#agendaSanitaria_bot_refeps h3").addClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_refeps p").addClass("util_textcolor_blanco");
	$( "#agendaSanitaria_busca_profesional" ).show();
}

function agendaSanitaria_muestra_ministerios(){
	agenda_seccion = "ministerios";
	$("#agendaSanitaria_panel_ministerios").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#agendaSanitaria_panel_ministerios").addClass("mod_sisa");
	$("#agendaSanitaria_panel_ministerios .registro").removeClass("util_col_desactivado");
	$("#agendaSanitaria_panel_ministerios .registro").addClass("mod_sisa");
	$("#agendaSanitaria_bot_ministerios h3").addClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_ministerios p").addClass("util_textcolor_blanco");
	$( "#agendaSanitaria_busca_establecimiento" ).show();
}

function agendaSanitaria_muestra_residencias(){
	agenda_seccion = "residencias";
	$("#agendaSanitaria_panel_residencias").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#agendaSanitaria_panel_residencias").addClass("reg_residencias");
	$("#agendaSanitaria_panel_residencias .registro").removeClass("util_col_desactivado");
	$("#agendaSanitaria_panel_residencias .registro").addClass("reg_residencias");
	$("#agendaSanitaria_bot_residencias h3").addClass("util_textcolor_blanco");
	$("#agendaSanitaria_bot_residencias p").addClass("util_textcolor_blanco");
	$( "#agendaSanitaria_busca_residencias" ).show();
}

//	Seteos iniciales
	agendaSanitaria_desseleccona();
	agendaSanitaria_muestra_establecimientos();
	
//	alert("AGENDA en esta pagina");
}else{
//	alert("no hay AGENDA en esta pagina");

}








//	Capacitación SISA   ===================================================================================







if(document.querySelector('#capacitacionSisa')!=null){

var agenda_seccion = "cursosdisponibles";


//	Botonera al hacer click
$(this).find('#capacitacionSisa_panel_cursosdisponibles').click(function()			{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdisponibles();
});
$(this).find('#capacitacionSisa_panel_agendadecursos').click(function()		{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_agendadecursos();
});
$(this).find('#capacitacionSisa_panel_cursosdictados').click(function()	{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdictados();
});


//	Botonera al hacer MouseOver y MouseOut
$(this).find('#capacitacionSisa_panel_cursosdisponibles').mouseover(function()	{
	if(agenda_seccion != "cursosdisponibles"){
		$('#capacitacionSisa_panel_cursosdisponibles').addClass("mod_sisa");
		$('#capacitacionSisa_panel_cursosdisponibles .registro').removeClass("util_col_desactivado");
		$('#capacitacionSisa_panel_cursosdisponibles .registro').addClass("mod_sisa");
		$('#capacitacionSisa_bot_cursosdisponibles h3').addClass("util_textcolor_blanco");
		$('#capacitacionSisa_bot_cursosdisponibles p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#capacitacionSisa_panel_agendadecursos').mouseover(function()	{
	if(agenda_seccion != "agendadecursos"){
		$('#capacitacionSisa_panel_agendadecursos').addClass("mod_sisa");
		$('#capacitacionSisa_panel_agendadecursos .registro').removeClass("util_col_desactivado");
		$('#capacitacionSisa_panel_agendadecursos .registro').addClass("mod_sisa");
		$('#capacitacionSisa_bot_agendadecursos h3').addClass("util_textcolor_blanco");
		$('#capacitacionSisa_bot_agendadecursos p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#capacitacionSisa_panel_cursosdictados').mouseover(function()	{
	if(agenda_seccion != "cursosdictados"){
		$('#capacitacionSisa_panel_cursosdictados').addClass("mod_sisa");
		$('#capacitacionSisa_panel_cursosdictados .registro').removeClass("util_col_desactivado");
		$('#capacitacionSisa_panel_cursosdictados .registro').addClass("mod_sisa");
		$('#capacitacionSisa_bot_cursosdictados h3').addClass("util_textcolor_blanco");
		$('#capacitacionSisa_bot_cursosdictados p').addClass("util_textcolor_blanco");
	}
});

$(this).find('#capacitacionSisa_panel_cursosdisponibles').mouseout(function()	{
	if(agenda_seccion != "cursosdisponibles"){
		$('#capacitacionSisa_panel_cursosdisponibles').removeClass("mod_sisa");
		$('#capacitacionSisa_panel_cursosdisponibles .registro').removeClass("mod_sisa");
		$('#capacitacionSisa_panel_cursosdisponibles .registro').addClass("util_col_desactivado");
		$('#capacitacionSisa_bot_cursosdisponibles h3').removeClass("util_textcolor_blanco");
		$('#capacitacionSisa_bot_cursosdisponibles p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#capacitacionSisa_panel_agendadecursos').mouseout(function()	{
	if(agenda_seccion != "agendadecursos"){
		$('#capacitacionSisa_panel_agendadecursos').removeClass("mod_sisa");
		$('#capacitacionSisa_panel_agendadecursos .registro').removeClass("mod_sisa");
		$('#capacitacionSisa_panel_agendadecursos .registro').addClass("util_col_desactivado");
		$('#capacitacionSisa_bot_agendadecursos h3').removeClass("util_textcolor_blanco");
		$('#capacitacionSisa_bot_agendadecursos p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#capacitacionSisa_panel_cursosdictados').mouseout(function()	{
	if(agenda_seccion != "cursosdictados"){
		$('#capacitacionSisa_panel_cursosdictados').removeClass("mod_sisa");
		$('#capacitacionSisa_panel_cursosdictados .registro').removeClass("mod_sisa");
		$('#capacitacionSisa_panel_cursosdictados .registro').addClass("util_col_desactivado");
		$('#capacitacionSisa_bot_cursosdictados h3').removeClass("util_textcolor_blanco");
		$('#capacitacionSisa_bot_cursosdictados p').removeClass("util_textcolor_blanco");
	}
});


//	Esta funcion solo deselecciona los botones
function capacitacionSisa_desseleccona(){
	$('#capacitacionSisa_panel_cursosdisponibles').addClass("util_margen_ar20 util_cursor_puntero");
	$('#capacitacionSisa_panel_cursosdisponibles .registro').removeClass("mod_sisa");
	$('#capacitacionSisa_panel_cursosdisponibles .registro').addClass("util_col_desactivado");
	$("#capacitacionSisa_panel_cursosdisponibles" ).removeClass("mod_sisa");
	$("#capacitacionSisa_bot_cursosdisponibles h3").removeClass("util_textcolor_blanco");
	$("#capacitacionSisa_bot_cursosdisponibles p").removeClass("util_textcolor_blanco");

	$('#capacitacionSisa_panel_agendadecursos').addClass("util_margen_ar20 util_cursor_puntero");
	$('#capacitacionSisa_panel_agendadecursos .registro').removeClass("mod_sisa");
	$('#capacitacionSisa_panel_agendadecursos .registro').addClass("util_col_desactivado");
	$("#capacitacionSisa_panel_agendadecursos" ).removeClass("mod_sisa");
	$("#capacitacionSisa_bot_agendadecursos h3").removeClass("util_textcolor_blanco");
	$("#capacitacionSisa_bot_agendadecursos p").removeClass("util_textcolor_blanco");

	$('#capacitacionSisa_panel_cursosdictados').addClass("util_margen_ar20 util_cursor_puntero");
	$('#capacitacionSisa_panel_cursosdictados .registro').removeClass("mod_sisa");
	$('#capacitacionSisa_panel_cursosdictados .registro').addClass("util_col_desactivado");
	$("#capacitacionSisa_panel_cursosdictados" ).removeClass("mod_sisa");
	$("#capacitacionSisa_bot_cursosdictados h3").removeClass("util_textcolor_blanco");
	$("#capacitacionSisa_bot_cursosdictados p").removeClass("util_textcolor_blanco");

	$( "#capacitacionSisa_cursosdisponibles" ).hide();
	$( "#capacitacionSisa_agendadecursos" ).hide();
	$( "#capacitacionSisa_cursosdictados" ).hide();
}

//	Estas funciones muestran lo que se selecciona
function capacitacionSisa_muestra_cursosdisponibles(){
	agenda_seccion = "cursosdisponibles";
	$("#capacitacionSisa_panel_cursosdisponibles").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#capacitacionSisa_panel_cursosdisponibles").addClass("mod_sisa");
	$("#capacitacionSisa_panel_cursosdisponibles .registro").removeClass("util_col_desactivado");
	$("#capacitacionSisa_panel_cursosdisponibles .registro").addClass("mod_sisa");
	$("#capacitacionSisa_bot_cursosdisponibles h3").addClass("util_textcolor_blanco");
	$("#capacitacionSisa_bot_cursosdisponibles p").addClass("util_textcolor_blanco");
	$( "#capacitacionSisa_cursosdisponibles" ).show();
}

function capacitacionSisa_muestra_agendadecursos(){
	agenda_seccion = "agendadecursos";
	$("#capacitacionSisa_panel_agendadecursos").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#capacitacionSisa_panel_agendadecursos").addClass("mod_sisa");
	$("#capacitacionSisa_panel_agendadecursos .registro").removeClass("util_col_desactivado");
	$("#capacitacionSisa_panel_agendadecursos .registro").addClass("mod_sisa");
	$("#capacitacionSisa_bot_agendadecursos h3").addClass("util_textcolor_blanco");
	$("#capacitacionSisa_bot_agendadecursos p").addClass("util_textcolor_blanco");
	$( "#capacitacionSisa_agendadecursos" ).show();
}

function capacitacionSisa_muestra_cursosdictados(){
	agenda_seccion = "cursosdictados";
	$("#capacitacionSisa_panel_cursosdictados").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#capacitacionSisa_panel_cursosdictados").addClass("mod_sisa");
	$("#capacitacionSisa_panel_cursosdictados .registro").removeClass("util_col_desactivado");
	$("#capacitacionSisa_panel_cursosdictados .registro").addClass("mod_sisa");
	$("#capacitacionSisa_bot_cursosdictados h3").addClass("util_textcolor_blanco");
	$("#capacitacionSisa_bot_cursosdictados p").addClass("util_textcolor_blanco");
	$( "#capacitacionSisa_cursosdictados" ).show();
}


//	Seteos iniciales
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdisponibles();
	
//	alert("AGENDA en esta pagina");
}else{
//	alert("no hay AGENDA en esta pagina");

}






//	Servicios Web   ===================================================================================

if(document.querySelector('#web_services')!=null){


//	Botonera al hacer click

var serviciosweb_seccion = "default";


//	Botonera al hacer click
$('#a_refes').click(function()			{
	ws_desselecciona();
	$("#i_a_refes").show();
});
$('#a_refes').mouseover(function()	{
	if(serviciosweb_seccion != "a_refes"){
		$('#a_refes').removeClass("util_col_desactivado");
		$('#a_refes span').removeClass("reg_refes_t");
		$('#a_refes').addClass("reg_refes util_efecto_sombra");
		$('#a_refes span').addClass("util_textcolor_blanco");
	}
});
$('#a_refes').mouseout(function()	{
	if(serviciosweb_seccion != "a_refes"){
		$('#a_refes').removeClass("reg_refes util_efecto_sombra");
		$('#a_refes span').removeClass("util_textcolor_blanco");
		$('#a_refes').addClass("util_col_desactivado");
		$('#a_refes span').addClass("reg_refes_t");
	}
});


$('#a_refeps').click(function()			{
	ws_desselecciona();
	$("#i_a_refeps").show();
});
$('#a_refeps').mouseover(function()	{
	if(serviciosweb_seccion != "a_refeps"){
		$('#a_refeps').removeClass("util_col_desactivado");
		$('#a_refeps span').removeClass("reg_refeps_t");
		$('#a_refeps').addClass("reg_refeps util_efecto_sombra");
		$('#a_refeps span').addClass("util_textcolor_blanco");
	}
});
$('#a_refeps').mouseout(function()	{
	if(serviciosweb_seccion != "a_refeps"){
		$('#a_refeps').removeClass("reg_refeps util_efecto_sombra");
		$('#a_refeps span').removeClass("util_textcolor_blanco");
		$('#a_refeps').addClass("util_col_desactivado");
		$('#a_refeps span').addClass("reg_refeps_t");
	}
});


$('#a_ministerios').click(function()			{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdisponibles();
});
$('#a_ministerios').mouseover(function()	{
	if(serviciosweb_seccion != "a_ministerios"){
		$('#a_ministerios').removeClass("util_col_desactivado");
		$('#a_ministerios span').removeClass("util_textcolor_sisa2");
		$('#a_ministerios').addClass("mod_sisa util_efecto_sombra");
		$('#a_ministerios span').addClass("util_textcolor_blanco");
	}
});
$('#a_ministerios').mouseout(function()	{
	if(serviciosweb_seccion != "a_ministerios"){
		$('#a_ministerios').removeClass("mod_sisa util_efecto_sombra");
		$('#a_ministerios span').removeClass("util_textcolor_blanco");
		$('#a_ministerios').addClass("util_col_desactivado");
		$('#a_ministerios span').addClass("util_textcolor_sisa2");
	}
});


$('#a_formadoras').click(function()			{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdisponibles();
});
$('#a_formadoras').mouseover(function()	{
	if(serviciosweb_seccion != "a_formadoras"){
		$('#a_formadoras').removeClass("util_col_desactivado");
		$('#a_formadoras span').removeClass("reg_refeps_t");
		$('#a_formadoras').addClass("reg_refeps util_efecto_sombra");
		$('#a_formadoras span').addClass("util_textcolor_blanco");
	}
});
$('#a_formadoras').mouseout(function()	{
	if(serviciosweb_seccion != "a_formadoras"){
		$('#a_formadoras').removeClass("reg_refeps util_efecto_sombra");
		$('#a_formadoras span').removeClass("util_textcolor_blanco");
		$('#a_formadoras').addClass("util_col_desactivado");
		$('#a_formadoras span').addClass("reg_refeps_t");
	}
});


$('#a_refar').click(function()			{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdisponibles();
});
$('#a_refar').mouseover(function()	{
	if(serviciosweb_seccion != "a_refar"){
		$('#a_refar').removeClass("util_col_desactivado");
		$('#a_refar span').removeClass("reg_refes_t");
		$('#a_refar').addClass("reg_refes util_efecto_sombra");
		$('#a_refar span').addClass("util_textcolor_blanco");
	}
});
$('#a_refar').mouseout(function()	{
	if(serviciosweb_seccion != "a_refar"){
		$('#a_refar').removeClass("reg_refes util_efecto_sombra");
		$('#a_refar span').removeClass("util_textcolor_blanco");
		$('#a_refar').addClass("util_col_desactivado");
		$('#a_refar span').addClass("reg_refes_t");
	}
});


$('#a_redro').click(function()			{
	capacitacionSisa_desseleccona();
	capacitacionSisa_muestra_cursosdisponibles();
});
$('#a_redro').mouseover(function()	{
	if(serviciosweb_seccion != "a_redro"){
		$('#a_redro').removeClass("util_col_desactivado");
		$('#a_redro span').removeClass("reg_refes_t");
		$('#a_redro').addClass("reg_refes util_efecto_sombra");
		$('#a_redro span').addClass("util_textcolor_blanco");
	}
});
$('#a_redro').mouseout(function()	{
	if(serviciosweb_seccion != "a_redro"){
		$('#a_redro').removeClass("reg_refes util_efecto_sombra");
		$('#a_redro span').removeClass("util_textcolor_blanco");
		$('#a_redro').addClass("util_col_desactivado");
		$('#a_redro span').addClass("reg_refes_t");
	}
});



//	Esta funcion solo deselecciona y oculta los elementos
function ws_desselecciona(){
	$(this).find("#i_a_refes").hide();
	$(this).find("#i_a_refes").hide();
	alert("ws_desselecciona");
}

//	Seteos iniciales
//	Para que aparezcan por default cerradas
	ws_desselecciona();
}






//	Soporte Técnico   ===================================================================================

if(document.querySelector('#soporteTecnico')!=null){

var soporte_seccion = "opciones";

//	Botonera al hacer click
$(this).find('#soporteTecnico_panel_opciones').click(function()			{
	soporteTecnico_desseleccona();
	soporteTecnico_muestra_opciones();
});
$(this).find('#soporteTecnico_panel_nivelesServicio').click(function()		{
	soporteTecnico_desseleccona();
	soporteTecnico_muestra_nivelesServicio();
});
$(this).find('#soporteTecnico_panel_preguntas').click(function()	{
	soporteTecnico_desseleccona();
	soporteTecnico_muestra_preguntas();
});

//	Botonera al hacer MouseOver y MouseOut
$(this).find('#soporteTecnico_panel_opciones').mouseover(function()	{
	if(soporte_seccion != "opciones"){
		$('#soporteTecnico_panel_opciones').addClass("util_col_f_a1_cc3");
		$('#soporteTecnico_bot_opciones h3').addClass("util_textcolor_blanco");
		$('#soporteTecnico_bot_opciones p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#soporteTecnico_panel_nivelesServicio').mouseover(function()	{
	if(soporte_seccion != "nivelesServicio"){
		$('#soporteTecnico_panel_nivelesServicio').addClass("util_col_f_a1_cc2");
		$('#soporteTecnico_bot_nivelesServicio h3').addClass("util_textcolor_blanco");
		$('#soporteTecnico_bot_nivelesServicio p').addClass("util_textcolor_blanco");
	}
});
$(this).find('#soporteTecnico_panel_preguntas').mouseover(function()	{
	if(soporte_seccion != "preguntas"){
		$('#soporteTecnico_panel_preguntas').addClass("util_col_f_a1_cc1");
		$('#soporteTecnico_bot_preguntas h3').addClass("util_textcolor_blanco");
		$('#soporteTecnico_bot_preguntas p').addClass("util_textcolor_blanco");
	}
});

$(this).find('#soporteTecnico_panel_opciones').mouseout(function()	{
	if(soporte_seccion != "opciones"){
		$('#soporteTecnico_panel_opciones').removeClass("util_col_f_a1_cc3");
		$('#soporteTecnico_bot_opciones h3').removeClass("util_textcolor_blanco");
		$('#soporteTecnico_bot_opciones p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#soporteTecnico_panel_nivelesServicio').mouseout(function()	{
	if(soporte_seccion != "nivelesServicio"){
		$('#soporteTecnico_panel_nivelesServicio').removeClass("util_col_f_a1_cc2");
		$('#soporteTecnico_bot_nivelesServicio h3').removeClass("util_textcolor_blanco");
		$('#soporteTecnico_bot_nivelesServicio p').removeClass("util_textcolor_blanco");
	}
});
$(this).find('#soporteTecnico_panel_preguntas').mouseout(function()	{
	if(soporte_seccion != "preguntas"){
		$('#soporteTecnico_panel_preguntas').removeClass("util_col_f_a1_cc1");
		$('#soporteTecnico_bot_preguntas h3').removeClass("util_textcolor_blanco");
		$('#soporteTecnico_bot_preguntas p').removeClass("util_textcolor_blanco");
	}
});


//	iconos de informacion
$(this).find('#soporteTecnico_info_btn').click(function() {	$( "#soporteTecnico_info" ).toggle( 0, function() {});		});
$(this).find('#soporteTecnico_info_btn1').click(function() {	$( "#soporteTecnico_info1" ).toggle( 0, function() {});		});

//	Esta funcion solo deselecciona los botones
function soporteTecnico_desseleccona(){
	$('#soporteTecnico_panel_opciones').addClass("util_margen_ar20 util_cursor_puntero");
	$("#soporteTecnico_panel_opciones" ).removeClass("util_col_f_a1_cc3");
	$("#soporteTecnico_bot_opciones h3").removeClass("util_textcolor_blanco");
	$("#soporteTecnico_bot_opciones p").removeClass("util_textcolor_blanco");

	$('#soporteTecnico_panel_nivelesServicio').addClass("util_margen_ar20 util_cursor_puntero");
	$("#soporteTecnico_panel_nivelesServicio" ).removeClass("util_col_f_a1_cc2");
	$("#soporteTecnico_bot_nivelesServicio h3").removeClass("util_textcolor_blanco");
	$("#soporteTecnico_bot_nivelesServicio p").removeClass("util_textcolor_blanco");

	$('#soporteTecnico_panel_preguntas').addClass("util_margen_ar20 util_cursor_puntero");
	$("#soporteTecnico_panel_preguntas" ).removeClass("util_col_f_a1_cc1");
	$("#soporteTecnico_bot_preguntas h3").removeClass("util_textcolor_blanco");
	$("#soporteTecnico_bot_preguntas p").removeClass("util_textcolor_blanco");

	
	$( "#soporteTecnico_opciones" ).hide();
	$( "#soporteTecnico_nivelesServicio" ).hide();
	$( "#soporteTecnico_preguntas" ).hide();
}


//	Estas funciones muestran lo que se selecciona
function soporteTecnico_muestra_opciones(){
	soporte_seccion = "opciones";
	$("#soporteTecnico_panel_opciones").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#soporteTecnico_panel_opciones").addClass("util_col_f_a1_cc3");
	$("#soporteTecnico_bot_opciones h3").addClass("util_textcolor_blanco");
	$("#soporteTecnico_bot_opciones p").addClass("util_textcolor_blanco");
	$( "#soporteTecnico_opciones" ).show();
}

function soporteTecnico_muestra_nivelesServicio(){
	soporte_seccion = "nivelesServicio";
	$("#soporteTecnico_panel_nivelesServicio").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#soporteTecnico_panel_nivelesServicio").addClass("util_col_f_a1_cc2");
	$("#soporteTecnico_bot_nivelesServicio h3").addClass("util_textcolor_blanco");
	$("#soporteTecnico_bot_nivelesServicio p").addClass("util_textcolor_blanco");
	$( "#soporteTecnico_nivelesServicio" ).show();
}

function soporteTecnico_muestra_preguntas(){
	soporte_seccion = "preguntas";
	$("#soporteTecnico_panel_preguntas").removeClass("util_margen_ar20 util_cursor_puntero");
	$("#soporteTecnico_panel_preguntas").addClass("util_col_f_a1_cc1");
	$("#soporteTecnico_bot_preguntas h3").addClass("util_textcolor_blanco");
	$("#soporteTecnico_bot_preguntas p").addClass("util_textcolor_blanco");
	$( "#soporteTecnico_preguntas" ).show();
}

//	Seteos iniciales
	soporteTecnico_desseleccona();
	soporteTecnico_muestra_preguntas();
	
//	alert("AGENDA en esta pagina");
}else{
//	alert("no hay AGENDA en esta pagina");

}





//	Seteos iniciales generales   ===================================================================================


//	esto oculata los paneles cuando carga la pagina.

//	Accesos frecuentes
	$( "#accesosfrecuentes_info").hide();
	$( "#accesosfrecuentes h2").hide();

	$( "#_bld_accfrec_panel_1 .panel-body").hide();
	$( "#_bld_accfrec_panel_2 .panel-body").hide();
	$( "#_bld_accfrec_panel_3 .panel-body").hide();
	$( "#_bld_accfrec_panel_4 .panel-body").hide();

//	Comunidad SISA
	$( "#comunidadsisa_info").hide();
	$( "#comunidadsisa h2").hide();
	
	







});

//                                       
//                                                                                                                                      
//                                                                                                                                      
//                                                                                                                                      
//                                                                                                                                      
//                                                                                                                                      
//                                                                                                                                      
//                                                                                                                                 `.   
//                                                                                                                               .::`   
//                                                                                                                             .;;      
//                                                                                                                          `,',        
//                                                                                                                       ..:+:          
//                                                                                                  ,  ;              `.,'':            
//                                                                                                 :;`;              .;'.`              
//                                                                                                ';;:'          `.,;+.                 
//                                                                                             ..:;',;:::`    `..,;+,                   
//                                                                                           ;;:,,'';+:,,::.`.,;+,                      
//                                                                                         :;,::,,:'+':::,,;,;;,                        
//                                                                                       .';:,,,,,,:+;::;:,:'.                          
//                                                                                     `';;;,,,,,,,:;'::;':,::                          
//                                                                                   `:';,::,,,,,,';:';;;.,,:,`                         
//                                                                                 :;;';:,::::,,,:';;;';;+''::                          
//                                                                                `,+;'::,:::,,,,::,;'''+##;;;                          
//                                                                              `..';;;::,:::,,.,::,::;;;';:';`                         
//                                                                             ` :;+;:;:,,,,,,,.,:;,,,,:::::;;`                         
//                                                                           ` `';'';:::,,,,,,.,,::::,,::;,,:;`                         
//                                                                             '+'';:;::,,,,,,.,,::::,,,,::,:::                         
//                                                                           .;+'''::;,,,,,,,.,,,:';:,,,,,:,,,,.                        
//                                                                          .''+'';::;,,.,,,,.,,:;+'::,,,,,,:,:;`                       
//                                                                         :''+''';:::,,.,,,,..,:'+':::,,:'::;:';                       
//                                                                      `,';'++''';:::,,.,,,,.,:',+'';::;':,:;'+':                      
//                                                                  `.``'';''+''';:,::,,.,:;.,:''  `:'++''+:::++++                      
//                                                                  `  ;';'''+''';:,::,:.,;;.,:#       ,+'';+++#+#                      
//                                   `..,,..`                       .':+';'';'''';,,:,,:.:',.,''         `+#+'+##'                      
//                                `,:;::::;;;';:`                 `+';++';'';''';;,,:,.:,:;.,:#            ++++##:                      
//                               .::::::::::::'''';,`           .+'++'''';+';''';:,,:,,:,;`.:+#            .###+'                       
//                            `,::::,,,,,,,..,;;';;;;'';,````.:'''++'+''';+';;;;;:.,:,,;:;.:;#:                                         
//                          `:::::,,,,,,,,,...,;';:;;;::;;;;;;''';;;'';;;;+;:;;;:,.,,,,;;,,:+#.                                         
//                     ,::;:,:::,,,.......,.,,,;;::;;;;;::;;;;;;;;;''';;;;';,:;;:,.,:,:';,,'#+                                          
//                   ,,,,::.,:,,,.`.........::,;;,,:::;;;;:::::;'';'';;;;;;:,:;:,,..',;',,;#+:                                          
//                 `:,,,:;',,,,,.``..,,,....:;:;;,.:::;:::::::;;;;'';:;;;;;:,:;:,,,.':'',,+#+.                                          
//                `:,,.:;::,,:,.....,,,,...,:;:;:.:;;;:::::::::::;';;:;;;;::,:;:,,,.';':,:##'                                           
//                ::..,;:`,,::.....,,,,,..,:;;:;,,::;:::,,,::,,:;';::::;;;:,,:::,,,.;;',,'#++                                           
//               .:,.,:'...,:,.....,,,,...,;;;::.::::::,,,,,,,:;;;::::::;;:,,:;:,,,:;';,:+#+;                                           
//               ,,.`:;'`:.,:,,...,,,,,..,:;;;:,,::::,,,,,,,,,:;:::::,:;;;:,,:;,,,,:;;,:;+#+.                                           
//               ,,``;;' ,.,::,...,,,,,.,:;;;;:,::::,,,,,,..,,:;::::;:,;:;,::;:,:,::;:::'+++                                            
//               :...;;'..,:;:,,..,,,,,.,:;;;;:,:::,,,,,,,.,,,::;::;;::::::::':,:,:;',:;+#+'                                            
//              .,...;'::.,:;;,,.,,,::,.,;;;';:,::,,,,.....,,:::::::;:;,::;,:;:,:,:;::;''++,                                            
//              .,..,;':;,,:;;:,.,,:::,,,;:;';,,:,,,,......,,::::;:::;;:::;,,::,,,;:;;;';++                                             
//              ,,..,;;,;,,:';:,.,,:::,,,:;'';,,:,.,,....,,,,::;;;;:::;:::;,,,,,,;;;;;;'++;                                             
//              :.,`,:;`;,,:';:,.,,:::,,,:;'';,,:,.,,...,,::::::;;;;;::::::::,:,:;;;;;;;++,                                             
//             .:,:`,:;.;:,;'';,.,::;:,.::;'':,,:,.,,..,,:::::::;;;;;;::::,:;:::;';;:;;+#+:                                             
//             ::,:.:;':::,:'';:,,:;::,,:;''':,,,,,,,,,,,:::::;;;;;;;;;::::''':,;;':;:'#+';                                             
//             :::;,;;';,;:;'';::::;::,,:;''';;:,::,,,,,,:::::::;;;;;;;;:::'++;,::+:;++++':                                             
//             ;:,;:;;+'`'::''';;;;;::,,:;'''';::;;:::::,,:::;;;;;;;;;;;;::'+';;:+,,##+++'`                                             
//             ;,,::';+' ;;;''';;;;;:,,,;'''';;;''+';::::,::::::::;;;;;;;::'+';;';++++'''+                                              
//             ;:,,:';+' .';;''''';;:,,:;'+''+#####+';::::::::::;;;;;;;;;:;'+';;::::;;'';:                                              
//             :::,:+;';  '';''''';;::,:'+''########+';;;;::::;;;;;;;;;;;;;'+';;::::;:;;+                                               
//             ,::,:+;;,  :';''''';;:::;'++#''+###++++''';;;;;;;;'''';;;;;;+++';::;;::;+;                                               
//             ,:::;+;;,  .';;''';;;::;'+###.++#####+++'''''''''''''';;;'++++++'''';,:;'                                                
//             ,:::;';;'  .'';''';;::;'+#### :+'::+###+++++''''''''';;;'++++++++++;,::;'                                                
//             ,:::;+;;+` `;';;''';;;''+##+`  :`   ,+###++++++++++'';;'+++###+++'';:::':                                                
//             ::::;';;';  ;';;''';;'++###,          .'###++++++++++'''+++####++'';:::',                                                
//             :::;;';;'+  ;';;''''''+####              ,+############+##+####++;';::;'`                                                
//             ;::;;;;;'+  :';;;''''+####,                ``:'+###++';,` ,+###++;';;;;;                                                 
//             ;::;;:;;''  ;;::::;'+####+                                ;+####+;;;;;'.                                                 
//             ;::;;:::;;,:::,,::;'##++#`                                '+####+;;;;;+                                                  
//             ::::;,::;;:::,,,:;'###++;                                `'+#+##+';;;;+                                                  
//             ::::::::;;;:,,,:;;+##+++`                                .'+'+#++':;'':                                                  
//             ::,:;:;::;;,.,:;;';++++'                                 ;;;;+#`+':;''`                                                  
//            `::,:;;;::;:.,:;;+.+++++:                                 ';:'+' '+;;'+                                                   
//            `:::::;;;:;,,:;'+,,+++++`                                 ;::+#  ,+;;''                                                   
//             :::,:;;:;;,:;'+``;+++++                                  ;:;+;  `+;;;:                                                   
//             ::;,::;':;:;+': `'++++#                                 .;:;+`  .+';'.                                                   
//             ::;,,,;+:;;''+  `'++++;                                 :::'+   .+;;;:                                                   
//             :::,,,;':;;;;,   :++++`                                 :,:++   `';;;,                                                   
//             ::::,,;';;;;+    .++'+                                  ::'+,   `:;;',                                                   
//             ::::,,;+;:;''     ++''                                 `::+'     ::;+`                                                   
//             :,;:,,;+;;;;'     ;';'`                                .:;+      ';'+                                                    
//             .,..,,;+;;+:',    .':;:                                ,:;'      ;'+:                                                    
//              ,``.,:+;;+,;:    `'::'                                ::'.      ;'+.                                                    
//                .,,.+''+,:'     ;;:;`                               ::+       ;'+`                                                    
//                ,,``';'+,:;`    ,;:::                              .,:'       ;'+`                                                    
//                 ` `;'';,,;     .;::;                              ,:;;       ;'+                                                     
//                   .;;':.,;      ::::.                            `::;,       ;'+                                                     
//                   .::',.,:      `::,'                            .::;,      `;''                                                     
//                   ,,,;`..,       ',,'                            :';'.      ,;''`                                                    
//                   ,,,: `.`       ;,:::                           :';:'      ,;';.                                                    
//                   ,,,;` `        ;+;:::                          :;'::,     ::;;;                                                    
//                  `,:,:,          .;+:::+                           '::',    ;:;:;`                                                   
//                   ;;,:;            ,;''+,                          #:+,#    `:':,;`                                                  
//                   ;,;,:'           `#+:,#                          :++'',     ,,:;+                                                  
//                     ,,,:'.          .;:,`                           `.`       ;;';'.                                                 
//                     :,:;:'                                                    `+':;#                                                 
//                     .#+;:'                                                     ,':,.                                                 
//                      `';;,                                                                                                           
//                                                                                                                                      
//                                                                                                                                      
                                                                                                                                      