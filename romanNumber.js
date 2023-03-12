const dict = {
  1000:'M', 900:'CM', 800:'DCCC', 700:'DCC', 600:'DC', 500:'D', 400:'CD', 300:'CCC', 200:'CC', 
  100:'C', 90:'XC', 80:'LXXX', 70:'LXX', 60:'LX', 50:'L', 40:'XL', 30:'XXX', 20:'XX',
  10:'X', 9:'IX', 8:'VIII', 7:'VII', 6:'VI', 5:'V', 4:'IV', 3:'III', 2:'II', 1:'I'
}

function convertToRoman(num) {

  var key = Object.keys(dict).reverse();
  var rom = '';

  while( num>0 ){
    for( var i in key ){
      if( Number(key[i])<=num ){
        num -= Number(key[i]); 
        rom += dict[key[i]];
        break;
      }
    }
  }

  console.log( rom,num );
  return rom;
}

convertToRoman(1023);