// JavaScript Document






$(document).ready(function(){
// Cuando arranca el sript y esta todo listo... arranca el baile



// _________________________▄▀▀▄
// __ ▄▀▀▄_________________█▒▒▒█
// _ █▒▒▒█________________ █▒▒▒█
// _ █▒▒▒█________________█▒▒▒█
// __ █▒▒▒█______________█▒▒▒█
// ___█▒▒▒█_____________█▒▒▒█
// ____█▒▒▒█____________█▒▒▒█
// ____█▒▒▒▀▄▀▀▄▀▀▀▄▄▀▒▒▒█
// ____█▒▒▒-█▒▒▒█▒▒▒█▒▒▒▒ █
// ____█▒▒▒▒█▒▒▒█▒▒▒█▒▒▒▒█
// ____█▒▒▒▒█▒▄▄▀▀▄▒▒█▒▒▒█
// _____█▒▒▄▀▀▒▒▒▒█▒▒█▒▒▒█
// _____█▄▀▒▒▒▒▒▒▄▀▒▒█▒▒▒█
// ____▄▀▒▒▒▒▒▒▄▀▒▀▀▀▒▒▒ █
// ____█▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█
// ____█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
// _____█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
// ______ █▒▒▒▒▒▒▒▒▒▒▒▄▀
// ________▀▀▀▀▀▀▀▀▀▀▀



//	Listas   ===================================================================================


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



$('#MuestraBarra').click(function() {		$('.listas_cabeza').show();	$('.nobarra').hide();	});
$('#OcultaBarra').click(function() {		$('.nobarra').show();	$('.listas_cabeza').hide();	});

//	Seteos iniciales
//	Para que aparezcan por default cerradas
	$( "#lista_referenciacolumnas").hide();
	$( "#lista_exportarreportes").hide();
	$( "#lista_configuracioncolumnas").hide();
	$( "#lista_referenciacolumnas1").hide();
	$( "#lista_exportarreportes1").hide();
	$( "#lista_configuracioncolumnas1").hide();

	if(document.querySelector('#MuestraBarra')!=null){
		$(this).find('.listas_cabeza').hide();
		$("#OcultaBarra").toggleClass("util_borde_seleccion util_rec_br");
	};

}else{
//	alert("no hay lista en esta pagina");
}





});
