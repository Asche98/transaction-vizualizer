import data from './data.json';

function compare( a, b ) {
  if ( a.count < b.count ){
    return 1;
  }
  if ( a.count > b.count ){
    return -1;
  }
  return 0;
}

function getPaymentSystems(){
  var paymentSystems=[];
  data.map((data) => {
    var name = data.transaction.payment_method.name;
    var index = -1;
for(var i = 0; i<paymentSystems.length; i++) {
    if (paymentSystems[i].name === name) {
        index = i;
        break;
    }
}
  if(index===-1){
    paymentSystems.push({name:data.transaction.payment_method.name,count:1});
  }
  else{
    paymentSystems[index].count++;
  }
}
);
return paymentSystems.sort(compare);
}
export default getPaymentSystems;
