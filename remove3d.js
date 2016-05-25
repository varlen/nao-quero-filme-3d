
// 3D is not a valid JS selector, so its necessary to represent it using its unicode codepoint (\\33)
var hateful3dSessions = document.querySelectorAll('.tipo-sessao.\\33 D');
for( var i = 0; i < hateful3dSessions.length; i++  ) {
  // Hide the sessions
  var sessionTag = hateful3dSessions[i].closest('li.place-hours-it');
  sessionTag.style = "display:none";

  // Check if the movie theater has other sessions
  var movieTheatherSessions = sessionTag.parentNode;
  var numOfSessions = movieTheatherSessions.children.length;
  var numOf3dSessions = 0;
  for ( var j = 0; j < movieTheatherSessions.children.length; j++ ) {
    if ( typeof movieTheatherSessions.children[j].style != "undefined" ) {
      if (movieTheatherSessions.children[j].style.display == "none") {
        numOf3dSessions++;
      }
    }
  }

  // If all of the movie theater sessions are 3d, hide the movie theater as well
  if (numOf3dSessions == numOfSessions ) {
    movieTheatherSessions.closest('article').style = "display:none";
  }
}