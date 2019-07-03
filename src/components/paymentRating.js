import React from 'react';
import data from '../data.json';
import Bars from './bars'
import getPaymentSystems from '../getPaymentSystems.js'

class paymentRating extends React.Component{
  render(){
    var paymentSystems=getPaymentSystems();
    return(
      <div class="container">
      <div class="col-lg-12"><h3 className="tableHeader">Рейтинг платёжных систем</h3></div>
      <div class="col-lg-12">

      <ol>
      {
        paymentSystems.map((data) => {
          return <li>{data.name + " ("+data.count+")"}</li>
      })
      }
      </ol>
      <Bars/>
      </div>
      </div>
    );
  }


}

export default paymentRating;
