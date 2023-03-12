function telephoneCheck(str) {

    const s = str.match(/[\(]|[\)]/g);
    if( s && s.length!=2 ) return false;
  
    let regex = /^.\d+|\d+/g;
    str = str.match( regex );
  
    const conditions = [
      str.length==3 || str.length==1 || (str.length==4 && str[0]=='1'),
      str.length>=3 || (str.length==1 && str[0].length==10),
      str.length==1 || (3<=str.length && str.length<=4),
      str.length==1 || str.every(x=>x.length<=4),
    ];
  
    console.log( str );
    for( var i=conditions.length; i--; ){
      if( !conditions[i] ) return false;
    } 
    
    console.log( str );
    return true;
  }
  
  telephoneCheck("555)-555-5555");