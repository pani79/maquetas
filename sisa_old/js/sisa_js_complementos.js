// JavaScript Document






$(document).ready(function(){

// Cuando arranca el sript y esta todo listo... arranca el baile


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






//	ArbolDeNavegacion   ===================================================================================

if($(this).find('.ArbolDeNavegacion')) {
	$( ".ArbolDeNavegacion" ).hide();

};

$(this).find('#menu_principal_boton_mimenu li').click( 0, function() {
	$( ".ArbolDeNavegacion" ).show();
});







});

