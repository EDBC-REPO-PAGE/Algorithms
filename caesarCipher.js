function rot13(str) {

    var newStr = new String();
  
    for( var i=0; i<str.length; i++ ){
      
      if( str[i].match(/[^a-z]|[^A-Z]/gi) ){
        newStr+=str[i]; continue;
      }
  
      var int = str[i].charCodeAt(0)-13;
      if( int>=65 )
        newStr += String.fromCharCode(int);
      else
        newStr += String.fromCharCode(int+26);
        
    }
  
    console.log( newStr )
    return newStr;
  }
  
  rot13("SERR CVMMN!");