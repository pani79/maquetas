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
    
    
        if(document.querySelector('.SNVS_tableroLaboratorioAgrupado')!=null){
            alert("who ya gonna call?");

            let estaPagina = document.querySelector('.SNVS_tableroLaboratorioAgrupado');
            /* alert("///" + estaPagina); */
            let paso = 0;
            let pasosConfiguracion = [null, null, null, null]; 
            
            let secciones = []; // no se si lo voy a usar

            $(this).find('.boton_siguiente').click(function() {     actualiza(true);    });
            $(this).find('.boton_anterior').click(function() {      actualiza(false);    });

            $('.botonSeleccion').click( function() { alert("botonSeleccion"); realizaAccion($(this).attr("valorA"), $(this).attr("valorB"), $(this).attr("valorC"));    });
            /* 
                        $('#selA1').click( function() { paso0($(this).attr("valorA"), $(this).attr("valorB"));    });
                        $('#selA2').click( function() { paso0($(this).attr("valorA"), $(this).attr("valorB"));    });
                        $('#selB1').click( function() { paso0($(this).attr("valorA"), $(this).attr("valorB"));    });
                        $('#selB2').click( function() { $(this).attr("valorA"), $(this).attr("valorB");    });
             */    
            secciones = $(estaPagina).find('.configuracion').children();
            /*
            alert("///" + secciones.length);
            alert("///" + secciones[1]);
             
            $(secciones[1]).css('background-color', 'red');

            secciones.forEach(element => {
                element.css('background-color', 'red');
                
                element.hide();
                
            });
             
            for (let index = 0; index < secciones.length; index++) {
                
                $(secciones[index]).css('background-color', 'red');
            }
*/


            function actualiza(avanza){
                if(avanza == true){
                    paso ++;
                }else if(avanza == false){
                    paso --;
                }else{   
                    /* alert('mega UOPS'); */
                    /* return; */
                }
                ocultaPasos();
                ocultaMuestraConfiguracion();
                switch (paso) {
                    case 0:
                        /* Tipo */
                        $(".menu > .columna1").hide();
                        $(".menu > .columna2").removeClass('col-md-8');
                        $(".barraMenu > .boton_anterior").hide();
                        $( ".paso0" ).show();
                        break;

                    case 1:
                        $(".menu > .columna1").show();
                        $(".menu > .columna2").addClass('col-md-8');
                        $(".barraMenu > .boton_anterior").show();
                        $( ".paso1" ).show();
                        break;

                    case 2:
                        /* alert(pasosConfiguracion[1]);    */            
                        if(pasosConfiguracion[1] == "Territorialidad"){
                            $( ".paso2a" ).show();                          
                        }else if(pasosConfiguracion[1] == "Grupo de evento"){
                            $( ".paso2b" ).show();
                        }else{
                            /* alert('mega UOPS'); */
                            return;
                        }
                        break;

                    case 3:          
                        if(pasosConfiguracion[1] == "Territorialidad"){
                            $( ".paso3a" ).show();                          
                        }else if(pasosConfiguracion[1] == "Grupo de evento"){
                            $( ".paso3b" ).show();
                        }else{
                            alert('mega UOPS');
                            return;
                        }
                    
                        $(".barraMenu > .boton_siguiente").hide();
                        break;

                    default:
                        /* alert(paso); */
                        break;
                }
            }
            
            function actualizaConfiguracion(indice, valor){
                pasosConfiguracion[indice] = valor;
                alert(pasosConfiguracion[indice]);
            }
            

            function ocultaPasos(){
                /* 
                    for (let index = 0; index < pasosConfiguracion.length; index++) {
                        const element = ".paso" + index;
                        $( element ).hide();
                        
                    }
                 */
                for (let index = 0; index < (secciones.length - 1); index++) {
                    $(secciones[index]).hide();
                }
            }

            function ocultaMuestraConfiguracion(){
                for (let index = 0; index < pasosConfiguracion.length; index++) {
                    const element = ".seleccion" + index;
                    if(index < paso){
                        $( element ).show();
                    }else{
                        $( element ).hide();
                    }
                }
            }
            
            function realizaAccion(elemento, donde, value){
                alert(elemento + '/' + donde + '/' + value); /* */
                let lugar = '.columna1 .seleccion' + donde + ' p';
                /* let lugar = '.columna1 .seleccion' + donde; */                
                /* alert('lugar/' + lugar); */
                /* $( estaPagina ).find(lugar).css('background-color', 'red');    */   
                $( estaPagina ).find(lugar).text(value);  
                pasosConfiguracion[donde] = value; 
                /* 
                    $( "#selA" + donde ).addClass('reg_snvs');          
                    $( "#selA" + donde ).find('h3').text(donde);
                 */
                switch (donde) {
                    case 0:
                        alert('/0');
                        $( estaPagina ).find( "#sel0" + elemento ).addClass('reg_snvs');          
                        $( estaPagina ).find( "#sel0" + elemento ).find('h3').addClass('util_textcolor_blanco');  
                        break;
                
                    case 1:
                        alert('/1');
                        $( estaPagina ).find( "#sel0" + elemento ).addClass('reg_snvs');          
                        $( estaPagina ).find( "#sel0" + elemento ).find('h3').addClass('util_textcolor_blanco');  
                        break;

                    default:
                        break;
                }
            }

            //	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            actualiza();
    
        };
        
    
    
    
    });