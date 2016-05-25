// var $hateful3dSessions = $('.tipo-sessao.3D').parents('li.place-hours-it');
//   $hateful3dSessions.hide();

//   // Esconder os cinemas que só tiverem sessões 3D
//   var $allTheaterSessions = $hateful3dSessions.parent();
//   $allTheaterSessions.each( function( ) {
//     var $theaterSessions = $( this );
//     var allSessions = $theaterSessions.children().length;
//     var invisibleSessions = $theaterSessions.children('[style*="display: none"]').length;
//     if ( allSessions == invisibleSessions ) {
//       $theaterSessions.parents('article').hide();
//     }
//   });

//-------
// 3D is not a valid JS selector, so its necessary to represent it using its unicode codepoint (\\33)
var hateful3dSessions = document.querySelectorAll('.tipo-sessao.\\33 D');
for( var i = 0; i < hateful3dSessions.length; i++  ) {
  // Hide the sessions
  var sessionTag = hateful3dSessions[i].closest('li.place-hours-it');
  sessionTag.style = "display:none";


  var movieTheatherSessions = sessionTag.parentNode;


  var numOfSessions = movieTheatherSessions.children.length;

  console.log( "TOTAL DE SESSOES:" + numOfSessions );

  var numOf3dSessions = 0;

  for ( var j = 0; j < movieTheatherSessions.children.length; j++ ) {
    if ( typeof movieTheatherSessions.children[j].style != "undefined" ) {
      if (movieTheatherSessions.children[j].style.display == "none") {
        numOf3dSessions++;
      }
    }
  }

  console.log( "SESSOES 3d:" + numOf3dSessions );
  console.log( movieTheatherSessions );

  if (numOf3dSessions == numOfSessions ) {
    movieTheatherSessions.closest('article').style = "display:none";
  }
}