// JavaScript Document


$(document).ready(function(){
    // Cuando arranca el sript y esta todo listo... arranca el baile
    // console.log("who ya gonna call?");
    
    
    
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
    
    
        if(document.querySelector('.SNVS_tableroLaboratorioAgrupado_r1')!=null){
            
            //console.log("who ya gonna call?");
            
            let estaPagina = document.querySelector('.SNVS_tableroLaboratorioAgrupado_r1');
            let botnMuestra = document.querySelector('.pieDeFormulario .boton_pos');
            let configuracion = [ null, null, null, null, null, null]; 
            let configuracionPasoActual = 0; 
            let seccionesInfo = [
                '.listaSeleccion', 
                '.listaSeleccionHorizontal', 
                '.indicadorA', 
                '.indicadorB', 
                '.indicadorC', 
                '.departamento', 
                '.localidad'
            ]; 

            $(this).find('.boton.radio').click(function() {     configura($(this).attr("valorA"), $(this).attr("valorB"), $(this).attr("valorC"));    });           
            
            $(this).find('select.i_provincia').change(function() {      configura(2, this.value, "provincia");        }); 
            $(this).find('select.i_departamento').change(function() {      configura(3, this.value, "departamento");        }); 
            $(this).find('select.i_localidad').change(function() {      configura(4, this.value, "localidad");        }); 
            $(this).find('.boton.resetea').click(function() {     configuracionResetea();    });
            $(this).find('.boton.muestraDatos').click(function() {     manejaSecciones();    });
            
                    
            function manejaSecciones(){
                for (let index = 0; index < seccionesInfo.length; index++) {
                    const element = seccionesInfo[index];
                    $( estaPagina ).find( element ).hide();  
                }
                if(configuracionPasoActual > 4){
                    if (configuracion[0] == 1 & configuracion[1] == 1) {
                        $('.localidad').show();
                    } else if (configuracion[0] == 2 & configuracion[1] == 2) {
                        $('.indicadorA').show();
                    }
                }
                if(configuracionPasoActual > 3){
                    if (configuracion[0] == 1 & configuracion[1] == 1) {
                        $('.localidad').show();
                    } else if (configuracion[0] == 2 & configuracion[1] == 2) {
                        $('.indicadorB').show();
                    }
                }else if(configuracionPasoActual > 2){
                    if (configuracion[0] == 1 & configuracion[1] == 1) {
                        $('.departamento').show();
                    } else if (configuracion[0] == 2 & configuracion[1] == 2) {
                        $('.indicadorA').show();
                    }
                }else if(configuracionPasoActual > 1){
                    if (configuracion[0] == 1 & configuracion[1] == 1) {
                        $('.listaSeleccionHorizontal').show();
                    } else if (configuracion[0] == 2 & configuracion[1] == 2) {
                        $('.listaSeleccion').show();
                    }
                    
                }
            }

            function configuracionResetea(){
                for (let index = 0; index < configuracion.length; index++) {
                    configuracion[index] = null;
                }
                configuracionPasoActual = 0;
                menuModificaAspectoMenu();
                manejaSecciones();
            }

            function configura(elemento, valor, quecosa){
                //console.log('configura/' + elemento + '/' + valor + '/' + quecosa); 
                configuracion[elemento] = valor;
                //console.log('configuracion/' + configuracion); 
                menuModificaAspectoMenu();
                
                console.log('*' + configuracion);
                //menuModificaAspecto(valor, quecosa);
            }

            function menuModificaAspectoMenu() {   
                
                console.log('*' + configuracion);
                console.log('menuModificaAspectoMenu/' + configuracion.length);       
                // ver cual es el paso actual       
                for (let index = 0; index < configuracion.length; index ++) {
                    if(index == 0 || (configuracion[index] == null && configuracion[index - 1] != null)){
                        configuracionPasoActual = index;
                    }
                }
                if(configuracionPasoActual >= 2){  $(botnMuestra).show(); }else { $(botnMuestra).hide();}
                console.log('configuracionPasoActual/' + configuracionPasoActual); 
                //  Actualiza el aspecto     
                for (let indexA = 0; indexA < configuracion.length; indexA ++) {
                    menuModificaAspectoMenuElemento(indexA);
                }
            } 
            
            function menuModificaAspectoMenuElemento(elemento) {                
                //console.log('recibo/' + elemento); 
                switch (elemento) {
                    case 0:
                        menuModificaAspectoMenuBoton('nombre', 0);
                        break;
                    case 1:
                        menuModificaAspectoMenuBoton('filtro', 1);
                        break;
                    case 2:
                        menuModificaAspectoMenuSelect('provincia', 2);
                        break;
                    case 3:
                        menuModificaAspectoMenuSelect('departamento', 3);
                        break;
                    case 4:
                        menuModificaAspectoMenuSelect('localidad', 4);
                        break;
                    case 5:
                        menuModificaAspectoMenuBuscador('establecimiento', 5);
                        break;
                
                    default:
                        console.log('UOPS / menuModificaAspectoMenuElemento');
                        break;
                }
            }
            
            function menuModificaAspectoMenuBoton(donde, registro) {      
                elementoDiv = '.subMenu .' + donde;           
                /* console.log('/' + registro + '-' + configuracionPasoActual + ' = [' + (registro - configuracionPasoActual) + ']');  */
                console.log('-> ' + registro + ' (' + configuracionPasoActual + ' ) [' + (registro - configuracionPasoActual) + ']'); 
                if(registro <= configuracionPasoActual ){
                    $(estaPagina).find(elementoDiv).css('opacity', 1);
                    let i = 1;
                    while (i < 3) {
                        elementoHtml = '.subMenu .' + donde + ' .op' + i;                    
                        //console.log('llego -- /' + $(estaPagina).find(elementoHtml).attr("valorB")); 
                        if(configuracion[registro] == $(estaPagina).find(elementoHtml).attr("valorB")){
                            $(estaPagina).find(elementoHtml).removeClass('deshabilitado')
                            $(estaPagina).find(elementoHtml).addClass('seleccionado'); ; 
                        }else if(configuracion[registro] == null){
                            //console.log('pinto un NULL/');
                            $(estaPagina).find(elementoHtml).removeClass('deshabilitado'); 
                            $(estaPagina).find(elementoHtml).removeClass('seleccionado'); 
                        }else{
                            $(estaPagina).find(elementoHtml).removeClass('seleccionado'); 
                            $(estaPagina).find(elementoHtml).addClass('deshabilitado'); 
                        }
                        i++;
                    }
                    /* console.log(configuracionPasoActual + 'es mayor o igual a' + registro); 
                    console.log('llego/' + donde + '*' + registro + ' * muestro');  */
                }else{
                    $(estaPagina).find(elementoDiv).css('opacity', 0.2);
                    // $(estaPagina).find(elementoDiv).hide();  
                    /* console.log(configuracionPasoActual + 'es menor a' + registro); 
                    console.log('llego/' + donde + '*' + registro + ' * escondo'); */ 
                }
            }

            function menuModificaAspectoMenuSelect(donde, registro) {        
                elementoDiv = '.subMenu .' + donde;   
                elementoSelect = '.subMenu .' + donde + ' select';       

                //console.log('menuModificaAspectoMenuSelect llego/' + donde + '*' + registro);                                 
                //console.log('configuracionPasoActual -- /' + ((registro - configuracionPasoActual) > 1)); 
                console.log('//' + elementoDiv + '*');
                console.log('/' + registro + '-' + configuracionPasoActual + ' => ' + (registro - configuracionPasoActual)); 
                if(
                    (registro == configuracionPasoActual) ||
                    (configuracionPasoActual >= registro)
                ){
                    $(estaPagina).find(elementoDiv).css('opacity', 1);
                    console.log('llego/' + donde + '*' + registro + ' * muestro'); 
                }else{
                    /* $(estaPagina).find(elementoDiv).hide();  */
                    $(estaPagina).find(elementoDiv).css('opacity', 0.2);
                    console.log('llego/' + donde + '*' + registro + ' * escondo'); 
/* 
                    $(estaPagina).find(elementoDiv).show(); 
                    console.log('llego/' + donde + '*' + registro + ' * muestro'); 
                    if(configuracion[registro] == $(estaPagina).find(elementoSelect).attr("valorB")){
                        $(estaPagina).find(elementoDiv).addClass('seleccionado'); 
                    }else if(configuracion[registro] == null){
                        //console.log('pinto un NULL/');
                        $(estaPagina).find(elementoDiv).removeClass('deshabilitado'); 
                        $(estaPagina).find(elementoDiv).removeClass('seleccionado'); 
                    }else{
                        $(estaPagina).find(elementoDiv).addClass('deshabilitado'); 
                    }
                     */
                }

                    
            }
            
            function menuModificaAspectoMenuBuscador(donde, registro) {        
                elementoDiv = '.subMenu .' + donde;   
                elementoSelect = '.subMenu .' + donde + ' select';       

                console.log('/' + registro + '-' + configuracionPasoActual ); 
                if(registro == configuracionPasoActual){
                    /* $(estaPagina).find(elementoDiv).hide();  */
                    $(estaPagina).find(elementoDiv).css('opacity', 1);
                    console.log('llego/' + donde + '*' + registro + ' * escondo'); 
                }else{
                    $(estaPagina).find(elementoDiv).css('opacity', 0.21);
/* 
                    $(estaPagina).find(elementoDiv).show(); 
                    console.log('llego/' + donde + '*' + registro + ' * muestro'); 
                    if(configuracion[registro] == $(estaPagina).find(elementoSelect).attr("valorB")){
                        $(estaPagina).find(elementoDiv).addClass('seleccionado'); 
                    }else if(configuracion[registro] == null){
                        //console.log('pinto un NULL/');
                        $(estaPagina).find(elementoDiv).removeClass('deshabilitado'); 
                        $(estaPagina).find(elementoDiv).removeClass('seleccionado'); 
                    }else{
                        $(estaPagina).find(elementoDiv).addClass('deshabilitado'); 
                    }
                     */
                }
    
            }

            function buchon(an){
                alert('buchon - ' + an);
            }
            
            //	Seteos iniciales   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            //manejaSecciones(null);
            //configuracionResetea();


/* 
            $(estaPagina).find('.provincia').disabled = false; 
            $(estaPagina).find('.departamento').prop('disabled', false);
            $(estaPagina).find('.localidad').prop('disabled', true);
            $(estaPagina).find('.localidad').css('opacity', 0.2);
            //$(estaPagina).find('.menu').addClass('reg_snvs'); 
 */
            /*         
                function configura(elemento, donde, valor){
                    console.log(elemento + '/' + donde + '/' + valor); 
                    let lugar = '.columna1 .seleccion' + donde + ' p';
                    $( estaPagina ).find(lugar).text(valor);  
                    pasosConfiguracion[donde] = valor; 
                    switch (donde) {
                        case 0:
                            console.log('/0');
                            $( estaPagina ).find( "#sel0" + elemento ).addClass('reg_snvs');          
                            $( estaPagina ).find( "#sel0" + elemento ).find('h3').addClass('util_textcolor_blanco');  
                            break;
                    
                        case 1:
                            console.log('/1');
                            $( estaPagina ).find( "#sel0" + elemento ).addClass('reg_snvs');          
                            $( estaPagina ).find( "#sel0" + elemento ).find('h3').addClass('util_textcolor_blanco');  
                            break;

                        default:
                            break;
                    }
                    $(estaPagina).find('.provincia').disabled = false; 
                    $(estaPagina).find('.localidad').disabled = true; 
                    $(estaPagina).find('.menu').addClass('reg_snvs'); 
                }  
            */
            /* 

                let estaPagina = document.querySelector('.SNVS_tableroLaboratorioAgrupado');
                let paso = 0;
                let pasosConfiguracion = [null, null, null, null]; 
                
                let secciones = []; // no se si lo voy a usar

                $(this).find('.boton_siguiente').click(function() {     actualiza(true);    });
                $(this).find('.boton_anterior').click(function() {      actualiza(false);    });

                $('.botonSeleccion').click( function() { console.log("botonSeleccion"); realizaAccion($(this).attr("valorA"), $(this).attr("valorB"), $(this).attr("valorC"));    });
    
                secciones = $(estaPagina).find('.configuracion').children();



                function actualiza(avanza){
                    if(avanza == true){
                        paso ++;
                    }else if(avanza == false){
                        paso --;
                    }else{                   }
                    ocultaPasos();
                    ocultaMuestraConfiguracion();
                    switch (paso) {
                        case 0:
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
                            if(pasosConfiguracion[1] == "Territorialidad"){
                                $( ".paso2a" ).show();                          
                            }else if(pasosConfiguracion[1] == "Grupo de evento"){
                                $( ".paso2b" ).show();
                            }else{
                                return;
                            }
                            break;

                        case 3:          
                            if(pasosConfiguracion[1] == "Territorialidad"){
                                $( ".paso3a" ).show();                          
                            }else if(pasosConfiguracion[1] == "Grupo de evento"){
                                $( ".paso3b" ).show();
                            }else{
                                console.log('mega UOPS');
                                return;
                            }
                        
                            $(".barraMenu > .boton_siguiente").hide();
                            break;

                        default:
                            break;
                    }
                }
                
                function actualizaConfiguracion(indice, valor){
                    pasosConfiguracion[indice] = valor;
                    console.log(pasosConfiguracion[indice]);
                }
                

                function ocultaPasos(){
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
                    console.log(elemento + '/' + donde + '/' + value); 
                    let lugar = '.columna1 .seleccion' + donde + ' p';
                    $( estaPagina ).find(lugar).text(value);  
                    pasosConfiguracion[donde] = value; 
                    switch (donde) {
                        case 0:
                            console.log('/0');
                            $( estaPagina ).find( "#sel0" + elemento ).addClass('reg_snvs');          
                            $( estaPagina ).find( "#sel0" + elemento ).find('h3').addClass('util_textcolor_blanco');  
                            break;
                    
                        case 1:
                            console.log('/1');
                            $( estaPagina ).find( "#sel0" + elemento ).addClass('reg_snvs');          
                            $( estaPagina ).find( "#sel0" + elemento ).find('h3').addClass('util_textcolor_blanco');  
                            break;

                        default:
                            break;
                    }
                }
             */
        };
        
    
    
    
    });