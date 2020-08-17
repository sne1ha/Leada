/// When window has loaded...
window.onload = function() {

  //  Input text box element
  var myName = document.getElementById('myName');

  //  Output element (where Braille is shown)
  var myOutput = document.getElementById('output');

  /*
   * Array that maps English letters
   * to Braille symbols. 
   * http://symbolcodes.tlt.psu.edu/bylanguage/braillechart.html
  */
 
  var map ={
    'a' : '&#10241;',
    'b' : '&#10243;',
    'c' : '&#10249;',
    'd' : '&#10265;',
    'e' : '&#10257;',
    'f' : '&#10251;',
    'g' : '&#10267;',
    'h' : '&#10259;',
    'i' : '&#10250;',
    'j' : '&#10266;',
    'k' : '&#10245;',
    'l' : '&#10247;',
    'm' : '&#10281;',
    'n' : '&#10269;',
    'o' : '&#10261;',
    'p' : '&#10255;',
    'q' : '&#10271;',
    'r' : '&#10263;',
    's' : '&#10254;',
    't' : '&#10270;',
    'u' : '&#10277;',
    'v' : '&#10300;',
    'w' : '	&#10298;',
    'x' : '&#10285;',
    'y' : '&#10301;',
    'z' : '&#10293;',
    ' ': '&emsp;'
  };

  //  When something is typed...
  myName.onkeyup = function() {

    //  Clear output
    output.innerHTML = "";

    //  Get input value, convert to lower case
    var theInput = myName.value.toLowerCase();

    //  Loop through characters in input string
    for (var i = 0; i < theInput.length; i++) {
       
      //  Store character in variable
      var letter = theInput.charAt( i );
      
      //  Check character is letter (between a - z) or space
      if( letter.match(/[a-z\s]/i) ) {
        
        //  Match letter to Braille Symbol
        var symbol = map[ letter ];
        
        //  Add Braille symbol to output element
        output.innerHTML += symbol;
        
      }//   End if

    }// End for loop

  }// End myName.onkeyup

}// End window.onload
