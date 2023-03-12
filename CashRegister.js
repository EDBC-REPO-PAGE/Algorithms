function normalize( _value ){
    return Number( _value.toFixed(4) );
  }
  
  function checkCashRegister(price, cash, cid) {
  
    let _prc = [0.01,0.05,0.1,0.25,1,5,10,20,100].reverse();
    let _dif = Math.abs(price-cash);
    let change = new Array();
  
    // JSON Inmutable Array asignation instead of spread
    let _cid = JSON.parse(JSON.stringify(cid)).reverse();
  
    for( var i in _prc ){
  
      let _acc = 0;
  
      while( _dif>0 && _dif>=_prc[i] && _cid[i][1]>0 ){  
        _cid[i][1] = normalize( _cid[i][1] - _prc[i] );
        _dif = normalize( _dif - _prc[i] );
        _acc += _prc[i]; 
      } 
  
      if( _acc!=0 ) change.push([_cid[i][0],_acc]);
  
    }
  
    if( _cid.every( x=>x[1]==0 ) && _dif == 0 )
      return {
        status: 'CLOSED',
        change: cid,
      };
  
    else if( change.length > 0 && _dif == 0 )
      return {
        status: 'OPEN',
        change: change,
      };
   
    else
      return {
        status: 'INSUFFICIENT_FUNDS',
        change: new Array(),
      };
  
  }
  
  console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  );