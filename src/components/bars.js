import React from 'react';
import {Bar} from 'react-chartjs-2';
import data from '../data.json';
import getPaymentSystems from '../getPaymentSystems.js'

class bars extends React.Component{
  render() {
    var paymentSystems=getPaymentSystems();
    var names = paymentSystems.map(function(a) {return a.name;});
    var counts = paymentSystems.map(function(a) {return a.count;});
    const myData = {
      labels: names,
      datasets: [{
        label: 'Платёжные системы',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: counts
        }]
      };
    return (
      <div>
        <Bar
          data={myData}
          width={150}
          height={350}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
export default bars;
