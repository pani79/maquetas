// JavaScript Document






$(document).ready(function(){
// Cuando arranca el sript y esta todo listo... arranca el baile













//	Biblioteca   ======================================================================================================================================================================

if(document.querySelector('#Documentos')!=null){


var documentos_seccion = "default";

$(this).find('#documentos_bot_op1').click(function()			{
	documentos_muestra_op1();
});
$(this).find('#documentos_bot_op1').mouseover(function()	{
	if(documentos_seccion != "op1"){
		$('#documentos_bot_op1').removeClass("util_margen_iz40 ");
		$('#documentos_bot_op1').addClass("util_cursor_puntero");
	}
});
$(this).find('#documentos_bot_op1').mouseout(function()	{
	if(documentos_seccion != "op1"){
		$('#documentos_bot_op1').addClass("util_margen_iz40");
		$('#documentos_bot_op1').removeClass("util_cursor_puntero");
	}
});

$(this).find('#documentos_bot_op2').click(function()			{
	documentos_muestra_op2();
});
$(this).find('#documentos_bot_op2').mouseover(function()	{
	if(documentos_seccion != "op2"){
		$('#documentos_bot_op2').removeClass("util_margen_iz40");
		$('#documentos_bot_op2').addClass("util_cursor_puntero");
	}
});
$(this).find('#documentos_bot_op2').mouseout(function()	{
	if(documentos_seccion != "op2"){
		$('#documentos_bot_op2').addClass("util_margen_iz40");
		$('#documentos_bot_op2').removeClass("util_cursor_puntero");
	}
});

$(this).find('#documentos_bot_op3').click(function()			{
	documentos_muestra_op3();
});
$(this).find('#documentos_bot_op3').mouseover(function()	{
	if(documentos_seccion != "op3"){
		$('#documentos_bot_op3').removeClass("util_margen_iz40");
		$('#documentos_bot_op3').addClass("util_cursor_puntero");
	}
});
$(this).find('#documentos_bot_op3').mouseout(function()	{
	if(documentos_seccion != "op3"){
		$('#documentos_bot_op3').addClass("util_margen_iz40");
		$('#documentos_bot_op3').removeClass("util_cursor_puntero");
	}
});

$(this).find('#documentos_bot_op4').click(function()			{
	documentos_muestra_op4();
});
$(this).find('#documentos_bot_op4').mouseover(function()	{
	if(documentos_seccion != "op4"){
		$('#documentos_bot_op4').removeClass("util_margen_iz40");
		$('#documentos_bot_op4').addClass("util_cursor_puntero");
	}
});
$(this).find('#documentos_bot_op4').mouseout(function()	{
	if(documentos_seccion != "op4"){
		$('#documentos_bot_op4').addClass("util_margen_iz40");
		$('#documentos_bot_op4').removeClass("util_cursor_puntero");
	}
});


function documentos_desselecciona(){
	$('#documentos_bot_op1').addClass("util_margen_iz40 util_cursor_puntero");
	$('#documentos_bot_op2').addClass("util_margen_iz40 util_cursor_puntero");
	$('#documentos_bot_op3').addClass("util_margen_iz40 util_cursor_puntero");
	$('#documentos_bot_op4').addClass("util_margen_iz40 util_cursor_puntero");
	$( "#sec_op1" ).hide();
	$( "#sec_op2" ).hide();
	$( "#sec_op3" ).hide();
	$( "#sec_op4" ).hide();
}



function documentos_muestra_op1(){
	documentos_seccion = "op1";
	documentos_desselecciona();
	$("#documentos_bot_op1").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$("#sec_op1" ).show();
}

function documentos_muestra_op2(){
	documentos_seccion = "op2";
	documentos_desselecciona();
	$("#documentos_bot_op2").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$("#sec_op2" ).show();
}

function documentos_muestra_op3(){
	documentos_seccion = "op3";
	documentos_desselecciona();
	$("#documentos_bot_op3").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$("#sec_op3" ).show();
}

function documentos_muestra_op4(){
	documentos_seccion = "op4";
	documentos_desselecciona();
	$("#documentos_bot_op4").removeClass("util_col_blanco util_margen_iz40 util_cursor_puntero");
	$("#sec_op4" ).show();
}


//	Seteos iniciales
	documentos_desselecciona();
	documentos_muestra_op1();



//	alert("FICHA en esta pagina");
}else{
//	alert("no hay FICHA en esta pagina");

}









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
                                                                                                                                      